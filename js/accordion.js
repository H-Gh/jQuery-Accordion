/**
 * User: H.Gh
 * Date: 10/3/2017
 * Time: 11:54 AM
 */

(function ($) {

    var baseOptions = {
        slideDownSpeed: 200,
        slideUpSpeed: 400,
        clickListener: true
    };

    var baseThis;

    var methods = {
        init: function (options) {
            $.extend(baseOptions, options);
            baseThis = this;
            $(this).on("click", ".header", function () {
                var card = $(this).closest(".card");
                if (!card.hasClass("open")) {
                    methods.open(card.index());
                } else {
                    methods.close(card.index());
                }
            });
            return methods;
        },
        slideUpAll: function (cardId) {
            baseThis.find('.card:not(:eq(' + cardId + ')) .body').slideUp(baseOptions.slideUpSpeed);
            baseThis.find('.card:not(:eq(' + cardId + '))').removeClass("open");
        },
        open: function (cardId) {
            methods.slideUpAll(cardId);
            var card = baseThis.find(".card:eq(" + cardId + ")");
            card.find(".body").slideDown(baseOptions.slideDownSpeed);
            card.addClass("open");
            $(baseThis).trigger("accordionCardOpen", card.index());
        },
        close: function (cardId) {
            var card = baseThis.find(".card:eq(" + cardId + ")");
            card.find(".body").slideUp(baseOptions.slideUpSpeed);
            card.removeClass("open");
            $(baseThis).trigger("accordionCardClose", card.index());
        }
    };

    $.fn.accordion = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist.');
        }
    };
})(jQuery);