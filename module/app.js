var app = angular.module("todo",[]);

app.controller("todo_controller", function($scope){
  $scope.todos = [
  {
    title: "방가방가1",
    completed: false,
    createAt: Date.now()
  },
  {
    title: "방가방가2",
    completed: false,
    createAt: Date.now()
  },
  {
    title: "방가방가3",
    completed: true,
    createAt: Date.now()
  }
  ];

  $scope.remove = function(todo) {
    var idx = $scope.todos.fineIndex(function(item) {
      return item.id === todo.id;
    });

    if (idx > -1 ) {
      $scope.todos.splice(idx, 1);
    }
  };

});
