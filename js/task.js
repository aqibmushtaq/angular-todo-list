//angular.module('task', ['ngRoute', 'firebase'])
//.value('fbURL', 'https://angularjs-projects.firebaseio.com/')
//.factory('Projects', function(angularFireCollection, fbURL) {
//  return angularFireCollection(fbURL);
//})
//
//.config(function($routeProvider) {
//    $routeProvider
//        .when('/', {
//            controller: 'ListCtrl',
//            templateUrl: 'list.html'
//        });
//})
//
//.controller('ListCtrl', function($scope, Tasks) {
//    $scope.tasks = Tasks;
//});

function TaskCtrl($scope) {
    $scope.tasks = [
        {done: false, name: "Learn AngularJS", priority: "High"},
        {done: false, name: "Develop an Android application", priority: "Low"},
        {done: true, name: "Learn EmberJS", priority: "Medium"}
    ];
    
    
}

