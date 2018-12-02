dashboard.controller("ViewController", ['$sce', '$stateParams', '$http', '$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($sce, $stateParams, $http, $rootScope, $scope, $state, $location, dashboardService, Flash) {
    
    var vm = this;

    $http.get('http://localhost:3000/planos/' + $stateParams.id).then(function(response) {

        $scope.plano = response.data;

        $scope.data = {cont : $sce.trustAsHtml(response.data.conteudo)};

    });

}]);

