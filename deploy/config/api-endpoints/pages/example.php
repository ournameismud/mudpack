<?php

use craft\elements\Entry;
use modules\mudmodule\MudModule as Module;

return [
	'elementType' => Entry::class,
	'criteria' => [
		'section' => 'homepage'
	],
	'one' => true,
	'paginate' => false,
	'cache' => Craft::$app->getConfig()->general->custom['cacheApi'] ? true : false,
	'serializer' => 'array',
	'transformer' => function(Entry $entry) {
		return [
			'title' => 'Home'
		];
	}
];
