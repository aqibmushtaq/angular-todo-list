var client = gazel.createClient();
client.on('error', function(err) {
    alert('Oh no, your browser doesn\'t support this website');
});

function TaskCtrl($scope) {

    $scope.tasks = [];
    
    $scope.getTasks = function () {
        client.get('tasks', function(value) {
            if (value && value.length > 0) {
                $scope.tasks = value;
                $scope.$apply()
            }
        })
    };
    
    $scope.getTasks();
    
    $scope.add = function () {
        $scope.tasks.push({done: false, name: $scope.taskName, priority: $scope.taskPriority});
        $scope.$apply();
        
        $scope.setList($scope.tasks);
    };
    
    $scope.setList = function (newList) {
        client.set('tasks', newList, function(status) {
            console.log('updated tasks on the client browser? ' + status);
        });
    };
    
    $scope.remove = function (name) {
        var tasks = $scope.tasks;
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].name == name)
                tasks.splice(i, 1);
        }
        
        $scope.setList($scope.tasks);
    };
}