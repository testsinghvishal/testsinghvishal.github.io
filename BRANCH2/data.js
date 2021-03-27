var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-courtyard",
      "name": "Front Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0175206365340443,
          "pitch": 0.1436411268571529,
          "rotation": 0,
          "target": "3-reception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-office-cabin",
      "name": "Office Cabin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0704865372170147,
          "pitch": 0.04795513016542152,
          "rotation": 0,
          "target": "0-front-courtyard"
        },
        {
          "yaw": -1.567415495966305,
          "pitch": 0.12674284446903883,
          "rotation": 0,
          "target": "3-reception-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.050541006810679,
          "pitch": 0.5627085672277019,
          "title": "Office Desk",
          "text": "Pedestal"
        }
      ]
    },
    {
      "id": "2-conference-room",
      "name": "Conference Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.42172101933313755,
          "pitch": 0.09335687167689066,
          "rotation": 0,
          "target": "0-front-courtyard"
        },
        {
          "yaw": -1.0765875294303164,
          "pitch": 0.17297745204185233,
          "rotation": 0,
          "target": "3-reception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-reception-hall",
      "name": "Reception Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.48866260093234004,
          "pitch": 0.08328825531035022,
          "rotation": 0,
          "target": "0-front-courtyard"
        },
        {
          "yaw": 1.6931559985701563,
          "pitch": 0.13925351473249492,
          "rotation": 0,
          "target": "1-office-cabin"
        },
        {
          "yaw": 2.694075653401873,
          "pitch": 0.11844617282780945,
          "rotation": 0,
          "target": "2-conference-room"
        },
        {
          "yaw": -3.0869047516228036,
          "pitch": 0.10224723790197032,
          "rotation": 0,
          "target": "4-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8042877152107746,
          "pitch": 0.1841085677866907,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": 1.9397976848738585,
          "pitch": 0.17429315226073072,
          "rotation": 0,
          "target": "6-bedroom-ff"
        },
        {
          "yaw": 2.2557454999448767,
          "pitch": 0.09152012068200932,
          "rotation": 0,
          "target": "7-guest-room"
        },
        {
          "yaw": 2.623803710830778,
          "pitch": 0.16069270518363687,
          "rotation": 0,
          "target": "8-bathroom"
        },
        {
          "yaw": 3.019965370557636,
          "pitch": 0.08936475232309782,
          "rotation": 0,
          "target": "11-prayer-hall"
        },
        {
          "yaw": -2.619666349549778,
          "pitch": 0.6840810303039255,
          "rotation": 0,
          "target": "3-reception-hall"
        },
        {
          "yaw": -0.41330801872402567,
          "pitch": 0.15856904660223847,
          "rotation": 0,
          "target": "9-balcony-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1941323169577416,
          "pitch": 0.3781819758592242,
          "rotation": 0,
          "target": "4-living-room"
        },
        {
          "yaw": 1.5610589092999376,
          "pitch": 0.12327943521705897,
          "rotation": 0,
          "target": "9-balcony-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-ff",
      "name": "Bedroom FF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6492707266296982,
          "pitch": 0.18842614328688612,
          "rotation": 0,
          "target": "4-living-room"
        },
        {
          "yaw": -1.3847787437162076,
          "pitch": 0.20719336222378537,
          "rotation": 0,
          "target": "10-washing-area-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-guest-room",
      "name": "Guest Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5226439836192975,
          "pitch": 0.2506505763349658,
          "rotation": 0,
          "target": "10-washing-area-ff"
        },
        {
          "yaw": 0.850795712212097,
          "pitch": 0.22730377309320815,
          "rotation": 0,
          "target": "4-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1445045588609535,
          "pitch": 0.26931678760977995,
          "rotation": 0,
          "target": "4-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balcony-ff",
      "name": "Balcony FF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.34163400524690957,
          "pitch": 0.22557718540384286,
          "rotation": 0,
          "target": "4-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-washing-area-ff",
      "name": "Washing Area FF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9292831506802237,
          "pitch": 0.3927987685364531,
          "rotation": 0,
          "target": "6-bedroom-ff"
        },
        {
          "yaw": -1.7664161064153774,
          "pitch": 0.41784242725080034,
          "rotation": 0,
          "target": "7-guest-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-prayer-hall",
      "name": "Prayer Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7511675897139511,
          "pitch": 0.16611920118786472,
          "rotation": 0,
          "target": "14-bedroom-2---sf"
        },
        {
          "yaw": 0.3502155544162573,
          "pitch": 0.21674019102184516,
          "rotation": 0,
          "target": "15-bedroom-3---sf"
        },
        {
          "yaw": -2.127564809825362,
          "pitch": 0.27392909732432713,
          "rotation": 0,
          "target": "12-balcony-sf"
        },
        {
          "yaw": -2.7697548641320893,
          "pitch": 0.4234363249289572,
          "rotation": 0,
          "target": "13-bedroom-1---sf"
        },
        {
          "yaw": 1.2114391359468222,
          "pitch": 0.15841054721080283,
          "rotation": 0,
          "target": "17-terrace"
        },
        {
          "yaw": 1.856945240708737,
          "pitch": 0.5012517338883686,
          "rotation": 0,
          "target": "4-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-balcony-sf",
      "name": "Balcony SF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07980677390361635,
          "pitch": 0.26220956294234554,
          "rotation": 0,
          "target": "13-bedroom-1---sf"
        },
        {
          "yaw": -1.0961331578136466,
          "pitch": 0.13668349005379632,
          "rotation": 0,
          "target": "11-prayer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-1---sf",
      "name": "Bedroom 1 - SF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.162587132357471,
          "pitch": 0.2845175963080404,
          "rotation": 0,
          "target": "12-balcony-sf"
        },
        {
          "yaw": 0.6062239627249291,
          "pitch": 0.3106828193023752,
          "rotation": 0,
          "target": "11-prayer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-2---sf",
      "name": "Bedroom 2 - SF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8738427743214636,
          "pitch": 0.17910203212613318,
          "rotation": 0,
          "target": "11-prayer-hall"
        },
        {
          "yaw": 1.0415226690561443,
          "pitch": 0.184490247956429,
          "rotation": 0,
          "target": "16-washing-area-sf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-3---sf",
      "name": "Bedroom 3 - SF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.115450243882348,
          "pitch": 0.08537811862326805,
          "rotation": 0,
          "target": "11-prayer-hall"
        },
        {
          "yaw": 2.1806058224433427,
          "pitch": 0.08021036649717139,
          "rotation": 0,
          "target": "16-washing-area-sf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-washing-area-sf",
      "name": "Washing Area SF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7839067782504188,
          "pitch": 0.33152901066821805,
          "rotation": 0,
          "target": "14-bedroom-2---sf"
        },
        {
          "yaw": -0.9393563387166992,
          "pitch": 0.3024405178849854,
          "rotation": 0,
          "target": "15-bedroom-3---sf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05540967299156918,
          "pitch": 0.24607428707484225,
          "rotation": 0,
          "target": "18-terrace-lounge"
        },
        {
          "yaw": -2.122533463550262,
          "pitch": 0.10618616716430296,
          "rotation": 0,
          "target": "19-terrace-pool"
        },
        {
          "yaw": -0.2774371507936113,
          "pitch": 0.13548782571693962,
          "rotation": 0,
          "target": "11-prayer-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-terrace-lounge",
      "name": "Terrace Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3219731433433033,
          "pitch": 0.2953669535865622,
          "rotation": 0,
          "target": "17-terrace"
        },
        {
          "yaw": 0.33788364928871495,
          "pitch": 0.17571592447022333,
          "rotation": 0,
          "target": "11-prayer-hall"
        },
        {
          "yaw": -0.05447366143627441,
          "pitch": 0.07989834148136765,
          "rotation": 0,
          "target": "19-terrace-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-terrace-pool",
      "name": "Terrace Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9349367372430066,
          "pitch": 0.32802005598568584,
          "rotation": 0,
          "target": "17-terrace"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "House Virtual Tour | K-Arc Square",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
