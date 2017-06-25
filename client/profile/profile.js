app.controller('profileCtrl', ['userInfo', '$scope', '$location', '$http', function(userInfo, $scope, $location, $http){

    var type = userInfo.getUser().user.type;
    if(type=='admin' || type=='Admin'){
        $scope.admin=true;
    }else{
        $scope.employee=true;
    }

    $scope.inputStatus=true;

    $scope.includeCompany=function(){
        $scope.companyTemplate="client/company/company.html";
    };
    var getEmployee=function(){
    $http({
        method : "GET",
        url : "http://localhost:8080/projectmanagementapp/user/"+userInfo.getUser().user.id,
        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
    }).then(function mySucces(response) {
        console.log(userInfo.getUser());
        $scope.employee=response.data;
        $scope.userName=response.data.firstName+" "+ response.data.lastName;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
   }
   $scope.userName=userInfo.getUser().firstName;
  

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

   $scope.update=function(empId){
    $scope.inputStatus=true;
    var saveStatus = confirm('Are you sure you want to update');
        if (saveStatus) {
           var employee = {};
            employee.empId = userInfo.getUser().user.id;
            employee.firstName = $scope.firstName;
            employee.lastName = $scope.lastName;
            employee.mobile = $scope.mobile;
            employee.skills = $scope.skills;
            employee.type = $scope.type;
            employee.company=userInfo.getUser().user.company;

            $http({
                method: 'PUT',
                url: 'http://localhost:8080/projectmanagementapp/user/' + empId,
                data: employee,
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
            }).then(function(data, status, headers, config) {
                alert("record updated");
                $scope.detailsDivStatus = false;
            })
        } else {
            alert("record could not be updated");
        }
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

    $scope.updateDetail = function() {
        $scope.companyIdStatus=false;
        $scope.updateBtnStatus = true;
        $scope.inputStatus = false;
    }

    $scope.cancel = function() {
        var cancelStatus = confirm('Are you sure! you want to cancel');
        if (cancelStatus) {
        $scope.companyIdStatus=true;
        $scope.updateBtnStatus = false;
        $scope.inputStatus = true;
        } else {
            $scope.detailsDivStatus = true;
        }
    }
    getEmployee();
}]);