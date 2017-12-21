/* change-spheres AFRAME Component */

/**
 * 
 * ----- OLD -----
 * 
 * This component sets up an event listener for every sphere that manages
 * hiding the spheres and repositioning them.  Currently it has a lot of hard
 * coded information in it like the position coordinates that I plan on moving
 * to a json file.
 */

AFRAME.registerComponent('change-spheres', {
  schema: {
    on: {type: 'string'},
    scn: {type: 'string'},
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    var hideVector = {x: 0, y: -200, z: 0};
    /*
    'startBlock', 'outside_cdbiDoors', 'outside_flag', 'outside_g_catStatue', 'outside_g_chess', 'outside_g_end', 
                      'outside_g_entrance', 'outside_g_fork', 'outside_g_grass', 'outside_g_greenStatue', 'outside_g_ironStatue',
                      'outside_g_redStatue', 'outside_mainEntrance', 'outside_sidewalk', 'CBDI_1F_CampusInfo', 
                      'CBDI_1F_Desk2', 'CBDI_1F_Desk', 'CBDI_1F_Dome', 'CBDI_1F_Elevators', 'CBDI_1F_Gates', 
                      'CBDI_1F_Lobby1', 'CBDI_1F_Lobby2', 'CBDI_1F_Open', 'CBDI_1F_Stairs', 
                      */
   var sphereList = ['startBlock', 'CBDI_Cyclotron_ControlEnterance', 'CBDI_Cyclotron_ControlRoom', 'CBDI_Cyclotron_Corner', 'CBDI_Cyclotron_Doors', 
                      'CBDI_Cyclotron_End', 'CBDI_Cyclotron_FirstDoor', 'CBDI_Cyclotron_Hallway1', 'CBDI_Cyclotron_Hallway2', 
                      'CBDI_Cyclotron_Hallway3', 'CBDI_Cyclotron_HallwayEnd', 'CBDI_Cyclotron_HallwayStart', 'CBDI_Cyclotron', 
                      'CBDI_Cyclotron_Middle', 'CBDI_Cyclotron_OppositeSide', 'CBDI_Cyclotron_Pump', 'CBDI_Cyclotron_SecondDoor', 
                      'CBDI_Cyclotron_StairsBottem', 'CBDI_Cyclotron_StairsTop', 'CBDI_Gantry_ChildrensBack', 'CBDI_Gantry_ChildrensBehind', 
                      'CBDI_Gantry_ChildrensControls', 'CBDI_Gantry_ChildrensEnterance', 'CBDI_Gantry_ChildrensHallway', 'CBDI_Gantry_Childrens', 
                      'CBDI_Gantry_ChildrensVeryBack', 'CBDI_Gantry_EmptyBack', 'CBDI_Gantry_EmptyHallway', 'CBDI_Gantry_Empty', 'CBDI_Gantry_UCBack', 
                      'CBDI_Gantry_UCBehind', 'CBDI_Gantry_UCEnterance', 'CBDI_Gantry_UCHallway', 'CBDI_Gantry_UC'];
    /**
     * Need to create a hide all function that properly works in event
     * listeners to replace for loop.
     */
    switch (data.scn) {
      case 'outside_cdbiDoors':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {
            document.querySelector('#' + sphere).setAttribute('position', hideVector);
          }, this);
          document.querySelector("#outside_g_entrance").setAttribute('position', {x: -62, y: -2, z: 79});
          document.querySelector("#outside_mainEntrance").setAttribute('position', {x: -85, y: 0, z: -53});
          document.querySelector("#outside_flag").setAttribute('position', {x: (-97/2), y: -4, z: (-24/2)});
          document.querySelector("#outside_sidewalk").setAttribute('position', {x: (-2/2), y: -4, z: (98/2)});
          document.querySelector("#CBDI_1F_Gates").setAttribute('position', {x: (99/2), y: -4, z: (14/2)});
        });
        break;
      
      case 'outside_flag':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {
            document.querySelector('#' + sphere).setAttribute('position', hideVector);
          }, this);
          document.querySelector("#outside_g_entrance").setAttribute('position', {x: -32, y: 0, z: 95});
          document.querySelector("#outside_mainEntrance").setAttribute('position', {x: -85, y: 0, z: -53});
          document.querySelector("#outside_cdbiDoors").setAttribute('position', {x: 98, y: 0, z: 18});
        });
        break;
      
      case 'outside_g_catStatue':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_end").setAttribute('position', {x: (-85/4), y: -10, z: (53/4)});
        });
        break;
        
      case 'outside_g_chess':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_fork").setAttribute('position', {x: (-30/2), y: -8, z: (-95/2)});
          document.querySelector("#outside_g_end").setAttribute('position', {x: (-2/2), y: -8, z: (100/2)});
        });
        break;
  
      case 'outside_g_end':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_chess").setAttribute('position', {x: (-2/2), y: -4, z: (-100/2)});
          document.querySelector("#outside_g_ironStatue").setAttribute('position', {x: 34, y:-2, z: -94});
          document.querySelector("#outside_g_catStatue").setAttribute('position', {x: (73/4), y: -8, z: (68/4)});
          document.querySelector("#outside_g_greenStatue").setAttribute('position', {x: (-78/4), y: -8, z: (62/4)});
        });
        break;
  
      case 'outside_g_entrance':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_mainEntrance").setAttribute('position', {x: -34, y: 0, z: -94});
          document.querySelector("#outside_cdbiDoors").setAttribute('position', {x: 76, y: 0, z: -65});
          document.querySelector("#outside_sidewalk").setAttribute('position', {x: (96/2), y: -2, z: (-28/2)});
          document.querySelector("#outside_g_grass").setAttribute('position', {x: (-54/4), y: -6, z: (84/4)});
          document.querySelector("#outside_g_flag").setAttribute('position', {x: 33, y: -6, z: -95});
        });
        break;
  
      case 'outside_g_fork':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_redStatue").setAttribute('position', {x: (73/2), y: -8, z: (-68/2)});
          document.querySelector("#outside_g_chess").setAttribute('position', {x: (49/2), y: -8, z: (87/2)});          
        });
        break;
      
      case 'outside_g_grass':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_entrance").setAttribute('position', {x: (69/4), y: -6, z: (-73/4)});
          document.querySelector("#outside_g_ironStatue").setAttribute('position', {x: 10, y: -3, z: 99});
          document.querySelector("#outside_g_redStatue").setAttribute('position', {x: -31, y: -3, z: 95});
        });
        break;
  
      case 'outside_g_greenStatue':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_end").setAttribute('position', {x: (66/4), y: -10, z: (-75/4)});
        });
        break;
  
      case 'outside_g_ironStatue':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_redStatue").setAttribute('position', {x: (-99/2), y: -8, z: (12/2)});
          document.querySelector("#outside_g_end").setAttribute('position', {x: -15, y: -2, z: 99});
          document.querySelector("#outside_g_grass").setAttribute('position', {x: -34, y: -8, z: -94});
        });
        break;
  
      case 'outside_g_redStatue':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_g_ironStatue").setAttribute('position', {x: (99/2), y: -8, z: (-14/2)});
          document.querySelector("#outside_g_fork").setAttribute('position', {x: (-62/2), y: -8, z: (78/2)});
          document.querySelector("#outside_g_grass").setAttribute('position', {x: -7, y: -4, z: -100});
        });
        break;
  
      case 'outside_mainEntrance':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_flag").setAttribute('position', {x: 83, y: 4, z: 56});
          document.querySelector("#outside_g_entrance").setAttribute('position', {x: 32, y: 6, z: 95});
        });
        break;
  
      case 'outside_sidewalk':
        el.addEventListener(data.on, function () {
          sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_cdbiDoors").setAttribute('position', {x: 21, y: 0, z: -98});
          document.querySelector("#outside_g_entrance").setAttribute('position', {x: -75, y: 0, z: 66});
          document.querySelector("#outside_flag").setAttribute('position', {x: -59, y: 0, z: -81});
        });
        break;
      
      // ----- CBDI 1st Floor -----

      case 'CBDI_1F_CampusInfo':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Open").setAttribute('position', {x: -99, y: 0, z: -13});
          document.querySelector("#CBDI_1F_Stairs").setAttribute('position', {x: 8, y: 0, z: -100});
          document.querySelector("#CBDI_1F_Elevators").setAttribute('position', {x: 73, y: 0, z: -68});
        });
        break;

      case 'CBDI_1F_Desk2':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Desk").setAttribute('position', {x: 5, y: 0, z: -100});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: -99, y: 0, z: -12});
          document.querySelector("#CBDI_1F_Dome").setAttribute('position', {x: -12, y: 0, z: 99});
        });
        break;

      case 'CBDI_1F_Desk':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Desk2").setAttribute('position', {x: -1, y: 0, z: 100});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: -87, y: 0, z: 49});
          document.querySelector("#CBDI_1F_Open").setAttribute('position', {x: 46, y: 0, z: -89});
        });
        break;

      case 'CBDI_1F_Dome':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Desk2").setAttribute('position', {x: 0, y: 0, z: -100});
        });
        break;

      case 'CBDI_1F_Elevators':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Stairs").setAttribute('position', {x: -100, y: 0, z: 2});
          document.querySelector("#CBDI_1F_CampusInfo").setAttribute('position', {x: -71, y: 0, z: 71});
        });
        break;

      case 'CBDI_1F_Gates':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#outside_cdbiDoors").setAttribute('position', {x: -93, y: 0, z: -37});
          document.querySelector("#CBDI_1F_Open").setAttribute('position', {x: -2, y: 0, z: 100});
        });
        break;


      case 'CBDI_1F_Lobby1':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Desk2").setAttribute('position', {x: 99, y: 0, z: -11});
          document.querySelector("#CBDI_1F_Lobby2").setAttribute('position', {x: -30, y: 0, z: 95});
        });
        break;


      case 'CBDI_1F_Lobby2':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_1F_Open':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Gates").setAttribute('position', {x: -4, y: 0, z: -100});
          document.querySelector("#CBDI_1F_Desk").setAttribute('position', {x: -62, y: 0, z: 78});
          document.querySelector("#CBDI_1F_CampusInfo").setAttribute('position', {x: 100, y: 0, z: 6});
        });
        break;

      case 'CBDI_1F_Stairs':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_CampusInfo").setAttribute('position', {x: 2, y: 0, z: 100});
          document.querySelector("#CBDI_1F_Elevators").setAttribute('position', {x: -97, y: 0, z: -25});
        });
        break;

    


      case 'CBDI_2F_Circles':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_Desk1':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_Desk2':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_Elevators':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_HallMid':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_KitchenHall':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_Kitchen':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_NS1':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_NS2':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_RoomBed':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_RoomChair':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_2F_Stairs':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;


    // ----- Main Building 1st Floor -----


      case 'Main_1F_Desk':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'Main_1F_Eleveators':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'Main_1F_Gates':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'Main_1F_Lobby':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_ControlEnterance':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          //document.querySelector("#Hall8").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_Cyclotron_ControlRoom").setAttribute('position', {x: -97, y: 0, z: 23});
          document.querySelector("#CBDI_Cyclotron_Doors").setAttribute('position', {x: 23, y: 0, z: 97});
        });
        break;

      case 'CBDI_Cyclotron_ControlRoom':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_Cyclotron_ControlEnterance").setAttribute('position', {x: 82, y: 0, z: -57});
        });
        break;

      case 'CBDI_Cyclotron_Corner':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_Doors':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_End':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_FirstDoor':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_Hallway1':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_Hallway2':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_Hallway3':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_HallwayEnd':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_HallwayStart':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_Middle':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_OppositeSide':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_Pump':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_Cyclotron_StairsTop").setAttribute('position', {x: 42, y: 0, z: -91});
        });
        break;

      case 'CBDI_Cyclotron_SecondDoor':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Cyclotron_StairsBottem':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_Cyclotron_StairsTop").setAttribute('position', {x: 32, y: 0, z: -95});
          document.querySelector("#CBDI_Cyclotron").setAttribute('position', {x: -22, y: 4, z: 98});
        });
        break;

      case 'CBDI_Cyclotron_StairsTop':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_Cyclotron_StairsBottem").setAttribute('position', {x: -94, y: -4, z: 34});
          document.querySelector("#CBDI_Cyclotron_Pump").setAttribute('position', {x: -23, y: 0, z: 97});
        });
        break;

      case 'CBDI_Gantry_ChildrensBack':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_ChildrensBehind':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_ChildrensControls':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_ChildrensEnterance':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_ChildrensHallway':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_Childrens':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_ChildrensVeryBack':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_EmptyBack':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_EmptyHallway':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_Empty':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_UCBack':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_UCBehind':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_UCEnterance':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_UCHallway':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;

      case 'CBDI_Gantry_UC':
        el.addEventListener(data.on, function () {
           sphereList.forEach(function(sphere) {             
            document.querySelector('#' + sphere).setAttribute('position', hideVector);           
          }, this);
          document.querySelector("#CBDI_1F_Lobby1").setAttribute('position', {x: 35, y: 0, z: -94});
        });
        break;




      default:
        alert('Switch statement failed on: ' + data.scn)
        break;
    }
  },
});