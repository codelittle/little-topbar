module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'css/little-topbar.css': 'scss/main.scss',
          'css/page.css': 'scss/page.scss'
        }
      }
    },

    coffee: {
      compile: {
        files: {
          'js/little-topbar.js': 'src/main.coffee'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      coffee: {
        files: 'src/*.coffee',
        tasks: ['coffee']
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'coffee']);
  grunt.registerTask('default', ['build','watch']);
};