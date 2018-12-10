<?php

use craft\elements\Entry;
use craft\commerce\elements\Product;
use craft\commerce\Plugin as Commerce;
use modules\mudmodule\MudModule as Module;

return [
	'endpoints' => [
		'/api/pages/homepage' => include 'api-endpoints/pages/homepage.php',
		'/api/pages/about' => include 'api-endpoints/pages/about.php',
		'/api/pages/services' => include 'api-endpoints/pages/services.php',
		'/api/pages/team' => include 'api-endpoints/pages/team.php',
		'/api/pages/contact' => include 'api-endpoints/pages/contact.php',
		'/api/pages/careers' => include 'api-endpoints/pages/careers.php',
		'/api/team-member/<entryId:\d+>' => function($entryId) {
			return [
				'elementType' => Entry::class,
				'criteria' => [
					'section' => 'teamMembers',
					'id' => $entryId
				],
				'one' => true,
				'paginate' => false,
				'cache' => Craft::$app->getConfig()->general->custom['cacheApi'] ? true : false,
				'serializer' => 'array',
				'transformer' => function(Entry $entry) {
					$h = Module::$instance->MudModuleService;

					$featuredPageLink = $entry->featuredLink;
					if($entry->featuredLink) {
						$featuredPageLink = [
							'text' => $entry->featuredLink->getText(),
							'url' => $entry->featuredLink->getUrl(),
							'target' => $entry->featuredLink->getTarget()
						];
					} else {
						$featuredPageLink = null;
					}

					return [
						'title' => 'Team',
						'name' => $entry->title,
						'role' => $entry->companyRole,
						'photo' => $h->getImage($entry->photo->one(), 
							[
								[
									'width'=>400, 
									'ratio'=>0.8215384615, 
									'mode' => 'crop'
								],
								[
									'width'=>800, 
									'ratio'=>0.8215384615, 
									'mode' => 'crop'
								]
							]
						),
						'biography' => $entry->biography,
						'featuredLink' => $featuredPageLink
					];
				}
			];
		},
		'/api/extra-pages/<entryId:\d+>' => function($entryId) {
			return [
				'elementType' => Entry::class,
				'criteria' => [
					'section' => 'extraPages',
					'id' => $entryId
				],
				'one' => true,
				'paginate' => false,
				'cache' => Craft::$app->getConfig()->general->custom['cacheApi'] ? true : false,
				'serializer' => 'array',
				'transformer' => function(Entry $entry) {
					$featuredPageLink = $entry->featuredLink;
					if($entry->featuredLink) {
						$featuredPageLink = [
							'text' => $entry->featuredLink->getText(),
							'url' => $entry->featuredLink->getUrl(),
							'target' => $entry->featuredLink->getTarget()
						];
					} else {
						$featuredPageLink = null;
					}
					
					return [
						'title' => $entry->title,
						'intro' => $entry->pageIntroduction,
						'body' => $entry->redactorStandard,
						'featuredLink' => $featuredPageLink
					];
				}
			];
		}
	]
];
