/* toggle-ui AFRAME Componenet*/

/**
 * Component that toggles the visibility of a ui element by moving the element
 * behind the user.
 */
AFRAME.registerComponent('toggle-ui', {
  schema: {
    on: {type: 'string', default: 'click'},
    startVis: {type: 'bool', default: false},
    xVal: {type: 'number'},
    yVal: {type: 'number'},
    zVal: {type: 'number', default: -5},
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var visible = data.startVis;
    alert(data.xVal + ", " + data.yVal + ", " + data.zVal*-1);
    el.addEventListener(data.on, function () {
      if (visible) {
        data.target.setAttribute('position', {'x': data.xVal, 'y': data.yVal, 'z': data.zVal*-1});
        visible = false;
      } else {
        data.target.setAttribute('position', {'x': data.xVal, 'y': data.yVal, 'z': data.zVal});
        visible = true;
      }
    });
  },
});
