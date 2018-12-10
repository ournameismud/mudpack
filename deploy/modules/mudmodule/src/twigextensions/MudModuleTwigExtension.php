<?php
/**
 * Custom Helpers module for Craft CMS 3.x
 *
 * afaef
 *
 * @link      https://ournameismud.co.uk
 * @copyright Copyright (c) 2018 Richard George
 */

namespace modules\mudmodule\twigextensions;

use modules\mudmodule\MudModule;

use Craft;
use Twig_Extension;
use craft\helpers\UrlHelper;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Richard George
 * @package   MudModule
 * @since     1.0.0
 */
class MudModuleTwigExtension extends \Twig_Extension
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'MudModule';
    }

    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters()
    {
        return [
            new \Twig_SimpleFilter('someFilter', [$this, 'someInternalFunction']),
        ];
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
    * @return array
     */
    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('fetchData', [$this, 'fetchData']),
        ];
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function fetchData($endpoint)
    {
        $data = file_get_contents($endpoint);
        return json_decode($data, true);
    }
}
