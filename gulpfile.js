var gulp = require('gulp')
var sprity = require('sprity');
var sprityJS = require('sprity-js');
var del = require('del');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var gulpCopy = require('gulp-copy');

gulp.task('sprites:generate', () => {
  return sprity.src({
    src: './resources/images/**/*.png',
    style: 'sprite.js',
    dimension: [{
      ratio: 1, dpi: 72
    }],
    split: true,
    orientation: 'binary-tree',
    margin: 0,
    processor: sprityJS // The important part for sprity JS
  })
  .pipe(gulp.dest('public/images/sprites/'));
});

gulp.task('clean:sprites', () => {
  return del([
    './public/images/sprites'
  ]);
});

gulp.task('replace:sprite_url', () =>{
  // gulp.src(['./src/sprites/sprite.js'])
  //   .pipe(replace(/\.\.\/images/g, 'http://127.0.0.1:3000/images'))
  //   .pipe(gulp.dest('./src/constants'));
});

gulp.task('move:spritejs', () => {
  gulp.src(['public/images/sprites/sprite.js'])
    .pipe(gulp.dest('src/shared/'));
  del([
      './public/images/sprites/sprite.js'
    ]);
  // return gulp.src('./src/sprites/*.png')
  //   .pipe(gulpCopy('./public/images', {prefix: 2}));
})

gulp.task('build:sprites', (cb) => {
  runSequence('clean:sprites', 'sprites:generate', ['replace:sprite_url', 'move:spritejs'], cb);
});
