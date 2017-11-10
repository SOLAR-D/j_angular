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
    // find todo.hashKey equal item.hashKey
    var idx = $scope.todos.findIndex(function(item) {
      return item.$$hashKey === todo.$$hashKey;
    });
    // find item index > -1
    if (idx > -1 ) {
      // find item index remove
      $scope.todos.splice(idx, 1);
    }
  };

});
