var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");
//起服务
gulp.task("server", function() {
    return gulp.src("src")
        .pipe(server({
            port: 8888,
            middlesave: function(req, res, next) {
                next();
            }
        }))
});
//sass
gulp.task("devScss", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
});
//监听
gulp.task("wacth", function() {
    return gulp.watch("./src/scss/*/scss", gulp.series("devScss"));
});
//串执行
gulp.task("dev", gulp.series("devScss", "server", "wacth"));