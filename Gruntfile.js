module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//at first, we need to concatenate all our js files
		concat: {
			js : {
				src : [
					'src/js/**/*.js'
				],
				dest : 'src/build/js/<%= pkg.name %>.js'
			}
			//if we want it for css too, uncomment it
			/**
			,
			css: {
				src: [
					'css/*'
				],
				dest: 'combined.css'
			}
			*/
		},

		//after concatenate into a new file we want to minify our js
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/build/js/<%= pkg.name %>.js',
				dest: 'src/build/js/<%= pkg.name %>.min.js'
			}
		},

		//after all this is nice for development, use "$ grunt watch" to start on console
		watch: {
			files: ['src/js/**/*.js'],
			tasks: ['concat', 'uglify']
		}
	});

	//Load the plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify']);
};