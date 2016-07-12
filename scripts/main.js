(function( doc ){
  'use strict';

  var randomColors
    , colors = ['#54ACD2', '#3D8EB9', '#EC87BF', '#FBA026', '#A38F84', '#4EBEA5', '#F7DA64', '#D1D5D8']; 

  function init() {
    $('.header').chameleon({
      mirror: '.header',
      set: {
        borderColor: 'backgroundColor'
      }
    });

      $('.page-content__title, .page-content__subtitle').chameleon({
        mirror: '.header',
        set: {
          borderColor: 'backgroundColor',
          color: 'backgroundColor'
        }
      });

      $('.btn, .page-content__link').chameleon({
        mirror: '.header',
        set: {
          color: 'backgroundColor'
        }
      });
  
    setInterval(function(){
      randomColors = colors[Math.floor(Math.random()*colors.length)];
      $('.header').css('backgroundColor', randomColors);
    }, 2500);
  }
    
  $(doc).ready( init );

})( document );