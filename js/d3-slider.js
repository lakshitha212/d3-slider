/**
 * Created by Lucky212 on 1/7/2016.
 */
(function ($) {
    "use strict";
    $.fn.d3slider = function (options) {
        /**
         * initialize varriables
         */

        var url,
            colorRange,
            settings = $.extend({
                url: 'data.json',
                colorRange: ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]
            }, options);
        console.log(settings);

        /**
         * define json file path
         * always try to use relative path
         * @type {string}
         */
        url = settings.url;

        /**
         * define colour palette
         * use this for change color in d3 graph
         * @type {array}
         */
        colorRange = settings.colorRange;

        /**
         *
         */
        $.getJSON(url, function () {
        }).done(function (json) {
            console.log(json);
        }).fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
    };
}(jQuery));

