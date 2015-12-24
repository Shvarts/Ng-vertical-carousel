/*!
 * angular-carousel-3d
 * 
 * Version: 0.0.7
 * License: MIT
 */


(function () {
    'use strict';

    angular
        .module('angular-carousel-3d')
        .directive('carousel3d', carousel3d);

    carousel3d.$inject = ['$timeout'];

    function carousel3d($timeout) {
        // debugger
        var carousel3d = {
            restrict: 'AE',
            template: '' +
            '<div class=\"carousel-3d-container\">' +
            '   <div class=\"carousel-3d\" ng-show=\"true\">' +
            '       <div ng-repeat=\"slide in vm.slides track by $index\" class="{{slide.cssClass}} slide-3d" ng-click=\"vm.slideClicked($index)\" ng-swipe-down=\"vm.goPrev()\" ng-swipe-up=\"vm.goNext()\">' + 
            '           <div class="slide">' +
            '               <img src={{slide.src}} class="icon"></img>' +
            '               <div class="content">' +
            '                   <div class="upper-line">{{slide.upperLine}}</div>' +
            '                   <div class="title-line">{{slide.title}}</div>' +
            '                   <div class="bottom-line">{{slide.bottomLine}}</div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +   
            '</div>',
            replace: true,
            scope: {
                model: '=ngModel',
                options: '=',
                onSelectedClick: '&',
                onSlideChange: '&',
                onLastSlide: '&',
                onBeforeChange: '&'
            },
            controller: 'Carousel3dController as vm',
            bindToController: true,
            transclude: true,
            compile: compileFunc,
            link: linkFunc
        };

        // ==
        // == Directive Compile
        // =======================================
        //compileFunc.$inject = ['element', 'attributes', '$attrs'];

        function compileFunc(element, attributes) {

            return (linkFunc);
        }

        // ==
        // == Directive link
        // ========================================

        function linkFunc(scope, element, attrs, ctrl, transclude) {
        }

        return carousel3d;
    }

})();