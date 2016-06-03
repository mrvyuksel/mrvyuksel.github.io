angular.module('myApp').controller('HomeCtrl', HomeCtrl);

function HomeCtrl(ApiService) {
    var vm = this;
    ApiService.getData().then(function (result) {
            vm.data = result;
        }
    );

}
HomeCtrl.$inject = ['ApiService'];