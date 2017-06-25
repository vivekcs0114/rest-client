app.controller('assignCtrl', ['$scope', '$http', 'userInfo', function($scope, $http, userInfo){
    var start=0;
    var size=5;
    var content="";
    var userId=0;
    var projectId=0;
	$scope.assign=function(){
		$http({
                method: 'POST',
                url: "http://localhost:8080/projectmanagementapp/user/assignproject?userId="+userId+"&projectId="+projectId,
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
            }).then(function mySucces(response) {
                    $scope.userId="";
                    $scope.projectId="";
                    alert(response.data);
        }, function myError(response) {
           alert(response.data.errorMessage);
        });
	   }

    var getProjects=function(start, size, content){
        $http({
                method: 'GET',
                url: "http://localhost:8080/projectmanagementapp/project/filter?start="+start+"&size="+size+"&query="+content,
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
            }).then(function mySucces(response) {
            $scope.projects = response.data;
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }
    var getUsers=function(start, size, content){
        $http({
                method: 'GET',
                url: "http://localhost:8080/projectmanagementapp/user/filter?start="+start+"&size="+size+"&query="+content,
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
            }).then(function mySucces(response) {
                $scope.users=response.data;
                if(content==""){
                     getProjects(start, size, content);
                }
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }

    $scope.refreshEmployeeId=function(){
        content=$scope.searchEmployee;
        getUsers(start, size, content);
    }
    $scope.refreshProjectId=function(){
        content=$scope.searchProject;
        getProjects(start, size, content);
    }

    $scope.getUserId=function(user){
        $scope.selectedUserId=user.id;
        userId=user.id;
    }

    $scope.getProjectId=function(project){
        $scope.selectedProjectId=project.projectId;
        projectId=project.projectId;
    }
    
    getUsers(start, size, content);
    
}]);