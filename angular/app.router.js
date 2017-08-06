/**
 * Creating the module's router for this app
 */
// <script src="angular/app.module.js"></script>
// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>

/// set the router configuration...
myModule.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/dashboard", {
            resolve: {
                check: function ($rootScope, $location) {

                    /// get user from local
                    var userFromLocal = angular.fromJson(localStorage.getItem("user"));

                    /// check the rootscope
                    if (userFromLocal !== undefined && userFromLocal.IsLoggedIn) {
                        $rootScope.User = userFromLocal;
                        return;
                    }

                    /// check the rootscope
                    if (!$rootScope.User.IsLoggedIn || $rootScope.User === undefined) {
                        $location.path("/login");
                    }
                }
            },
            templateUrl: "angular/templates/dashboard.html",
            controller: "dashboardCtrl"
        })
        .when("/login", {
            templateUrl: "angular/templates/login.html",
            controller: "loginCtrl"
        })
        .when("/profile/:id", {
            resolve: {
                check: function ($rootScope, $location) {

                    /// get user from local
                    var userFromLocal = angular.fromJson(localStorage.getItem("user"));

                    /// check the rootscope
                    if (userFromLocal !== undefined && userFromLocal.IsLoggedIn) {
                        $rootScope.User = userFromLocal;
                        return;
                    }

                    /// check the rootscope
                    if (!$rootScope.User.IsLoggedIn || $rootScope.User === undefined) {
                        $location.path("/login");
                    }
                }
            },
            templateUrl: "angular/templates/profile.html",
            controller: "profileCtrl"
        })
        .when("/contactus", {
            resolve: {
                check: function ($rootScope, $location) {

                    /// get user from local
                    var userFromLocal = angular.fromJson(localStorage.getItem("user"));

                    /// check the rootscope
                    if (userFromLocal !== undefined && userFromLocal.IsLoggedIn) {
                        $rootScope.User = userFromLocal;
                        return;
                    }

                    /// check the rootscope
                    if (!$rootScope.User.IsLoggedIn || $rootScope.User === undefined) {
                        $location.path("/login");
                    }
                }
            },
            templateUrl: "angular/templates/contactUs.html"
        })
        .when("/notfound", {
            templateUrl: "angular/templates/notfound.html"
        })
        .when("/accessdenied", {
            templateUrl: "angular/templates/accessdenied.html"
        })
        .otherwise({
            redirectTo: "/dashboard"
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});