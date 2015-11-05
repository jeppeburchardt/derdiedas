module.exports = function(grunt) {
	
	grunt.config.merge({
		jshint: {
			development: {
				files: {
					src: [
						'source/**/*.js',
						'source/**/*.jsx',
					]
				},
				options: {
					jshintrc: '.jshintrc'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-jsxhint');

};