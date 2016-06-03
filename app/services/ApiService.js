'use strict';

angular.module('myApp').factory('ApiService', ApiService);

function ApiService($http) {


    var service = {
        getData: getData,
    };


    function getData() {
        return $http.get('data/data.json')
            .error(function (err) {
                return err
            })
            .then(function (response) {
                return response.data;
            });
    }

    return service;

}

ApiService.$inject = ['$http'];