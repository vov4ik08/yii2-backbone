/**
 * Created by vladimir on 05.01.15.
 */
Resources = (function() {

    loadedMap = [];
    loadingInProcessCount = 0;

    return {

        load: function(resource, callback, obj, context) {

            if (!resource) {
                return;
            }

            var resources = (typeof resource === 'object') ? resource : [resource];

            var loadMap = [];
            $.each(resources, function(i, resource) {
                if ($.inArray(resource, loadedMap) == -1) {
                    loadMap.push(resource);
                }
            });

            if ($.isEmptyObject(loadMap)) {
                callback && callback.call();
                return;
            }

            $(".body").addClass("resource-loading");
            loadingInProcessCount++;

            var onLoadFinish = function(){
                loadingInProcessCount--;
                if(loadingInProcessCount <= 0) {
                    loadingInProcessCount = 0;
                    $(".body").removeClass("resource-loading");
                }
            }

            var internalCallback = function(){
                onLoadFinish();
                callback && callback.call();
            }

            $.getJSON("/b2b/app/resources/", {"resourcesList[]": loadMap},
                function (resourcesData) {
                    if (resourcesData.css || resourcesData.js || resourcesData.template) {
                        LazyLoad.load({
                                'template' : resourcesData.template || [],
                                'css': resourcesData.css || [],
                                'js': resourcesData.js || []
                            },
                            function() {
                                $.each(loadMap, function(i, resource) {
                                    loadedMap.push(resource);
                                });
                                internalCallback();
                            }, obj, context);
                    } else {
                        if(resourcesData.meta && resourcesData.meta.code == 302){
                            $.gotoUrl(resourcesData.meta.redirect);
                        }

                        // there are no resources, just do callback
                        internalCallback();
                    }
                }
            ).error(function() {
                    onLoadFinish();
                });
        }
    };
})();

