angular.module('miAp')
.factory('PostVentas', function () {
	return{
		setVentas:function(scope,json){						
			
			$.ajax({
					type: 'POST',
					url: 'http://localhost:8080/registradorVentas-backend/api/ventas/setVentas', 
					async: !1,
					data: JSON.stringify(json), 
					dataType: 'json' //request JSON
				})
				
				.done(function(){
					scope.msg='Su venta ha sido guardada exitosamente'; 
				})

				.fail(function(){
					scope.msg='Error, revise su servidor';
				});
		}
	};
});