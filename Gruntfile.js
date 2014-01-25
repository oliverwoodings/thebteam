module.exports = function(grunt) {

  grunt.initConfig({

    "http-server": {
      dev: {
        root: "public",
        port: 8000,
        host: "127.0.0.1",
        runInBackground: true
      }
    },
    watch: {
      less: {
        files: ["less/**.less"],
        tasks: ["less"]
      }
    },
    less: {
      dev: {
        options: {
          paths: ["public/less"]
        },
        files: {
          "public/css/main.css": "public/less/main.less"
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-http-server");
  
};