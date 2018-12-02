dashboard.controller("MyContentController", ['$http', '$rootScope', '$scope', '$state', '$location',  'Flash',
function ($http, $rootScope, $scope, $state, $location,  Flash) {
    
    var vm = this;

    $http.get('http://localhost:3000/planos?usuario=1').then(function(response) {

        $scope.planos = response.data;

    });

    $scope.goTo = function(id) {
    	$state.go('app.view', {id : id});
	}

}]);

