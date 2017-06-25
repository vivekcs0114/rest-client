app.controller('allprojectCtrl', function($scope, $http, userInfo) {
    var pageNumber = 1;
    var start = 1;
    var size = 3;
    var content = "";
    $scope.detailsDivStatus = false;
    $scope.projectIdStatus = true;
    $scope.preBtnStatus = true;
    $scope.nextBtnStatus = true;
    $scope.hideBtnStatus = false;

    var indexing = function(begin, end, total) {
        $scope.begin = begin;
        $scope.end = end;
        $scope.total = total;
    }


    var getProject = function(start, size, content, pageNumber) {
        $http({
            method: "GET",
            url: "http://localhost:8080/projectmanagementapp/project?start=" + start + "&size=" + size + "&companyid="+userInfo.getUser().user.company.companyId+"&query=" + content,
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
        }).then(function mySucces(response) {
            $scope.projects = response.data.data;
            if (pageNumber > 1) {
                $scope.preBtnStatus = false;
            } else {
                $scope.preBtnStatus = true;
            }

            if (pageNumber < ((response.data.totalResult) / size)) {
                $scope.nextBtnStatus = false;
            } else {
                $scope.nextBtnStatus = true;
            }

            indexing(start + 1, start + response.data.data.length, response.data.totalResult);


        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }

    $scope.getNextProject = function() {
        $scope.preBtnStatus = false;
        start = start + 1;
        pageNumber = pageNumber + 1;
        getProject((start - 1) * size, size, content, pageNumber);
    }

    $scope.getPreviousProject = function() {
        $scope.nextBtnStatus = false;
        pageNumber = pageNumber - 1;
        start = start - 1;
        getProject((start - 1) * size, size, content, pageNumber);
    }


    $scope.search = function(query) {
        pageNumber = 1;
        start = 1;
        size = 3;
        content = content + query;
        getProject((start - 1) * size, size, content, pageNumber);
    }

    var getDetail = function(projectId) {
        $scope.detailsDivStatus = true;
        $http({
            method: "GET",
            url: "http://localhost:8080/projectmanagementapp/project/" + projectId,
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+userInfo.getUser().token
                }
        }).then(function mySucces(response) {
            $scope.project = response.data;
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        })
    }

    $scope.showDetail = function(projectId) {
        $scope.projectIdStatus = true;
        $scope.saveBtnStatus = false;
        $scope.inputStatus = true;
        $scope.hideBtnStatus = true;
        getDetail(projectId);
    }

      $scope.hide = function() {
        $scope.detailsDivStatus = false;
        }
    //Execution start from here
    getProject((start - 1) * size, size, content, pageNumber);
});
