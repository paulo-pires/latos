/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : main application base
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'flash', 'ui.tinymce',
    //main modules
    'login', 'dashboard']);


app.config(['$sceProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider', function ($sceProvider, $stateProvider, $locationProvider, $urlRouterProvider, $modalInstance) {

    $sceProvider.enabled(false);

    //IdleScreenList
    $stateProvider
       .state('app', {
           url: '/app',
           templateUrl: 'app/common/app.html',
           controller: 'appCtrl',
           controllerAs: 'vm',
           data: {
               pageTitle: 'Login'
           }
       });

    $urlRouterProvider.otherwise('login');

    //$urlRouterProvider.otherwise('app/dashboard');
    //$urlRouterProvider.otherwise('/app/dashboard');
}]);

// set global configuration of application and it can be accessed by injecting appSettings in any modules
app.constant('appSettings', appConfig);
