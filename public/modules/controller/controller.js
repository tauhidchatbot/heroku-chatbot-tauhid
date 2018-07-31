'use strict';

botApp.controller('chatbotController', function($scope, $location, $rootScope, $http) {
    $rootScope.expression = false;
    // console.log("hello I am in home page controller");


    $scope.myChatBot = function(data) {
        //console.log("hello chat bot");
        console.log(data);
        //var send = JSON.stringify($scope.data);
        $http.post('/chatBot', data).success(function(response) {
            console.log(response);
        })
    }

    $scope.registration = function(data) {
        console.log(data);
        $http.post('registration', data).success(function(response) {
            console.log(response);
            if (response.authentication == true) {
                console.log("registration done");
            }
        })
    }

});