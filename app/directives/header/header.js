'use strict';

angular.module('myApp').directive('headerDirective', headerDirective);

function headerDirective() {
    return {
        restrict: 'EA',
        templateUrl: 'app/directives/header/header.html',
        controllerAs: 'HeaderDirectiveVm',
        bindToController: true,
        scope: {
            contacts: '='

        },
        controller: function () {
            var vm = this;
        }
    }
}

headerDirective.$inject = [];