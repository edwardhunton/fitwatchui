// YOUTUBE API key AIzaSyCjaFl81Nj02On6nwBijj6L3MnukPcG8ZI
// https://www.googleapis.com/youtube/v3/search?part=snippet&q=yoga&key=AIzaSyCjaFl81Nj02On6nwBijj6L3MnukPcG8ZI -- works //

var angular = require('angular');
require('../styles/vendor/bootstrap/dist/css/bootstrap.min.css');
require('../styles/main.css');
require('./notes/notes.js');
//require('./video/videoController.js');
//require('./note/noteController.js');

if(ON_TEST){
    require('angular-mocks/angular-mocks');
}

//'ui.bootstrap'

var fitwatch = angular.module('fitwatch', [require('angular-route'), require('./notes/notes')]);

fitwatch.factory("sectionid",function(){
    return {};
});

fitwatch.factory("notes",function($http){
    var notes = [];
    return {
        addNote: function(sectionid, note, cb){
            if(notes[sectionid] === undefined){

                notes[sectionid] = [];

            }
            note.section = sectionid;
            var data = note;
            var config = {'method': 'POST'};
            var successCallback = function(response){
                notes = response.data
                cb.call(this, notes);
            }
            var errorCallback = function(){}
          //  notes[sectionid].push(note);
          // notes.push(note);

            $http.post('http://localhost:4242/api/notes', data, config).then(successCallback, errorCallback);


        },
        deleteNote: function(sectionid, id, cb){

         //  notes[sectionid].splice(parseInt(id.id), 1)
            var successCallback = function(response){
                notes = response.data
                cb.call(this, notes);
            }
            var errorCallback = function(e){
                console.log("ERR"+e);
            }



            $http.get('http://localhost:4242/api/notes/delete/'+id+'/section/'+sectionid).then(successCallback, errorCallback);

        },
        getNotes: function(sectionid, cb){
            //var notes;
            var successCallback = function(response){
                notes = response.data
                cb.call(this, notes);
            }
            var errorCallback = function(){}

            var config = {'responseType': 'json'};

           $http.get('http://localhost:4242/api/notes/'+sectionid, config).then(successCallback, errorCallback);




        },
        getNote: function(id, cb){

            //var notes;
            var successCallback = function(response){
                note = response.data
                cb.call(this, note);
            }
            var errorCallback = function(){}

            var config = {'responseType': 'json'};

            $http.get('http://localhost:4242/api/note/'+id, config).then(successCallback, errorCallback);



        },
        editNote: function(id, cb, note){

            //var notes;
            var successCallback = function(response){
                note = response.data
                cb.call(this, note);
            }
            var errorCallback = function(){}

            var data = note;

            var config = {'responseType': 'json'};

            $http.post('http://localhost:4242/api/note/edit/'+id, data, config).then(successCallback, errorCallback);



        }
    };
});



fitwatch.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'start.html'
    }).when('/section/:id', {
      controller: 'SectionCtrl',
        templateUrl: 'subcategories.html'
    }).when('/Videos/:sectionId', {
        controller: 'VideosCtrl',
        templateUrl: 'videos.html'
    }).when('/Notes/:sectionId', {
        controller: 'NotesCtrl',
        templateUrl: 'notes.html'
    }).when('/Links/:sectionId', {
        controller: 'LinksCtrl',
        templateUrl: 'links.html'
    }).when('/addLink/:sectionId', {
        controller: 'LinksCtrl',
        templateUrl: 'addLink.html'
    }).when('/addVideo/:sectionId', {
        controller: 'VideosCtrl',
        templateUrl: 'addVideo.html'
    }).when('/addNote/:sectionId', {
            controller: 'NotesCtrl',
            templateUrl: 'addNote.html'
    }).when('/editLink/:linkId', {
        controller: 'LinksCtrl',
        templateUrl: 'editLink.html'
    }).when('/editVideo/:videoId', {
        controller: 'VideosCtrl',
        templateUrl: 'editVideo.html'
    }).when('/editNote/:noteId', {
        controller: 'NotesCtrl',
        templateUrl: 'editNote.html'
    }).otherwise({redirectTo: '/'});

}]);



angular.module('fitwatch').controller('MainCtrl',['$scope', function($scope){
    var self = this;
    self.name = "FWatch";
    $scope.sections = [
        {'name':'Cycling'},
        {'name':'Climbing'},
        {'name': 'Swimming'}
    ]
}]);

angular.module('fitwatch').controller('SectionCtrl',function($scope, $routeParams, $location, sectionid){

    var self = this;
    $scope.sectionid = sectionid;

    $scope.section = $scope.sections[$routeParams.id];
    $scope.id = $routeParams.id;
    $scope.sectionid.id =  $scope.id

    $scope.contents = [
        {'name':'Videos'},
        {'name':'Notes'},
        {'name': 'Links'}
    ]
});

/*angular.module('fitwatch').controller('NotesCtrl',function($scope, $routeParams, $location, sectionid, notes){
    $scope.sectionid = sectionid;
    $scope.sectionid = $scope.sectionid.id;
    $scope.notesFac = notes;
   var cb = function(notes){
        $scope.notes = notes;
    }
    $scope.notesFac.getNotes($scope.sectionid, cb);
    console.log("Note id: "+$routeParams.id);
    if($routeParams.noteId !== undefined){
        var cb = function(note){
            $scope.note = note;
        }
        $scope.notesFac.getNote($routeParams.noteId, cb);
    }





    var self = this;
    $scope.addNote = function(x){

        var cb = function(notes){
            $scope.notes = notes;
            $location.url('/Notes/'+$scope.id);
        }

        $scope.notesFac.addNote($scope.sectionid, {'body':x, 'section':$scope.sectionid }, cb);



    }

    $scope.deleteNote = function(id){

        var cb = function(notes){
            $scope.notes = notes;
            $location.url('/Notes/'+$scope.id);
        }

        $scope.notesFac.deleteNote($scope.sectionid, id.toString(), cb);



    }

    $scope.editNote = function(id){

        console.log($scope.note.body)

        var cb = function(notes){
            $scope.notes = notes;
            $location.url('/Notes/'+$scope.sectionid);
        }

        $scope.notesFac.editNote(id, cb, $scope.note);

    }


});*/

angular.module('fitwatch').controller('VideosCtrl',function($scope, $routeParams, $location, sectionid){
    $scope.sectionid = sectionid;
    $scope.id = $scope.sectionid.id;


});

angular.module('fitwatch').controller('LinksCtrl',function($scope, $routeParams, $location, sectionid) {
    $scope.sectionid = sectionid;
    $scope.id = $scope.sectionid.id;

    $scope.links = [

    {'title': 'Great Link # 1', 'url': 'www.bbc.co.uk'},
    {'title': 'Great Link # 2', 'url': 'www.bbc.co.uk'},
    {'title': 'Great Link # 3', 'url': 'www.bbc.co.uk'}

    ]


});




// Templates

require('ng-cache!./templates/views/subcategories.html');
require('ng-cache!./templates/views/start.html');
require('ng-cache!./templates/views/videos.html');
require('ng-cache!./templates/views/notes.html');
require('ng-cache!./templates/views/links.html');
require('ng-cache!./templates/views/addLink.html');
require('ng-cache!./templates/views/addVideo.html');
require('ng-cache!./templates/views/addNote.html');
require('ng-cache!./templates/views/editLink.html');
require('ng-cache!./templates/views/editVideo.html');
require('ng-cache!./templates/views/editNote.html');
