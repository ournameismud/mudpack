<?php

use craft\elements\Entry;
use modules\mudmodule\MudModule as Module;

return [
	'elementType' => Entry::class,
	'criteria' => ['section' => 'homepage'],
	'one' => true,
	'paginate' => false,
	'cache' => Craft::$app->getConfig()->general->custom['cacheApi'] ? true : false,
	'serializer' => 'array',
	'transformer' => function(Entry $entry) {
		$companyLinks = [];
		foreach($entry->companyLinks->all() as $company) {
			$companyLinks[] = array(
				'companyLogo' => $company->companyLogo->one()->path,
				'companyLink' => $company->urlToCompanyWebsite
			);
		}

		$groupFactors = [];
		foreach($entry->sgFinancialGroupFactors->all() as $factor) {
			$groupFactors[] = array(
				'factorTitle' => $factor->factorTitle,
				'factorDescription' => $factor->factorDescription
			);
		}

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
			'title' => 'Home',
			'intro' => $entry->pageIntroduction,
			'companiesIntro' => $entry->companiesIntroduction,
			'companiesLinks' => $companyLinks,
			'groupFactorsIntro' => $entry->sgFinancialGroupFactorsIntroduction,
			'groupFactors' => $groupFactors,
			'featuredLink' => $featuredPageLink
		];
	}
];
