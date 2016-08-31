//Controller
			
			mainApp.controller('mainController', function($scope) {

			  $scope.users = [];

			  $scope.usersToAdd = [];

			  $scope.add = function(userToAdd) {

			    var index = $scope.usersToAdd.indexOf(userToAdd);
			    
			    $scope.usersToAdd.splice(index, 1);

			    $scope.users.push(angular.copy(userToAdd))
			  }

			  $scope.addNew = function() {

			    $scope.usersToAdd.push({
			      name: ''
			    })
			  }
			});