module.exports = function(grunt) {
	
	var reactify = require('reactify'),
		uglifyify = require('uglifyify');

	grunt.config.merge({
		browserify: {
			development: {
				src: './source/index.js',
				dest: './main.js',
				options: {
					transform:  [reactify],
					browserifyOptions: {
						debug: true,
						extensions: [".jsx"],
					}
				}
			},
			production: {
				src: './source/index.js',
				dest: './main.js',
				options: {
					transform:  [reactify, uglifyify],
					browserifyOptions: {
						debug: false,
						extensions: [".jsx"],
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');

};