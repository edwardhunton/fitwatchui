angular.module('fitwatch').controller('NotesCtrl',function($scope, $routeParams, $location, sectionid, notes){
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


});