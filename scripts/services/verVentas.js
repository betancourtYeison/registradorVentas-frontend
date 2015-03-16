angular.module('miAp')
.factory('GetVentas', function () {
	return{
		getVentas:function(scope){					
			$.ajax({
				type: "GET",
				url: "http://localhost:8080/registradorVentas-backend/api/ventas/getVentas",
		        async: !1
			})
			
			.done(function(response){
				scope.retVentas=response;
				scope.errorServer=false;				
			})

			.fail(function(){		
				scope.msg='Error, revise su servidor';
				scope.errorServer=true;
			});
		},
		deleteVentas:function(scope,id){			
			$.ajax({
				type: "DELETE",
				url: "http://localhost:8080/registradorVentas-backend/api/ventas/deleteVentas/"+id,
		        async: !1
			})
			
			.done(function(response){
				scope.retDelete = true;	
				scope.msg = 'Se ha eliminado la venta.';	
			})

			.fail(function(){		
				scope.msg = 'Error al eliminar la venta.';		
			});
		}
	};
});