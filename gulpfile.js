const { watch, dest, src, task } = require('gulp');
const less = require('gulp-less');

task('watch', function (cb) {

  watch(['./less/*.less'], function (cb) {
    return src('./less/*.less').pipe(less()).pipe(dest('./css', { overwrite: true }));

  });

  cb();
});