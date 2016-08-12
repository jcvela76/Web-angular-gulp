(function() {
  'use strict';

  angular.module('template')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'app/home/partials/home.html',
      controller: 'HomeComtroller as ctrl',
      
    })
    
    .state('contacts',{
      url: '/contacts',
      templateUrl: 'app/contacts/partials/contacts.html',
      controller: ['ContactsComtroller as ctrl', 'StoreController as ctrlA']
    })
    .state('home.about',{
      url: 'about',
      views: {
        aboutView: {
          templateUrl: 'app/store/partials/aboutMe.html',


        },
        controller: 'StoreController as ctrlA'

      },
      controller: 'StoreController as ctrlA'
    })

    ;

    $urlRouterProvider.otherwise('/')


  })


})();
