module.exports = function(grunt){
	
	grunt.loadTasks("grunt");	
		
	//publish site to web server
	grunt.registerTask("deploy", ["ftp-deploy:prod"]);
	
}