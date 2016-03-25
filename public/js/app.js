var sosFixit =

          angular
            .module('SosFixit', [
                'ngResource',
                'ng-token-auth',
                // 'ngCookies',
                // 'ngAnimate',
                'ngRoute',
                // 'ngSanitize',
                // 'ngTouch',
                'ipCookie'
            ])
            .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/', {
                  templateUrl: 'views/main.html',
                  // controller: 'MainCtrl'
                })
                .when('/sign_in', {
                  templateUrl: 'views/user_sessions/new.html',
                  controllers: 'UserSessionsCtrl'
                })
                .when('/register', {
                  templateUrl: 'views/user_registrations/new.html',
                  controllers: 'UserRegistrationsCtrl',
                  controllerAs: 'userRegistrationsCtrl'
                })
                .when('/about', {
                  templateUrl: 'about.html',
                  controller: 'AboutCtrl'
                })
                .otherwise({
                  redirectTo: '/'
                });
              }])

            // .config(['$authProvider', function($authProvider){
            // 		$authProvider.configure({
            // 			apiUrl: 'http://localhost:3000'
            // 		});
            // 	}])


            .run(['$rootScope', '$location', function($rootScope, $location) {
              $rootScope.$on('auth:login-success', function(){
                $location.path('/');
            });
  }]);