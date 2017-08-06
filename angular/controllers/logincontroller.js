/**
 * Login controller
 */
myModule.controller("loginCtrl", ["$rootScope", "$scope", "$location", function ($rootScope, $scope, $location) {

    /**
     * Handles login function
     */
    $scope.Login = function () {

        /// check the uname and pwd
        if ($scope.username === "test" && $scope.password === "test") {
            $rootScope.User = {
                Name: $scope.username,
                IsLoggedIn: true
            };
            /// set the name in localStorage
            localStorage.setItem("user", angular.toJson($rootScope.User));
            $location.path("/dashboard");
        }
        else {
            $location.path("/accessdenied");

        }
    }

    /**
     * Handles logout function
     */
    $scope.logOut = function () {
        $rootScope.User = {
            Name: "",
            IsLoggedIn: false
        };
        /// set the name in localStorage
        localStorage.setItem("user", angular.toJson($rootScope.User));
        $location.path("/dashboard");
    }
}]);