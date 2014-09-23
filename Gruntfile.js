module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		deployment_src_path: null,
		deployment_dst_path: null,

		//at first, we need to concatenate all our js files
		concat: {
			//concat order should be: app js, then js/init/renderer then customer/f4h/init.js then js/init/logger.js
			js : {
				src : [
					'src/js/**/*.js', '!src/js/init/**/*.js'
				],
				dest : 'src/build/js/<%= pkg.name %>.js'
			},
			config_production : {
				src : [
					'src/build/js/<%= pkg.name %>.js', 'customer/production/init.js', 'src/js/init/logger.js'
				],
				dest : 'src/build/js/<%= pkg.name %>.production.js'
			},
			config_rc : {
				src : [
					'src/build/js/<%= pkg.name %>.js', 'src/js/init/renderer.js', 'customer/rc/init.js', 'src/js/init/logger.js'
				],
				dest : 'src/build/js/<%= pkg.name %>.rc.js'
			},
			config_testing : {
				src : [
					'src/build/js/<%= pkg.name %>.js', 'src/js/init/renderer.js', 'customer/testing/init.js', 'src/js/init/logger.js'
				],
				dest : 'src/build/js/<%= pkg.name %>.testing.js'
			},
			config_development : {
				src : [
					'src/build/js/<%= pkg.name %>.js', 'src/js/init/renderer.js', 'customer/development/init.js', 'src/js/init/logger.js'
				],
				dest : 'src/build/js/<%= pkg.name %>.development.js'
			},
			css: {
				src: [
					'src/css/**/*.css'
				],
				dest: 'src/build/css/combined.css'
			}
		},

		//after concatenate into a new file we want to minify our js
		uglify: {
			options: {
				banner: '/** <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Copyrigth by Fashion4Home GmbH 2014 */\n'
			},
			files: {
				'src/build/j<%= pkg.name &>.production.js': ['src/build/j<%= pkg.name &>.production.min.js'],
				'src/build/j<%= pkg.name &>.rc.js': ['src/build/j<%= pkg.name &>.rc.min.js'],
				'src/build/j<%= pkg.name &>.testing.js': ['src/build/j<%= pkg.name &>.testing.min.js'],
				'src/build/j<%= pkg.name &>.development.js': ['src/build/j<%= pkg.name &>.development.min.js']
			}
		},

		shell: {
			update: {
				command: [
					// delete  old files
					'sudo mkdir -p <%= deployment_dst_path %>',
					'sudo rm -r <%= deployment_dst_path %>/*',

					// create production folders
					'sudo mkdir -p <%= deployment_dst_path %>/src/build/js',
					'sudo mkdir -p <%= deployment_dst_path %>/src/build/css',
					'sudo mkdir -p <%= deployment_dst_path %>/vendor',

					// copy all production files
					'sudo cp -r <%= deployment_src_path %>/src/build/js/* <%= deployment_dst_path %>/src/build/js',
					'sudo cp -r <%= deployment_src_path %>/src/build/css/* <%= deployment_dst_path %>/src/build/css',
					'sudo cp -r <%= deployment_src_path %>/vendor <%= deployment_dst_path %>/',
					'sudo cp <%= deployment_src_path %>/src/log.php <%= deployment_dst_path %>/src/log.php'
				].join(";")
			}
		},

		clean: {
			old: [
				'src/build/js/*'
			],
			temp: [
				'src/build/js/js-logger.js'
			]
		},

		//after all this is nice for development, use "$ grunt watch" to start on console
		watch: {
			files: ['src/js/**/*.js', 'customer/**/*.js'],
			tasks: ['concat', 'uglify', 'clean']
		}
	});

	// set passed path options / use default paths
	var tmpPath = grunt.option('tmp-path') ? grunt.option('tmp-path') : '/tmp/jslogger';
	var dstPath = grunt.option('dst-path') ? grunt.option('dst-path') : '/home/ubuntu/jslogger';
	grunt.config.set('deployment_src_path', tmpPath);
	grunt.config.set('deployment_dst_path', dstPath);

	//Load the plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task(s).
	grunt.registerTask('default', ['clean:old', 'concat', 'uglify', 'clean:temp']);
	grunt.registerTask('deploy', ['clean:old', 'concat', 'uglify', 'clean:temp', 'shell:update']);
};