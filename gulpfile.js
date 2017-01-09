var gulp 			= require("gulp"),
		wiredep		= require("wiredep"),
		sass 			= require("gulp-sass"),
		jade 			= require("gulp-jade"),
		borowsSync= require("browser-sync"),
		concat 		= require("gulp-concat"),
		uglifyjs 	= require("gulp-uglifyjs"),
		cssnano 	= require("gulp-cssnano"),
		rename 		= require("gulp-rename"),
		del 			= require("del"),
		pngquant 	= require("imagemin-pngquant"),
		imagemin 	= require("gulp-imagemin"),
		gulpCache = require ("gulp-cache"),
		prefixer 	= require("gulp-autoprefixer"),
		babel = require("gulp-babel"),
		sourcemaps = require("gulp-sourcemaps"),
		browserify = require("browserify");

gulp.task("jade", function() {
	return gulp.src("app/jade/**/*.jade")
	.pipe(jade({pretty: true}))
	.pipe(gulp.dest("app"))
});

gulp.task("sass", function() {
	return gulp.src("app/sass/**/*.sass")
	.pipe(sass())
	.pipe(prefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest("app/css"))
	.pipe(borowsSync.reload({stream: true}))
});

//es6
gulp.task("js", function() {
	return gulp.src("app/js/componentsEs6/*.jsx")
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015', 'react', 'stage-2'],
			plugins: ["add-module-exports", "transform-es2015-modules-umd", "babel-plugin-transform-es2015-modules-commonjs"]
		}))
		.pipe(concat("es6Code.js"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("app/js"));
})

//подключение и сжатие скриптов
gulp.task("scripts", function() {
	return gulp.src([
		"app/libs/jquery/dist/jquery.min.js",
		"app/libs/datetimepicker/jquery.datetimepicker.min.js",
		"app/libs/fancybox/source/jquery.fancybox.pack.js",
		"app/libs/wow/dist/wow.min.js",
		"app/libs/slick-carousel/slick/slick.min.js",
		"app/libs/materialize/materialize.min.js",
		"app/libs/bootstrap/dist/js/bootstrap.min.js",
		"app/libs/jquery.spincrement.min.js",
		"app/libs/Selecter-master/jquery.fs.selecter.min.js",
		"app/libs/jquery.validate.min.js",
		"app/libs/jquery.plugin.min.js",
		"app/libs/jquery.countdown.min.js"
	])
	.pipe(concat("libs.min.js"))
	.pipe(uglifyjs())
	.pipe(gulp.dest("app/js"))
});

gulp.task("cssLibs", ['sass'], function() {
	return gulp.src("app/css/vendors/vendors.css")
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest("app/css"))
});

gulp.task("borowsSync", function() {
	borowsSync({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});

gulp.task("watch", ['borowsSync', 'jade', 'cssLibs', 'js', 'scripts', 'cssLibs'], function() {
	gulp.watch("app/sass/**/*.sass", ['sass']);
	gulp.watch("app/jade/**/*.jade", ['jade']);
	gulp.watch("app/js/**/*.js", ['js']);
	gulp.watch("app/js/**/*.jsx", ['js']);
	gulp.watch("bower.json", borowsSync.reload);
	gulp.watch("app/*.html", borowsSync.reload);
	gulp.watch("app/css/index.css", borowsSync.reload);
	gulp.watch("app/js/**/*.js", borowsSync.reload);
});

gulp.task("clear", function() {
	return cache.clearAll();
});

gulp.task("default", ['watch']);

//build
gulp.task("clean", function() {
	return del.sync("dist");
});

gulp.task("imgminImages", function() {
	return gulp.src("app/images/**/*")
	.pipe(gulpCache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest("dist/images"));
});

gulp.task("imgminUploads", function() {
	return gulp.src("app/upload/**/*")
	.pipe(gulpCache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest("dist/upload"));
});

//build task
gulp.task("build", ['clean', 'imgminImages', 'imgminUploads'], function() {
	var buildCss = gulp.src([
		'app/css/vendors.min.css',
		'app/css/index.css'
	])
	.pipe(gulp.dest('dist/css'));

	gulp.src('app/fonts/**/*')
	.pipe(gulp.dest("dist/fonts"));

	gulp.src(["app/js/common.js", "app/js/libs.min.js"])
	.pipe(gulp.dest("dist/js"));

	gulp.src("app/js/es6Code.js")
	.pipe(gulp.dest("dist/js"));

	gulp.src("app/*.html")
	.pipe(gulp.dest("dist"));

	gulp.src("app/favicons/**/*")
	.pipe(gulp.dest("dist/favicons"));

	gulp.src("app/favicon.ico")
	.pipe(gulp.dest("dist"));

	gulp.src("app/index.php")
	.pipe(gulp.dest("dist"));
});