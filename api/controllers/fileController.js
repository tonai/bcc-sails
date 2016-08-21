/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 */

module.exports = {
  upload: function (req, res) {
    req.file('image').upload({
      // don't allow the total upload size to exceed ~10MB
      maxBytes: 10000000
    }, function whenDone(err, uploadedFiles) {
      if (err) {
        return res.negotiate(err);
      }

      // If no files were uploaded, respond with an error.
      if (uploadedFiles.length === 0){
        return res.badRequest('No file was uploaded');
      }

      let fd = uploadedFiles[0].fd;
      return res.ok({file: fd.substr(fd.lastIndexOf('/') + 1)});
    });
  },

  /**
   * Serve image
   *
   * (GET /file/get/:name)
   */
  get: function (req, res){
    var SkipperDisk = require('skipper-disk');
    var fileAdapter = SkipperDisk();

    req.validate({
      name: 'string'
    });

    fileAdapter.read('/home/tonai/Projects/bcc-sails/.tmp/uploads/' + req.param('name'))
      .on('error', function (err){
        return res.serverError(err);
      })
      .pipe(res);
  },

  /**
   * Delete image from disk
   *
   * (DELETE /file/delete/:name)
   */
  delete: function (req, res){
    var SkipperDisk = require('skipper-disk');
    var fileAdapter = SkipperDisk();

    req.validate({
      name: 'string'
    });

    fileAdapter.rm('/home/tonai/Projects/bcc-sails/.tmp/uploads/' + req.param('name'), function(error) {
      if (error) {
        return res.serverError(err)
      } else {
        res.ok();
      }
    });
  }
};
