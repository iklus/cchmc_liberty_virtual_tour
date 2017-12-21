/* toggle-visiblity AFRAME Componenet*/

/**
 * Component that toggles the visiblity of the a target entity by changing
 * it's position to outside the 360 image.
 */
AFRAME.registerComponent('toggle-visiblity', {
  schema: {
    on: {type: 'string'},
    startVis: {type: 'bool'},
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var visible = data.startVis;
    
    el.addEventListener(data.on, function () {
      if (visible) {
        data.target.setAttribute('visible', false);
        visible = false;
      } else {
        data.target.setAttribute('visible', true);
        visible = true;
      }
    });
  },
});
