var data = eval({

// --------------------- Outside ---------------------

"outside_cdbiDoors": {
    "area": "outside",
    "connections": {
      "outside_g_entrance": { "x": -62, "y": -2, "z": 79},
      "outside_mainEntrance": { "x": -85, "y": 0, "z": -53},
      "outside_flag": { "x": -48.5, "y": -4, "z": -12},
      "outside_sidewalk": { "x": -1, "y": -4, "z": 48},
      "CBDI_1F_Gates": { "x": 49.5, "y": -4, "z": 7},
    },
    "extra": 0,
  },

    "outside_flag": {
    "area": "outside",
    "connections": {
      "outside_g_entrance": { "x": -32, "y": 0, "z": 95},
      "outside_mainEntrance": { "x": -85, "y": 0, "z": -53},
      "outside_cdbiDoors": { "x": 98, "y": 0, "z": 18},
    },
    "extra": 0,
  },

  "outside_chess": {
    "area": "outside",
    "connections": {
      "outside_g_fork": { "x": -15, "y": -8, "z": -47.5},
      "outside_g_end": { "x": -1, "y": -8, "z": 50},
    },
    "extra": 0,
  },

  "outside_g_catStatue": {
    "area": "outside",
    "connections": {
      "outside_g_end": { "x": -21.25, "y": -10, "z": 13.25},
    },
    "extra": 0,
  },

  "outside_g_end": {
    "area": "outside",
    "connections": {
      "outside_g_chess": { "x": -1, "y": -4, "z": -50},
      "outside_g_ironStatue": { "x": 34, "y":-2, "z": -94},
      "outside_g_catStatue": { "x": 18.25, "y": -8, "z": 17},
      "outside_g_greenStatue": { "x": -19.5, "y": -8, "z": 15.5},
    },
    "extra": 0,
  },

  "outside_g_entrance": {
    "area": "outside",
    "connections": {
      "outside_mainEntrance": { "x": -34, "y": 0, "z": -94},
      "outside_cdbiDoors": { "x": 76, "y": 0, "z": -65},
      "outside_sidewalk": { "x": 48, "y": -2, "z": -14},
      "outside_g_grass": { "x": -13.5, "y": -6, "z": 21},
      "outside_g_flag": { "x": 33, "y": -6, "z": -95},
    },
    "extra": 0,
  },

  "outside_g_fork": {
    "area": "outside",
    "connections": {
      "outside_g_redStatue": { "x": 36.5, "y": -8, "z": -34},
      "outside_g_chess": { "x": 24.5, "y": -8, "z": 43.5},
    },
    "extra": 0,
  },

  "outside_g_grass": {
    "area": "outside",
    "connections": {
      "outside_g_entrance": { "x": 17.25, "y": -6, "z": -18.25},
      "outside_g_ironStatue": { "x": 10, "y": -3, "z": 99},
      "outside_g_redStatue": { "x": -31, "y": -3, "z": 95},
    },
    "extra": 0,
  },

  "outside_g_greenStatue": {
    "area": "outside",
    "connections": {
      "outside_g_end": { "x": 16.5, "y": -10, "z": -18.75},
    },
    "extra": 0,
  },

  "outside_g_ironStatue": {
    "area": "outside",
    "connections": {
      "outside_g_redStatue": { "x": -49.5, "y": -8, "z": 6},
      "outside_g_end": { "x": -15, "y": -2, "z": 99},
      "outside_g_grass": { "x": -34, "y": -8, "z": -94},
    },
    "extra": 0,
  },

  "outside_g_redStatue": {
    "area": "outside",
    "connections": {
      "outside_g_ironStatue": { "x": 49.5, "y": -8, "z": -7},
      "outside_g_fork": { "x": -31, "y": -8, "z": 39},
      "outside_g_grass": { "x": -7, "y": -4, "z": -100},
    },
    "extra": 0,
  },

  "outside_mainEntrance": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "outside_sidewalk": {
    "area": "outside",
    "connections": {
      "outside_cdbiDoors": { "x": 21, "y": 0, "z": -98},
      "outside_g_entrance": { "x": -75, "y": 0, "z": 66},
      "outside_flag": { "x": -59, "y": 0, "z": -81},
    },
    "extra": 0,
  },

// --------------------- CBDI 1st Floor ---------------------


  "CBDI_1F_CampusInfo": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Open": { "x": -99, "y": 0, "z": -13},
      "CBDI_1F_Stairs": { "x": 8, "y": 0, "z": -100},
      "CBDI_1F_Elevators": { "x": 73, "y": 0, "z": -68},
    },
    "extra": 0,
  },

  "CBDI_1F_Desk": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Desk2": { "x": -1, "y": 0, "z": 100},
      "CBDI_1F_Lobby1": { "x": -87, "y": 0, "z": 49},
      "CBDI_1F_Open": { "x": 46, "y": 0, "z": -89},
    },
    "extra": 0,
  },

  "CBDI_1F_Desk2": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Desk": { "x": 5, "y": 0, "z": -100},
      "CBDI_1F_Lobby1": { "x": -99, "y": 0, "z": -12},
      "CBDI_1F_Dome": { "x": -12, "y": 0, "z": 99},
    },
    "extra": 0,
  },

  "CBDI_1F_Dome": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Desk2": { "x": 0, "y": 0, "z": -100}
    },
    "extra": 0,
  },

  "CBDI_1F_Elevators": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Stairs": { "x": -100, "y": 0, "z": 2},
      "CBDI_1F_CampusInfo": { "x": -71, "y": 0, "z": 71},
    },
    "extra": 0,
  },

  "CBDI_1F_Gates": {
    "area": "outside",
    "connections": {
      "outside_cdbiDoors": { "x": -93, "y": 0, "z": -37},
      "CBDI_1F_Open": { "x": -2, "y": 0, "z": 100},
    },
    "extra": 0,
  },

  "CBDI_1F_FamilyCenter": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Desk2": { "x": 99, "y": 0, "z": -11},
      "CBDI_1F_Lobby2": { "x": -30, "y": 0, "z": 95},
    },
    "extra": 0,
  },

  "CBDI_1F_FamilyCenter2": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Lobby1": { "x": 35, "y": 0, "z": -94},
    },
    "extra": 0,
  },

  "CBDI_1F_Open": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Gates": { "x": -4, "y": 0, "z": -100},
      "CBDI_1F_Desk": { "x": -62, "y": 0, "z": 78},
      "CBDI_1F_CampusInfo": { "x": 100, "y": 0, "z": 6},
    },
    "extra": 0,
  },

  "CBDI_1F_Stairs": {
    "area": "outside",
    "connections": {
      "CBDI_1F_CampusInfo": { "x": 2, "y": 0, "z": 100},
      "CBDI_1F_Elevators": { "x": -97, "y": 0, "z": -25},
    },
    "extra": 0,
  },

// --------------------- CBDI 2st Floor ---------------------


  "CBDI_2F_Circles": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_Desk1": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_Desk2": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_Elevators": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_HallMid": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_KitchenHall": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_Kitchen": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_NS1": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_NS2": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Hall1": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Hall2": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Hall3": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Hall4": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Hall5": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Hall6": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Kitchen": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_HallLadder": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Lobby2": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_LobbyEntryIntoHall": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Lobby": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_LobbyTreeClose": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_LobbyTreeFar": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Machinefar": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Room1": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_PTC_Room2": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_RoomBed": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_RoomChair": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "CBDI_2F_Stairs": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

// --------------------- Libert"y" Main Building 1th Floor ---------------------


  "Main_1F_Desk": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_1F_Eleveators": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_1F_Gates": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_1F_Lobby": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  // --------------------- Libert"y" Main Building 4th Floor ---------------------


  "Main_4F_Room10Hallway": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_BreakRoomHallway": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_ElevatorLobby": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_Elevators": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_NurseStation": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_PlayRoom": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_Room06Hallway": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_Room10": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_SpaceStation": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_StarDomeHallway": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_StarDome": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },

  "Main_4F_WaitingArea": {
    "area": "outside",
    "connections": {
      
    },
    "extra": 0,
  },
})


/*

  "outside_flag": {
    "area": "outside",
    "connections": {
      "CBDI_1F_Desk": { "x": 5, "y": 0, "z": -100},
      "CBDI_1F_Desk": { "x": 5, "y": 0, "z": -100},
    },
    "extra": 0,
  },
  */