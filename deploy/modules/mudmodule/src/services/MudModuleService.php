<?php
/**
 * Custom Helpers module for Craft CMS 3.x
 *
 * Helpers/functions for use in Element API feed
 *
 * @link      https://www.ournameismud.co.uk
 * @copyright Copyright (c) 2018 Rich @ Mud
 */

namespace modules\mudmodule\services;

use modules\mudmodule\MudModule;
use aelvan\imager\Imager as Imager;
use benf\embeddedassets\Plugin as EmbeddedAssets;

use Craft;
use craft\base\Component;

/**
 * MudModuleService Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Rich @ Mud
 * @package   MudModule
 * @since     1.0.0
 */
class MudModuleService extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * This function can literally be anything you want, and you can have as many service
     * functions as you want
     *
     * From any other plugin/module file, call it like this:
     *
     *     MudModule::$instance->customHelpersModuleService->exampleService()
     *
     * @return mixed
     */
    public function getImage($file, $transform, $transformDefaults = null, $configOverrides = null)
    {
        if (!Imager::$plugin || !$file)
			{
				return null;
			}

			$image = Imager::$plugin->imager->transformImage($file, $transform, $transformDefaults, $configOverrides);
			$width = $image[0]->width;
			$height = $image[0]->height;
			$color = 'transparent';

      return array(
          'id' => $file->id,
          'alt' => $file->title,
          'src' => $image[0]->url,
          'url' => $image[0]->url,
          'srcset' => Imager::$plugin->imager->srcset($image),
          'width' => $width,
          'height' => $height,
          'placeholder' => 'data:image/svg+xml;charset=utf-8,'.rawurlencode("<svg xmlns='http://www.w3.org/2000/svg' width='$width' height='$height' style='background:$color'/>")
      );
    }

    public function getVideo($file, $image = null)
    {
        if($file->extension == 'mp4') {
            $video = [
                'type' => 'local',
                'url' => $file->getUrl(),
								'title' => $file->title,
								'poster' => $image ? $image->getUrl() : null 
            ];
        } else {
            $embeddedAsset = EmbeddedAssets::$plugin->methods->getEmbeddedAsset($file);
            $video = [
                'type' => 'vimeo',
                'title' => $embeddedAsset['title'],
                'code' => $embeddedAsset['code'],
                'poster' => $image ? $image->getUrl() : $embeddedAsset['image'],
                'aspectRatio' => $embeddedAsset['aspectRatio']
            ];
        }

        return $video;
    }

    public function getCaseStudies($caseStudies)
    {
        $featuredCaseStudies = [];
        foreach ($caseStudies as $caseStudy) {

            $categories = [];
            foreach ($caseStudy->caseStudyCategories->all() as $category) {
                $categories[] = $category->title;
            }

            $featuredCaseStudies[] = array(
                'hiresImage' => $this->getImage(
                    $caseStudy->previewImageLarge->one(),
                    array(['width' => 2200], ['width' => 1800], ['width' => 1200])
                ),
                'image' => $this->getImage(
                    $caseStudy->previewImage->one(),
                    array(['width' => 800], ['width' => 400])
                ),
                'title' => $caseStudy->title,
                'url' => $caseStudy->url,
                'category' => [
                    'title' => implode(' / ', $categories)
                ]
            );
        }

        return $featuredCaseStudies;

    }

    public function getBlocks($blocks)
    {
        $contentPanels = [];
        foreach ($blocks as $panel) {
            switch ($panel->type->handle) {

                /*
                 * Content Panels
                 */
								case 'textOnly':
									$contentPanels[] = array(
										'type' => $panel->type->handle,
										'title' => $panel->heading,
										'body' => $panel->body,
										'cta' => $panel->blockLink->getUrl() ? [
											'url' => $panel->blockLink->getUrl(),
											'label' => $panel->blockLink->getText()
										] : null
									);
									break;
									
                case 'imageWithText':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->heading,
												'body' => $panel->body,
												'cta' => $panel->blockLink->getUrl() ? [
													'url' => $panel->blockLink->getUrl(),
													'label' => $panel->blockLink->getText()
												] : null,
                        'bracketImage' => $this->getImage(
                            $panel->image->one(),
                            array(['width' => 1600], ['width' => 800])
                        ),
                        'bracketLeft' => [
                            'spacing' => 4,
                            'position' => 'front'
                        ],
                        'bracketRight' => [
                            'spacing' => 2,
                            'position' => 'back'
												],
												'textPosition' => $panel->textPosition
                    );
                    break;

                case 'imageOverflowWithText':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->heading,
                        'body' => $panel->body,
                        'link' => $panel->blockLink->getUrl() ? [
                            'url' => $panel->blockLink->getUrl(),
                            'label' => $panel->blockLink->getText()
                        ] : null,
                        'foregroundImage' => $this->getImage(
                            $panel->foregroundImage->one(),
                            array(['width' => 2200], ['width' => 1800])
                        ),
                        'backgroundImage' => $this->getImage(
                            $panel->backgroundImage->one(),
                            array(['width' => 2200], ['width' => 1800])
                        ),
                        'bracketLeft' => [
                            'spacing' => 4,
                            'position' => 'front'
                        ],
                        'bracketRight' => [
                            'spacing' => 2,
                            'position' => 'back'
												],
												'textPosition' => $panel->textPosition
                    );
                    break;

                case 'logosWithText':
                    $logos = [];
                    foreach ($panel->clients->all() as $client) {
                        $logos[] = $this->getImage(
                            $client->logo->one(),
                            array(['width' => 800], ['width' => 400], ['width' => 200])
                        );
                    }
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->heading,
                        'body' => $panel->body,
                        'cta' => $panel->blockLink->getUrl() ? [
                            'url' => $panel->blockLink->getUrl(),
                            'label' => $panel->blockLink->getText()
                        ] : null,
                        'logos' => $logos,
                        'bracketLeft' => [
                            'spacing' => 4,
                            'position' => 'front'
                        ],
                        'bracketRight' => [
                            'spacing' => 2,
                            'position' => 'back'
												],
												'textPosition' => $panel->textPosition
                    );
                    break;

                case 'testimonial':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'quote' => $panel->quote,
                        'authorName' => $panel->authorName,
                        'authorRole' => $panel->authorRole
                    );
										break;

							  case 'testimonialText':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'quote' => $panel->quote,
                        'authorName' => $panel->authorName,
                        'authorRole' => $panel->authorRole
                    );
                    break;

                /*
                 * Article blocks
                 */
                case 'quoteCentral':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'quote' => $panel->quote,
                        'authorName' => $panel->authorName,
                        'authorRole' => $panel->authorRole
                    );
                    break;

                case 'videoCentral':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'video' => $this->getVideo($panel->video->one())
                    );
                    break;

                case 'textCentral':
                    $contentPanels[] = array(
											'type' => $panel->type->handle,
											'body' => $panel->body
                    );
                    break;

                /*
                 * Article Panels
                 */
                case 'articleTextImage':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'image' => $this->getImage(
                            $panel->image->one(),
                            array(['width' => 1200], ['width' => 800])
                        ),
												'imageCaption' => $panel->imageCaption,
												'textPosition' => $panel->textPosition
                    );
                    break;

                case 'articleTextTestimonial':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'quote' => $panel->quote,
                        'authorName' => $panel->authorName,
                        'authorRole' => $panel->authorRole
                    );
                    break;

                case 'articleTextStatistics':
                    $statistics = [];
                    foreach ($panel->statistics as $stat) {
                        $statistics[] = array(
                            'statistic' => $stat['statistic'],
                            'text' => $stat['supportingText']
                        );
                    }
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'statistics' => $statistics
                    );
                    break;

                /*
                 * Service Panels
                 */
                case 'serviceImageText':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'image' => $this->getImage(
                            $panel->image->one(),
                            array(['width' => 1600], ['width' => 1200], ['width' => 800])
                        ),
                        'imageCaption' => $panel->imageCaption,
                        'textPosition' => $panel->textPosition
                    );
                    break;

                case 'serviceIconText':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'icon' => $panel->icon->one()->url,
                        'textPosition' => $panel->textPosition
                    );
                    break;

                case 'serviceFullImageText':
                    $contentPanels[] = array(
                        'type' => $panel->type->handle,
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'image' => $this->getImage(
                            $panel->backgroundImage->one(),
                            array(['width' => 2000], ['width' => 1600], ['width' => 800])
												),
												'textPosition' => $panel->textPosition
                    );
                    break;

                case 'serviceTestimonialText':
                    $contentPanels[] = array(
                        'type' => 'testimonialText',
                        'title' => $panel->blockTitle,
                        'body' => $panel->body,
                        'quote' => $panel->quote,
                        'authorName' => $panel->authorName,
                        'authorRole' => $panel->authorRole,
                        'textPosition' => $panel->textPosition
                    );
                    break;
            }

        }

        return $contentPanels;

    }

}
