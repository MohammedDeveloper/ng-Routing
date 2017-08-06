/**
 * Profile controller
 */
myModule.controller("profileCtrl", ["$location", "$filter", "$routeParams", "$rootScope", "$scope",
    function ($location, $filter, $routeParams, $rootScope, $scope) {

        /**
         * Initializers
         */
        $scope.user = {};
        $scope.selecteduser = {};
        $scope.users = [];
        $scope.userId = parseInt($routeParams.id);

        /// check for the users and Id param
        if (localStorage.getItem("users") === undefined || localStorage.getItem("users") === null
            || $scope.userId === null || $scope.userId === undefined || $scope.userId === 0)
            $location.path("/dashboard");

        /// set the name in localStorage
        $scope.user = angular.fromJson(localStorage.getItem("user"));
        $scope.users = angular.fromJson(localStorage.getItem("users"));

        /// get the selecteduser
        $scope.selecteduser = $filter('filter')($scope.users, function (item) { return item.id === $scope.userId; })[0];
    }]);