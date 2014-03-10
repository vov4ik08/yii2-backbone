<?php

namespace bluezip\yii2\backbone;
use bluezip\yii2\backbone\assets\Asset;

/**
 * Class Load
 * @package bluezip\yii2\backbone
 */
class Load extends \yii\base\widget {

    public function init(){
        parent::init();
        \Yii::setAlias('@BZBackbone', dirname(__FILE__));
        $this->registerAsset();
    }

    /**
     * No return anything
     * @return string
     */
    public function run() {
        return '';
    }

    /**
     * Publish js and css
     */
    private function registerAsset(){
        $view = $this->getView();
        Asset::register($view);
    }
}
