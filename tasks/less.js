module.exports = function(grunt) {
	
	grunt.config.merge({
		less: {
			development: {
				options: {
					yuicompress: false
				},
				files: {
					"./styles.css": "./source/styles/index.less"
				}
			},
			production: {
				options: {
					yuicompress: true
				},
				files: {
					"./styles.css": "./source/styles/index.less"
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');

};