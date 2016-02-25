/**
 * Created by edwardhunton on 23/02/2016.
 */

require('ng-cache!./createNote.html');

angular.module('notes.create', [])

.config(function ($stateProvider) {

        $stateProvider.state('notes.create',{

            url: '/notes/create',
            controller: 'CreateNoteCtrl as createNoteCtrl'
        })



    })

    .controller('CreateNoteCtrl', function($state, $stateParams, NotesModel){
        var createNoteCtrl = this;

        function returnToNotes(){

            $state.go('notes'), {

                category: $stateParams.category

            }

        }

        function cancelCreate(){

            returnToNotes();

        }

        function createNote(){

            NotesModel.createNote(note);
            returnToNotes();

        }

        function resetForm(){

            createNotesCtrl.newNote = {

                title: '',
                body: '',
                category: $stateParams.category

            }

        }

        createNoteCtrl.cancelCreate = cancelCreate;
        createNoteCtrl.createNote = createNote;

        resetForm();
    })


