angular.module('starter.controllers', [])
	.controller('TodoListController', function ($scope, $ionicModal) {
		$ionicModal.fromTemplateUrl('template/add-modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
  		}).then(function(modal) {
  			$scope.modal = modal;
  		});
  		
  		
  		$scope.openItemModal = function() {
	  		$scope.modal.show();
  		}
  		
  		$scope.closeItemModal = function() {
	  		$scope.modal.hide();
	  		
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
				task: 'Scipio vero et Rutilius multo etiam magis.',
				done: 'false'
			}, 
			{
				task: 'Quamquam philosophiae quidem vituperatoribus satis responsum est eo libro.',
				done: 'false'
			},
			{
				task: 'Terentii quam utramque Menandri legam?',
				done: 'false'
			},
			{
				task: 'Maecenas accumsan nec libero ut posuere.',
				done: 'false'
			},
			{
				task: 'Consentinis et Siculis scribere.',
				done: 'false'
			},
			
		]
		
		
		
	});