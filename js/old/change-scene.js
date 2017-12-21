function switchDiv(vis, invis) {
  vis.setAttribute('visible', 'true');
  invis.setAttribute('visible', 'false');
};

var firstGateB1 = document.getElementById('#firstGateB1');
var mainEntranceEntities = document.getElementsByClassName('mainEntranceEntities');
var firstGatesEntities = document.getElementsByClassName('firstGatesEntities');

firstGateB1.addEventListener('click', function() {
  alert('Function Called')
  //switchDiv(firstGatesEntities, mainEntranceEntities);
  firstGatesEntities.setAttribute('visible', 'true');
  mainEntranceEntities.setAttribute('visible', 'false');
});
