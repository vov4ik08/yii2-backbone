/**
 * Created by vladimir on 05.01.15.
 */
var App = function () {

    this.router = new AppRouter();

    //this.routing = (function (self, pageFrames) {
    this.router.on("route:users", loadUser);


        function loadUser() {
            $.get( "users", function( data ) {
                $(".site-index").html(data);
            });
        }
    //});

        $(document).on("click", "a[href^='/#']", function (event) {
            href = $(event.currentTarget).attr("href");

            // allow external links
            if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
                event.preventDefault();
            }

            url = href.replace(/^\//, '').replace('\#\!\/', '');


            // navigate to new page, and trigger this event
            app.router.navigate(url, {trigger: true});

            return false;
        });

        Backbone.history.start({pushState: true});
    };

    var AppRouter = Backbone.Router.extend({

        routes: {
            "admin/users": "users"

        },
        //
        //initialize: function (options) {
        //    this.route(/^(winks|views|favorites|messenger|newsFeed)$/, "activitiesTypes");
        //    this.route(/photo\/gallery\/id\/([^\/|$]+)(\/open\/(.*))?/, 'photoGallery');
        //    this.route(/livecam\/(.+)$/, 'livecam');
        //
        //    Backbone.on('appPopup', function (params) {
        //        var popup = app.views.instance('AutoPopupView').restore(params);
        //    }, this);
        //
        //    this.on('route', function(){
        //        if (typeof ga === 'function') {
        //            ga('send', 'pageview', window.location.pathname);
        //        }
        //        if (typeof BMTracker === 'object') {
        //            BMTracker.trackAction(BMTracker.AT_LOADPAGE(), { Content: document.location.href.substring(0, 300), Referrer: document.referrer.substring(0, 300), Title: document.title.substring(0, 300) });
        //        }
        //    });
        //}
    });



$(document).ready(function(){
    window.app = new App();
});
