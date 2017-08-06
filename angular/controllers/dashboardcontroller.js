/**
 * Dashboard controller
 */
myModule.controller("dashboardCtrl", ["$rootScope", "$scope", function ($rootScope, $scope) {

    /**
     * Initializers
     */
    $scope.userName = $rootScope.User.Name;
    $scope.users = [
        { id: 12, name: "Mohammed Rafi", age: 27 },
        { id: 14, name: "Ramanan", age: 28 },
        { id: 11, name: "Mohammed Aleem", age: 25 },
        { id: 16, name: "Prasanna", age: 24 },
        { id: 17, name: "Athmanathan", age: 21 }
    ];

    /// set the name in localStorage
    localStorage.setItem("users", angular.toJson($scope.users));
}]);