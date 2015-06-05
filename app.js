
var App = angular.module('App', []);


App.controller('Ctrl01', function($scope, $http) {

    $scope.processForm = function () {

        var restAPI = 'http://localhost:8080/api/square/';
        //var restAPI = 'http://back01.pjweb.ch/api/square/';

        $http.get(restAPI + $scope.user_input)
            .then(function (res) {
                $scope.todos = res.data;
            });

    };

});