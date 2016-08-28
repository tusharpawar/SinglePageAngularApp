

//Controller
mainApp.controller("sayHelloController",function($scope,sayHelloService){
				
	$scope.sayHello=function(){
		$scope.result=sayHelloService.sayHello()
	}	

});