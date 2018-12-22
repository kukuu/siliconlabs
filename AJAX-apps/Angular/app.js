var APP = angular.module('APP', []).
controller('urlController', function ($scope, $http) {
    /*this controller uses the url as a single string*/
    $http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&fname={firstName}&lname={lastName}").
    success(function (data) {
        $scope.users = data
    })
}).
controller('objController', function ($scope, $http) {
    /*this controller uses the config.params object as the request payload*/
    var config = {
        params: {
            'rows': 5,
            'fname': '{firstName}',
            'lname': '{lastName}',
            'tel': '{phone|format}',
            'callback': "JSON_CALLBACK"
        }
    }
    $http.jsonp("http://www.filltext.com", config, {}).success(function (data) {
        $scope.users = data
    });

});