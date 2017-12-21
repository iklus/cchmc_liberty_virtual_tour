/* toggle-visiblity AFRAME Componenet*/

/**
 * Component that toggles the visiblity of the a target map by changing
 * it's position to outside the 360 image.
 */
AFRAME.registerComponent('toggle-map', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var visible = false;

    el.addEventListener(data.on, function () {
      if (visible) {
        data.target.setAttribute('position', { x: 0, y: 0, z: 5});
        visible = false;
      } else {
        data.target.setAttribute('position', { x: 0, y: 0, z: -5});
        visible = true;
      }
    });
  },
});
