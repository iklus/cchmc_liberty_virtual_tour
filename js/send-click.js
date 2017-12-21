/* send-click AFRAME Componenet*/

/**
 * Component that sends a click to a different entity.
 */
AFRAME.registerComponent('send-click', {
  schema: {
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener("click", function () {
      data.target.emit("click");
      alert("Clicked: " + data.target);
    });
  },
});