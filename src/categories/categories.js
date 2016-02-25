require('../common/models/notes-model')
require('../common/models/categories-model')
require('./subcategories/notes/notes')
require('./subcategories/submenu')





angular.module('categories',['notes.model','categories.model', 'categories.notes','categories.submenu'])

.config(function($stateProvider){

     //   alert("cc");

    $stateProvider.state('fitwatch.categories', {

        url: '/',
        views: {
            'main@':{
                controller: 'CategoriesCtrl',
                templateUrl: 'categories.tmpl.html'

            },
            'notes@':{
                controller: 'NotesCtrl',
                templateUrl: 'notes.tmpl.html'

            }
        }

    })

})

.controller('CategoriesCtrl', function CategoriesCtrl($scope){

        alert('use cc');

        function setCurrentSubmenu(submenu){

           alert("set SS");

            $scope.currentSubmenu = submenu;

           // $state.go('fitwatch.categories.submenu', {category: category.name});


        }

        $scope.setCurrentSubmenu = setCurrentSubmenu;


    })
