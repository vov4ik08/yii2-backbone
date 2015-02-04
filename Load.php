<?php

namespace apollo\yii2\backbone;

use apollo\yii2\backbone\assets\Asset;
use yii\base\Widget;

/**
 * Class Load
 *
 * @package bluezip\yii2\backbone
 */
class Load extends Widget
{
    public function init()
    {
        parent::init();
        $this->registerAsset();
    }

    /**
     * No return anything
     *
     * @return string
     */
    public function run()
    {
        return '';
    }

    /**
     * Publish js and css
     */
    private function registerAsset()
    {
        $view = $this->getView();
        Asset::register($view);
    }
}
