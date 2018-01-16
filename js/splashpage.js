/*  Loading Bar Progress is now determined by init in manager.js
var loadingTriggerIDs = ["robbie_body-obj", "map_uc2D", "outside_flag360", "CBDI_1F_Open360", "CBDI_Gantry_UC360", "CBDI_Cyclotron360", "CBDI_2F_Desk2360", "Main_4F_Room10360", "Main_1F_Gates360"];
for (i = 0; i < loadingTriggerIDs.length; i++) {
  alert(loadingTriggerIDs[i]);
  document.getElementById(loadingTriggerIDs[i]).addEventListener('loaded', loadingBar());
}
*/

function loadingBar() {
  var scene = document.querySelector('a-scene');
  if (scene.hasLoaded) {
    if (getTour()) {
      hideSplash();
    } else {
      switchToButton();
    }
  } else {
    //scene.addEventListener('loaded', switchToButton());
    var bar = document.getElementById("bar");
    //alert(bar.innerHTML);
    switch(bar.innerHTML) {
      case "0%":
        bar.innerHTML = "10%";
        bar.style = "width: 10%";
        break;
      case "10%":
        bar.innerHTML = "20%";
        bar.style = "width: 20%";
        break;
      case "20%":
        bar.innerHTML = "30%";
        bar.style = "width: 30%";
        break;
      case "30%":
        bar.innerHTML = "40%";
        bar.style = "width: 40%";
        break;
      case "40%":
        bar.innerHTML = "50%";
        bar.style = "width: 50%";
        break;
      case "50%":
        bar.innerHTML = "60%";
        bar.style = "width: 60%";
        break;
      case "60%":
        bar.innerHTML = "70%";
        bar.style = "width: 70%";
        break;
      case "70%":
        bar.innerHTML = "80%";
        bar.style = "width: 80%";
        break;
      case "80%":
        bar.innerHTML = "90%";
        bar.style = "width: 90%";
        break;
      default:
        alert("Loading Error");
        bar.innerHTML = "Error Loading";
    }
  }
}

function switchToButton() {
  document.getElementById('loadingArea').innerHTML = '<div class="col-md-12 text-center"><button type="button" class="btn btn-lg btn-success" onClick="hideSplash()">Explore</button></div>';
}

function hideSplash() {
    document.getElementById("splashPage").style.display = "none";
    document.getElementById("tourUI").style.display = "inline";
    //document.getElementById("vr").style.height = "100%";
    //document.querySelector("body").emit("onresize");
}

function clickMapButton() {
  document.querySelector('a-scene').components.manager.changeMap();
}

function clickScriptButton() {
  document.querySelector('a-scene').components.manager.toggleScript();
}

function clickSoundButton() {
  if (document.querySelector('a-scene').components.manager.data.mute) {
    document.querySelector('a-scene').components.manager.data.mute = false;
    document.getElementById('menu_sound').src ='images/ui/menu_sound_on.png';
    document.querySelector('a-scene').components.manager.playSound();
  } else {
    document.querySelector('a-scene').components.manager.data.mute = true;
    document.getElementById('menu_sound').src ='images/ui/menu_sound_off.png';
    document.querySelector('a-scene').components.manager.pauseSound();
  }
}

function rotateCamera(direction) {
  var interval = 5;
  var player = document.querySelector('#mainCamera');
  var newRotation = player.getAttribute('rotation');
  switch (direction) {
    case 'up':
      newRotation.x += interval;
      break;
    case 'right':
      newRotation.y -= interval;
      break;
    
    case 'down':
      newRotation.x -= interval;
      break;
    
    case 'left':
      newRotation.y += interval;
      break;
  
    default:
      alert('Incorrect direction given.')
      break;
  }
  player.setAttribute('rotation', newRotation); 
}

function customEnterVR() {
  var scene = document.querySelector('a-scene');
  if (scene) {
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener('loaded', scene.enterVR);
    }
  }
}

function clickRobbieButton() {
  document.querySelector("#robbieOpen").emit('click');
}

function lookUp() {
  document.querySelector("#player").emit('lookUp');
}


function formToLink() {
  var checkboxes = document.getElementsByClassName('form-check-input');
  var customLink = window.location.href;
  var selectedBoxes = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedBoxes+=checkboxes[i].value;
      }
    }
    document.getElementById("linkArea").innerHTML = customLink + "?tour=" + selectedBoxes;
}

function createSelections(type, selected) {
  var formHTML = '<div class="col-lg-6 text-center"><h1>';
  if (type == 'done'){
    var customLink = window.location.href;
    var checkboxes = document.getElementsByClassName('form-check-input');
    var selectedBoxes = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedBoxes+=checkboxes[i].value;
      }
    }
    document.getElementById("linkArea").innerHTML = customLink + "?start=" + selected + "&tour=" + selectedBoxes;
    return;
  } else if (type == "radio") {
    formHTML = 'Select Starting Position</h1></div>'
  } else if (type == "checkbox") {
    formHTML = 'Select what positions will be part of the Tour</h1></div>'
  } else {
    alert("Inccorect Type Entered");
  }
  // This determins the order that the areas show up for selection
  var areaGroups = {"outside": [], "childrens": [], "uc": [], "cyclotron": [], "cbdi2F": [], "main1F": [], "main4F": []};
  var jsonData = getData();
  for (var key in jsonData) {
    areaGroups[jsonData[key]["area"]].push(key);
  }
  var areaNum = 0;
  var cbNum = 0;
  for (var area in areaGroups) {
    if (areaNum % 2 == 0) {
      formHTML+='<div class="row">';  // Area row
    }
    formHTML = formHTML + '<div class="col-lg-6"><h1> ' + area + ' </h1>';  // lg-6 Row
    // Goes through all of the locations in an area and creates a checkbox for each one
    for (var i = 0; i < areaGroups[area].length; i++) {
      if (cbNum % 2 == 0) {
        formHTML+='<div class="row">';  // Checkbox row
      }
      // Adds Bootstrap checkbox divs for each spot and fills in the name and id for each one
      formHTML = formHTML + '<div class="col-sm-6"><div class="form-check form-check-inline"><label class="form-check-label"><input class="form-check-input" type="' + type + '" name="spots" id="cb';
      var spot = areaGroups[area][i];
      formHTML = formHTML + cbNum + '" value="' + jsonData[spot]["id"] + '">' + jsonData[spot]["name"] + '</label></div></div>';
      if (cbNum % 2 == 1) {
        formHTML+='</div>';  // Closes checkbox row
      }
      //alert("Area: " + area + " Spot: " + spot + " I: " + i + " cbNum: " + cbNum + " areaNum: " + areaNum);
      cbNum++;
    }
    if (cbNum % 2 == 1) {
      formHTML+='</div>';  // Closes checkbox row if only one checkbox in last row
    }
    cbNum = 0;
    formHTML+='</div>';  // Closes lg-6 row
    if (areaNum % 2 == 1) {
      formHTML+='</div>';  // Closes area row
    }
    areaNum++;
  }
  if (areaNum % 2 == 1) {
    formHTML+='</div>';  // Closes area row if only one checkbox in last row
  }

  // Find start position from radio buttons
  var checkboxes = document.getElementsByClassName('form-check-input');
  var selectedBoxes = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedBoxes+=checkboxes[i].value;
      }
    }

  if (type == "radio") {
    formHTML = formHTML + '<div class="col-lg-12 text-center"><button type="button" class="btn btn-info" onClick="createSelections(\'checkbox\')">Submit</button></div>';
  } else if (type == "checkbox") {
    formHTML = formHTML + '<div class="col-lg-12 text-center"><button type="button" class="btn btn-info" onClick="createSelections(\'done\', \'' + selectedBoxes + '\')">Create Link</button></div>';
  }
  document.getElementById("cbForm").innerHTML = formHTML;
}