/// bundle.config.js 
module.exports = {
    bundle: {
        main: {
            scripts: [
                "./angular/app.module.js",
                "./angular/app.router.js"
            ],
            styles: [
                "./css/**/*.css"            
            ]
        },
        external: {
            scripts: [
                "./node_modules/jquery/dist/jquery.min.js",
                "./node_modules/bootstrap/dist/js/bootstrap.min.js",
                "./node_modules/angular/angular.min.js"
            ],
            styles: [
                "./node_modules/bootstrap/dist/css/bootstrap.min.css",
                "./node_modules/fontawesome/css/font-awesome.min.css"
            ]
        }
    },
    copy: './images/**/*.{png,svg,jpg}'
};