<?php

namespace bluezip\yii2\backbone;

use bluezip\yii2\backbone\assets\Asset;

class Autoload extends \yii\base\widget {
    public function init(){
        parent::init();
        \Yii::setAlias('@BluezipBackbone', dirname(__FILE__));
        $this->registerAsset();
    }


    public function run() {
        return '';
    }

    /**
     * Publish js css
     */
    private function registerAsset(){
        $view = $this->getView();
        Asset::register($view);
    }
}
