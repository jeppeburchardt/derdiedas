module.exports = function(grunt) {

	grunt.config.init({
		pkg: require('./package.json'),
	});

	grunt.task.loadTasks('tasks');

	grunt.registerTask('dev', ['less:development', 'jshint', 'browserify:development']);
	grunt.registerTask('dev-watch', ['less', 'jshint', 'watch']);
	grunt.registerTask('build', ['less:production', 'browserify:production']);

	grunt.registerTask('default', ['less']);

};