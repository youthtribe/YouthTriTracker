module.exports = function(grunt){

	var pkg = grunt.file.readJSON('package.json');

	grunt.config("ftp-deploy", {
		prod: {
			auth: {
				host: 'btrott.com',
				port: 21,
				authKey: 'prod'
			},
			src: 'www/',
			dest: './'
		}  
	});
	
	grunt.loadNpmTasks("grunt-ftp-deploy");

};


