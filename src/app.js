// YOUTUBE API key AIzaSyCjaFl81Nj02On6nwBijj6L3MnukPcG8ZI
// https://www.googleapis.com/youtube/v3/search?part=snippet&q=yoga&key=AIzaSyCjaFl81Nj02On6nwBijj6L3MnukPcG8ZI -- works //

var angular = require('angular');
require('../styles/vendor/bootstrap/dist/css/bootstrap.min.css');
require('../styles/main.css');
require('./categories/subcategories/notes/notes.js');
require('./categories/categories.js');
//require('./video/videoController.js');
//require('./note/noteController.js');

if(ON_TEST){
    require('angular-mocks/angular-mocks');
}

//'ui.bootstrap'

var fitwatch = angular.module('fitwatch', [require('angular-ui-router'),'categories','categories.notes']); //, require('./notes/notes')


fitwatch.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('fitwatch', {
            url: '',
            abstract: true
        });

    $urlRouterProvider.otherwise('/');
})


/*fitwatch.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'start.html'
    }).otherwise({redirectTo: '/'});

}])*/



angular.module('fitwatch').controller('MainCtrl',['$scope', '$state', function($scope, $state){


    var main = this;
    this.name = "FWatch";
    main.categories = [
        {'name':'Cycling'},
        {'name':'Climbing'},
        {'name': 'Swimming'}
    ]

    main.submenuitems = [
        {'name':'Notes'},
        {'name':'Videos'},
        {'name': 'Links'}
    ]


    function setCurrentCategory(category){

       // alert("SC");

        $scope.currentCategory = category;

    $state.go('fitwatch.categories.submenu', {category: category.name});


    }

    $scope.setCurrentCategory = setCurrentCategory;

}]);








// Templates
require('ng-cache!./templates/views/start.html');
require('ng-cache!./categories/categories.tmpl.html');
require('ng-cache!./categories/subcategories/notes/notes.tmpl.html');
require('ng-cache!./categories/subcategories/submenu.tmpl.html');