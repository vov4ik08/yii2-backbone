<?php
namespace bluezip\yii2\backbone\assets;

use yii\web\AssetBundle;

/**
 * 10 Mar 2014
 * @author Bluezip <serin212@hotmail.com>
 * Class Asset
 * @package bluezip\yii2\backbone\assets\Asset
 */

class Asset extends AssetBundle
{

    public $sourcePath = '@BZBackbone/dist/';
    public $path = '';
    public $css = [];
    public $js = [
        'js/underscore-1.6.0-min.js',
        'js/backbone-1.1.2-min.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
    ];
}