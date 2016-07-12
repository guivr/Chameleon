module.exports = function( grunt ) {

  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
      },
      vendor: {
        files: {
          'scripts/vendor.min.js': ['scripts/jquery.min.js','scripts/chameleon.jquery.js', 'scripts/prism.js']
        }
      }
    },

    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
              'styles/main.css': 'styles/main.scss'
          }
      }
    }
  });

  grunt.registerTask('default', ['uglify', 'sass']);
}