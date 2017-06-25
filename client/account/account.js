app.controller('accountCtrl', function($scope){
	$scope.changePassword=function(){
     var changeStatus = confirm('Are you sure you want to update');
     if(changeStatus){
        if($scope.newPassword==$scope.cnfrmPassword){
        var password={};
        password.oldPassword=$scope.oldPassword;
        password.newPassword=$scope.newPassword;
        password.userName=userInfo.getUser().user.email;

    $http({
                method: 'POST',
                url: 'http://localhost:8080/projectmanagementapp/user/changepassword',
                data: password,
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
            }).then(function mySucces(response) {
                $scope.oldPassword="";
                $scope.newPassword="";
                $scope.cnfrmPassword="";
                alert("password changed");
        }, function myError(response) {
           alert("password  can not changed");
        });
    }else{
        alert("password not matched");
    }
}else{
        $scope.oldPassword="";
        $scope.newPassword="";
        $scope.cnfrmPassword="";
    }
   }
});