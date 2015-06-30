/*
 * adapt-contrib-tutor
 * License - http://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Kevin Corry <kevinc@learningpool.com>, Daryl Hedley <darylhedley@hotmail.com>,
 *               Himanshu Rajotia <himanshu.rajotia@exultcorp.com>
 */
define([
    'coreJS/adapt'
],function(Adapt) {

    Adapt.on('componentView:preRender', function(view) {
        var model = view.model;
        if (!model.get("_componentAnimate") || model.get("_componentAnimate")._isEnabled === false ) return;
        setupView(view);

    });

    function setupView(view) {
        view.$el.css({
            "visibility": "hidden"
        });

        var config = view.model.get("_componentAnimate");

        if (!config._start) return;
        view.$el.velocity(config._start, { duration: 0 });
    }

    Adapt.on('componentView:postRender', function(view) {

        var model = view.model;
        if (!model.get("_componentAnimate") || model.get("_componentAnimate")._isEnabled === false ) return;

        view._animateOnscreen =  _.bind(onscreen, this, view);
        view.$el.on("onscreen", view._animateOnscreen);
    
    });

    function onscreen(view, event, measurements) {
        var config = view.model.get("_componentAnimate");
        config._startHeight = config._startHeight || 50;
        if (measurements.percentFromTop > config._startHeight) return;
        animateView(view);
    }

    function animateView(view) {

        var config = view.model.get("_componentAnimate");
        view.$el.off("onscreen", view._animateOnscreen);

        config._options = config._options || {};

        config._options.begin = function() {
            view.$el.css({
                "visibility": "visible"
            });
        };

        view.$el.velocity(config._command, config._options);

    }

});
