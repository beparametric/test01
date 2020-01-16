(function() {
  var combinations = [
    ['test', 'innovative', 'smart', 'ousado', 'curious', 'unique', '<strong>parametric</strong>'],
    ['test', 'creative', 'poetic', 'simple', 'complex', 'selvagem', '<strong>parametric</strong>'],
    ['test', 'different', 'bacana', 'cool', 'flexible', 'more', '<strong>parametric</strong>'],
    ['test', 'all', 'organized', 'chaotic', 'full', '@#!%*$', '<strong>parametric</strong>'],
  ];

  randomIndex = Math.floor(Math.random()*(4));

  var typedTitle = new Typed('.title__typing', {
   strings: combinations[randomIndex],
   startDelay: 500,
   backDelay: 500,
   typeSpeed: 90,
   backSpeed: 40,
   smartBackspace: true,
   loop: false,
   showCursor: false
 });
})();
