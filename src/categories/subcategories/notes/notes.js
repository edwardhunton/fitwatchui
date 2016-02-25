require('../../../common/models/notes-model')
require('../../../common/models/categories-model')
//require('./create/notes-create')
require('./edit/notes-edit')
require('./delete/notes-delete')




angular.module('categories.notes',['notes.model','categories.model','notes.edit','notes.delete'])

.config(function($stateProvider){

        $stateProvider.state('fitwatch.categories.submenu.Notes', {
            url: 'categories/:categoryId',
            views: {
                'main@':{
                    templateUrl: 'notes.tmpl.html',
                    controller: 'NotesCtrl'
                     }
            }
        })


    })

.controller('NotesCtrl', function($scope, $stateParams){

        alert("use n c");

        $scope.currentCategoryId = $stateParams.categoryId


    })

