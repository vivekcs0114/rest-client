var app = angular.module('myapp');
app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'client/home/home.html',
        controller : 'homeCtrl'
    })
    .when('/login', {
        templateUrl : '/client/login/login.html',
        controller : 'loginCtrl'
    })
    .when('/signup', {
        templateUrl : '/client/signup/signup.html',
        controller : 'signupCtrl'
    })
    .when('/project', {
        templateUrl : 'client/project/project.html',
        controller : 'projectCtrl'
    })
    .when('/employee', {
        templateUrl : 'client/employee/employee.html',
        controller : 'employeeCtrl'
    })
    .when('/profile', {
        templateUrl : 'client/profile/profile.html',
        controller : 'profileCtrl'
    })
    .when('/about', {
        templateUrl : 'client/about/about.html',
        controller : 'aboutCtrl'
    })
    .when('/contact', {
        templateUrl : 'client/contact/contact.html',
        controller : 'contactCtrl'
    })
    .when('/company', {
        templateUrl : '/client/company/company.html',
        controller : 'companyCtrl'
    })
    .when('/task', {
        templateUrl : 'client/task/task.html',
        controller : 'taskCtrl'
    })
    .when('/assign', {
        templateUrl : 'client/assign/assign.html',
        controller : 'assignCtrl'
    })
    .when('/notification', {
        templateUrl : 'client/notification/notification.html',
        controller : 'notificationCtrl'
    })
    .when('/account', {
        templateUrl : 'client/account/account.html',
        controller : 'accountCtrl'
    })
    .when('/projects', {
        templateUrl : 'client/project/allprojects.html',
        controller : 'allprojectCtrl'
    })
    .when('/team', {
        templateUrl : 'client/team/team.html',
        controller : 'teamCtrl'
    })
    .when('/logout', {
        templateUrl : 'client/logout/logout.html',
        controller : 'logoutCtrl'
    })
    .otherwise({
    	redirectTo : '/'
    });

    $locationProvider.html5Mode({enabled: true, requiredBase: false});
});