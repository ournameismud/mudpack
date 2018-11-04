<?php
/**
 * Craft 3 Multi-Environment
 * Efficient and flexible multi-environment config for Craft 3 CMS
 *
 * $_ENV constants are loaded by craft3-multi-environment from .env.php via
 * ./web/index.php for web requests, and ./craft for console requests
 *
 * @author    nystudio107
 * @copyright Copyright (c) 2017 nystudio107
 * @link      https://nystudio107.com/
 * @package   craft3-multi-environment
 * @since     1.0.5
 * @license   MIT
 */

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in src/config/GeneralConfig.php
 */
if (isset($_SERVER['HTTPS']) && (strcasecmp($_SERVER['HTTPS'], 'on') === 0 || $_SERVER['HTTPS'] == 1)
    || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && strcasecmp($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') === 0
) {
    $protocol = "https://";
} else {
    $protocol = "http://";
}
// Determine the server hostname
$httpHost = $_SERVER['HTTP_HOST'] ?? '';

return [

    // All environments
    '*' => [
        // Craft defined config settings
        'cacheDuration' => false,
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),
        'enableCsrfProtection' => true,
        'generateTransformsBeforePageLoad' => true,
        'omitScriptNameInUrls' => true,
        'securityKey' => getenv('SECURITY_KEY'),
        'siteUrl' => getenv('SITE_URL'),
        'useEmailAsUsername' => true,
        'usePathInfo' => true,
        // Aliases parsed in sites’ settings, volumes’ settings, and Local volumes’ settings
        'aliases' => [
            '@basePath' => realpath(dirname(__FILE__)) . '/public/',
            '@baseUrl' => $protocol . $httpHost . '/',
        ],
        // Custom site-specific config settings
        'custom' => [
            'craftEnv' => CRAFT_ENVIRONMENT
        ]
    ],

    // Live (production) environment
    'live' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
        'isSystemOn' => true,
        'siteUrl' => null,
        // Aliases parsed in sites’ settings, volumes’ settings, and Local volumes’ settings
        'aliases' => [
        ],
        // Custom site-specific config settings
        'custom' => [
        ]
    ],

    // Staging (pre-production) environment
    'staging' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
        'isSystemOn' => false,
        'siteUrl' => null,
        // Aliases parsed in sites’ settings, volumes’ settings, and Local volumes’ settings
        'aliases' => [
        ],
        // Custom site-specific config settings
        'custom' => [
        ]
    ],

    // Local (development) environment
    'dev' => [
        // Craft defined config settings
        'allowUpdates' => true,
        'backupOnUpdate' => true,
        'devMode' => true,
        'enableTemplateCaching' => false,
        'isSystemOn' => true,
        'siteUrl' => null,
        // Aliases parsed in sites’ settings, volumes’ settings, and Local volumes’ settings
        'aliases' => [
        ],
        // Custom site-specific config settings
        'custom' => [
        ]
    ],
];