dashboard.controller("NewPlanController", ['$http', '$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($http, $rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    $scope.plano = {
    	titulo : null,
    	categoria : null,
    	conteudo : null
    }

  	$scope.tinymceOptions = {
    	plugins: 'link image code',
  	};

  	$scope.send = function () {

  		$scope.plano.usuario = 1;

  		console.log($scope.plano);	

  		$http.post('http://localhost:3000/planos', $scope.plano).then(function (data) {
        $state.go('app.my-content');
  		});	
  	}

}]);

