app.controller('companyCtrl', function ($scope, $http, userInfo) {
    $scope.inputStatus = true;
    $scope.companyIdStatus = true;
    $scope.updateBtnStatus = false;
    if(userInfo.getUser().user.type=="admin"){
        $scope.editBtnStatus=true;
    }else{
        $scope.editBtnStatus=false;
    }
    var getCompany = function () {
        $http({
            method: "GET",
            url: "http://localhost:8080/projectmanagementapp/company/" + userInfo.getUser().user.company.companyId,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.getUser().token
            }
        }).then(function mySucces(response) {
            console.log(response.data);
            $scope.company = response.data;
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }

    $scope.updateDetail = function () {
        $scope.companyIdStatus = false;
        $scope.updateBtnStatus = true;
        $scope.inputStatus = false;
    }


    $scope.update = function (companyId) {
        var saveStatus = confirm('Are you sure you want to update');
        if (saveStatus) {
            var company = {};
            company.companyName = $scope.companyName;
            company.companyContactNumber = $scope.companyContactNumber;
            company.companyAddress = $scope.companyAddress;
            company.companyId = userInfo.getUser().user.company.companyId;

            $http({
                method: 'PUT',
                url: 'http://localhost:8080/projectmanagementapp/company/' + companyId,
                data: company,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userInfo.getUser().token
                }
            }).then(function (data, status, headers, config) {
                $scope.companyIdStatus = true;
                $scope.updateBtnStatus = false;
                $scope.inputStatus = true;
                alert("record updated");
            })
        } else {
            alert("record could not be updated");
        }
    }

    $scope.cancel = function () {
        var cancelStatus = confirm('Are you sure! you want to cancel');
        if (cancelStatus) {
            $scope.companyIdStatus = true;
            $scope.updateBtnStatus = false;
            $scope.inputStatus = true;
        } else {
            $scope.detailsDivStatus = true;
        }
    }


    //Execution start from here
    getCompany();
});