app.controller('signupCtrl', ['$scope', '$http', '$location', 'userInfo', function($scope, $http, $location, userInfo){
	$scope.headerStatus=false;
	$scope.signupUser=function(){
		if($scope.password==$scope.confirmPassword){
        var user={};
        user.firstName=$scope.firstName;
		user.lastName=$scope.lastName;
		user.companyName=$scope.companyName;
		user.email=$scope.email;
		user.mobile=$scope.mobile;
		user.type="admin";
		user.password=$scope.password;
			 $http({
                method: 'POST',
                url: 'http://localhost:8080/projectmanagementapp/company',
                data: user,
                headers: {
                        'Content-Type': 'application/json'
                }
            }).then(function(data, status, headers, config) {
            	//userInfo.setUser(data.data);
                $location.path('/login');
            })
		}else{
			alert('user password must be match')
		}
		
	}

	$scope.cancel=function(){
		$location.path('/home');
	}
}]);