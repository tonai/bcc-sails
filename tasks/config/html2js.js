module.exports = function(grunt) {

  grunt.config.set('html2js', {
    options: {
      base: './assets'
    },
    dist: {
      src: ['assets/js/**/*.html'],
      dest: 'assets/js/templates.js'
    },
  });

  grunt.loadNpmTasks('grunt-html2js');
};
