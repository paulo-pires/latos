/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 13 Jan 2016
    Description : Controller to handle Recent Projects page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location',  'Flash',
function ($rootScope, $scope, $state, $location,  Flash) {
    var vm = this;

    vm.recents = [
      {
          id: 1,
          heading: "e - POS",
          title: "Focus Point e-POS",
          description: "Web application to handle Point of Sale and Venue management",
          image: "e-pos",
          theme: "warning",
          url:"fp360.us:830",
          roles: [
              {
                  theme: "red",
                  myRole: "UX Consultant"
              }
          ]
      }
    ];

    console.log("coming to Recent controller");

}]);

