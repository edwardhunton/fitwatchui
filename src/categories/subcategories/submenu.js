require('../../common/models/notes-model')
require('../../common/models/categories-model')
require('./notes/notes')





angular.module('categories.submenu',['notes.model','categories.model', 'categories.notes'])

.config(function($stateProvider){

       // alert("ss");

    $stateProvider.state('fitwatch.categories.submenu', {

        url: '/',
        views: {
            'main@':{
                controller: 'SubmenuCtrl',
                templateUrl: 'submenu.tmpl.html'

            }
        }

    })

})

.controller('SubmenuCtrl', function SubmenuCtrl($scope){

        alert("use SS");


        function setCurrentSubmenu(submenu){

            alert("set SS");

            $scope.currentSubmenu = submenu;

            // $state.go('fitwatch.categories.submenu', {category: category.name});


        }

        $scope.setCurrentSubmenu = setCurrentSubmenu;

    })
