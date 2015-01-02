angular.module('starter.controllers', [])
	.controller('TodoListController', function ($scope, $ionicModal) {
		$ionicModal.fromTemplateUrl('template/add-modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
  		}).then(function(modal) {
  			$scope.modal = modal;
  		});
  		
  		
  		
  		$scope.data = {
	  		showDelete: false,
	  		showOrder: false
  		}
  		
  		$scope.triggerDelete = function() {
	  		$scope.data.showDelete = !$scope.data.showDelete;
	  		$scope.data.showOrder = false;
	  		console.log($scope.data);
  		}
  		
  		$scope.triggerReOrder = function() {
	  		$scope.data.showOrder = !$scope.data.showOrder;
	  		$scope.data.showDelete = false;
	  		console.log($scope.data);
  		}
  		
  		$scope.moveItem = function(item,from, to) {
	  		console.log(arguments);
	  		$scope.TodoListItems.splice(from, 1);
	  		$scope.TodoListItems.splice(to, 0, item);
  		}
  		
  		
  		$scope.openItemModal = function() {
	  		$scope.modal.show();
  		}
  		
  		$scope.closeItemModal = function() {
	  		$scope.modal.hide();
	  		
  		}
  		
  		$scope.deleteTodo = function(item) {
	  		$scope.TodoListItems.splice($scope.TodoListItems.indexOf(item), 1);
  		}
  		
  		//clean up modal
  		$scope.$on('$destroy', function () {
  			$scope.modal.remove();
		});
		
		$scope.addItem = function(data) {
			$scope.TodoListItems.push({
				task: data.todoItem,
				done: 'false'
			});
			
			data.todoItem = '';
			
			$scope.closeItemModal();
		}
		$scope.TodoListItems = [
			{
				id: 3,
				task: 'Scipio vero et Rutilius multo etiam magis.',
				done: 'false'
			}, 
			{
				id: 1,
				task: 'Quamquam philosophiae quidem vituperatoribus satis responsum est eo libro.',
				done: 'false'
			},
			{
				id: 9,
				task: 'Terentii quam utramque Menandri legam?',
				done: 'false'
			},
			{
				id: 6,
				task: 'Maecenas accumsan nec libero ut posuere.',
				done: 'false'
			},
			{
				id: 5,
				task: 'Consentinis et Siculis scribere.',
				done: 'false'
			},
			
		]
		
		
		
	});