app.controller('dashboardCtrl', ['userInfo', '$scope', '$location', '$http', function(userInfo, $scope, $location, $http){

    var type = userInfo.getUser().user.type;
    if(type=='admin' || type=='Admin'){
        $scope.admin=true;
    }else{
        $scope.employee=true;
    }
    $scope.logout=function(){
        $http({
            method: "DELETE",
            url: "http://localhost:8080/projectmanagementapp/user/"+userInfo.getUser().user.id+"/deletetoken",
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
        }).then(function mySucces(response) {
            console.log(response.data);
            $location.path('/home');
        }, function myError(response) {
             $location.path('/login');
        });
    }
    
}]);