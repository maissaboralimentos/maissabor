module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			dist: {
				src: [
					'style.css',
					'css/responsive.css',
					'css/bootstrap.css',
					'css/css3-animations.css',
					'css/animate.css',
					'css/fonts.css',
					'css/fontello-animation.css',
					'css/font-awesome.css',
					'css/icomoon.css'
				],
				dest: 'all.min.css'
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/all.min.js': ['js/jquery.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['cssmin', 'uglify']);

}
