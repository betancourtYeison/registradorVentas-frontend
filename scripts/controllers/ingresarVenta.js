angular.module('miAp')
.controller('ingresarVentasCtrl', ['$scope', 'PostVentas', function ($scope,PostVentas) {
	
	$scope.errorServer;
	$scope.msg;
	$scope.errorTipoPago;

	$scope.setVentas=function(nombreCliente,valorCompra,numArticulos,fecha,tipoPago){
		if(tipoPago===undefined){
			$scope.errorTipoPago=true;
		}else{ 
			$scope.errorTipoPago=false;
			var json = {
							nombreCliente: nombreCliente,
							valorCompra: valorCompra,
							numArticulos: numArticulos,
							fecha: fecha,
							tipoPago: tipoPago
						};

			PostVentas.setVentas($scope,json);
		}
	}
}]);

