angular.module('myApp.search', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'search/index.html',
        controller: 'SearchController'
      })
  }])

  .controller('SearchController', function() {
    console.log("In Search Controller...");
  })

  .factory('SearchService', function($http) {
    var service = {
      query: function (term) {
        return $http.get('/search/' + term);
      }
    };
    return service;
  });
