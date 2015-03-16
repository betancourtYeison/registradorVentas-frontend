angular.module('miAp')
.controller('verVentasCtrl', ['$scope', 'GetVentas', function ($scope,GetVentas) {

	$scope.retVentas;
	$scope.errorServer;
	$scope.retDelete;
	$scope.msg;
	GetVentas.getVentas($scope);

	$scope.deleteVentas = function(id){
		GetVentas.deleteVentas($scope,id);
		GetVentas.getVentas($scope);
		
		if($scope.retDelete){
			setTimeout(function(){ 
						$scope.borrarMsg();
					}, 2000);
		}
	}

	$scope.borrarMsg = function(){
		$scope.msg=''; 
	}

	$scope.ordenarPor = function(orden){
		$scope.ordenSeleccionado = orden;
	};
}]);

