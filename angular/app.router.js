/**
 * Creating the module's router for FB-Comments app
 */
// <script src="angular/app.module.js"></script>
// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>

/// set the router configuration...
myFBCommentModule.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/11", {
            template: "<h1>TEST 11</h1><p>Bananas contain around 75% water.</p>"
        })
        .when("/22", {
            template: "<h1>TEST 22</h1><p>Tomatoes contain around 95% water.</p>"
        })
        .when("/1", {
            templateUrl: "angular/templates/1.html"
            //controller: ""
        })
        .when("/2", {
            templateUrl: "angular/templates/2.html"
            //controller: ""
        })
        .otherwise({
            templateUrl: "angular/templates/1.html"
            //controller: ""
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});