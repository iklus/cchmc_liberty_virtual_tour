/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    scn: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
        //Changes sky image
        data.target.setAttribute('material', 'src', '#'+data.scn+'360');
      }, data.dur);
    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  },



  /**
   * Hides and changes the losation of the spheres.
*/
  switchSpheres: function () {
    var data = this.data;
    var targetEl = this.data.target;

    var scaleVector= "3 3 3";

    //Load in all spheres.
    var cdbiDoors = document.getElementById("outside_cdbi-doors");
    var flag = document.getElementById("outside_flag");
    var catStatue = document.getElementById("outside_g_cat-statue");
    var chess = document.getElementById("outside_g_chess");
    var end = document.getElementById("outside_g_end");
    var entrance = document.getElementById("outside_g_entrance");
    var fork = document.getElementById("outside_g_fork");
    var greenStatue = document.getElementById("outside_g_green-statue");
    var ironStatue = document.getElementById("outside_g_iron-statue");
    var grass = document.getElementById("outside_g_grass");
    var redStatue = document.getElementById("outside_g_red-statue");
    var mainEntrance = document.getElementById("outside_main-entrance");
    var sidewalk = document.getElementById("outside_sidewalk");
  
    
  switch (data.key) {
    case 'outside_cdbi-doors':
      
      break;
  
    case 'outside_g_cat-statue':
      
      break;
      
    case 'outside_g_chess':
      
      break;

    case 'outside_g_entrance':
      
      break;

    case 'outside_g_end':
      
      break;

    case 'outside_g_fork':
      
      break;

    case 'outside_g_green-statue':
      
      break;

    case 'outside_g_iron-statue':
      
      break;

    case 'outside_g_red-statue':
      
      break;

    case 'outside_g_grass':
      
      break;

    case 'outside_main-entrance':
      alert(entrance.components.scale);
      entrance.components.scale = scaleVector;
      entrance.components.position = "10 0 10";


      break;

    case 'outside_sidewalk':
      
      break;

    case 'outside_flag':
      
      break;

    default:
      alert('Switch statement failed.')
      break;
  }
}
});