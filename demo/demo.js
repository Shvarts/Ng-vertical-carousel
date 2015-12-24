(function () {
    'use strict';

    angular
        .module('demo', [
            'ngSanitize',
            'angular-carousel-3d'
        ])
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$log'];

    function AppController($scope, $log) {
        var vm = this;

        vm.slides = [
            {'src': 'images/plus.png', 'cssClass': 'add-journey', 'upperLine': 'Add your', 'title': 'first journey', 'bottomLine': 'to your list'},
            {'src': 'images/photo3.jpg'},
            {'src': 'images/photo4.jpg'},
            {'src': 'images/photo5.jpg'},
            {'src': 'images/photo6.jpg'},
            {'src': 'images/photo7.jpg'},
            {'src': 'images/photo8.jpg'},
            {'src': 'images/photo3.jpg'},
            {'src': 'images/photo4.jpg'}
        ];

        vm.options = {
            sourceProp: 'src',
            visible: 9,
            perspective: 2,
            startSlide: 0,
            border: 3,
            dir: 'ltr',
            width: 150,
            height: document.body.clientWidth - 10,
            space: 50
        };

        vm.selectedClick = selectedClick;
        vm.slideChanged = slideChanged;
        vm.beforeChange = beforeChange;
        vm.lastSlide = lastSlide;


        function lastSlide(index) {
            $log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function beforeChange(index) {
            $log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function selectedClick(index) {
            $log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function slideChanged(index) {
            $log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
        }
    }


})();