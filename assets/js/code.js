(function() {
  var combinations = [
    ['innovative', 'smart', 'ousado', 'curious', 'unique', '<strong>parametric</strong>'],
    ['creative', 'poetic', 'simple', 'complex', 'selvagem', '<strong>parametric</strong>'],
    ['different', 'bacana', 'cool', 'flexible', 'more', '<strong>parametric</strong>'],
    ['all', 'organized', 'chaotic', 'full', '@#$%&*!', '<strong>parametric</strong>'],
  ];

  randomIndex = Math.floor(Math.random()*(4));

  var typedTitle = new Typed('.title__typing', {
   strings: combinations[randomIndex],
   startDelay: 100,
   backDelay: 500,
   typeSpeed: 60,
   backSpeed: 0,
   smartBackspace: true,
   loop: false,
   showCursor: false
 });
})();
