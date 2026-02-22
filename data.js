const levels = [
  { "name": "Crimson Planet" },
  { "name": "Cosmic Cyclone" },
  { "name": "Lucid Nightmares" },
  { "name": "Cognition" },
  { "name": "Bloodlust" },
  { "name": "Wasureta" },
  { "name": "Cersia Difficult" },
  { "name": "Shitty Silent Helheim" },
  { "name": "Aquatic Auroras" },
  { "name": "Arctic Lights" },
  { "name": "AMIP HA C B O (106544235)" },
  { "name": "Yatagarasu" },
  { "name": "Layout dlya myjikov" },
  { "name": "Shitty CBO (101456002)" },
  { "name": "Sonic Wave Rebirth" },
  { "name": "Sonic Wave" },
  { "name": "Erebus" },
  { "name": "Yo Ass Skrrt" },
  { "name": "Mind Control" },
  { "name": "Begin" },
  { "name": "Ya Russki" },
  { "name": "shitty silent imposibl gromitb" },
  { "name": "Molten Core" },
  { "name": "Ouroboros Startpos 2" },
  { "name": "Auditory Breaker" },
  { "name": "Blade of Justice" },
  { "name": "Athanatos" },
  { "name": "Infernal Abyss" },
  { "name": "Carcano" },
  { "name": "Hyper Paradox" },
  { "name": "Femboy Fantasy" },
  { "name": "Amir Proshel Kocmik" },
  { "name": "phonk town🤮" },
  { "name": "Shukufuku" },
  { "name": "ErebuS" },
  { "name": "BloodBath" },
  { "name": "moment" },
  { "name": "Betelgeuse" },
  { "name": "Viridian" },
  { "name": "Sakupen Hell" },
  { "name": "Betrayal of Fate" },
  { "name": "Reverence" },
  { "name": "Plasma Pulse III" },
  { "name": "Shitty Acheron (89774876)" },
  { "name": "SUBVERSIVE" },
  { "name": "surveillant" },
  { "name": "Aftermath" },
  { "name": "Retention" },
  { "name": "ILOVECYAN" },
  { "name": "Sigma Interface" },
  { "name": "HASTE" },
  { "name": "La Llorona" },
  { "name": "Another Phase" },
  { "name": "The Ultimate Phase" },
  { "name": "HyperSonic" },
  { "name": "Crowd Control" },
  { "name": "DETERMINATION PULSE (118502397)" },
  { "name": "Proteus" },
  { "name": "Disruption" },
  { "name": "Allegiance" },
  { "name": "Churka Circles (87013239)" },
  { "name": "Forbidden Isle" },
  { "name": "Curcuit Breaker" },
  { "name": "Yuka" },
  { "name": "Hell Machine" },
  { "name": "Hell Machine old" },
  { "name": "Insaction" },
  { "name": "Sweater Weather" },
  { "name": "Niwa" },
  { "name": "ACU" },
  { "name": "Precipitance" },
  { "name": "DoraDura" },
  { "name": "Azurite" },
  { "name": "Cat Planet" },
  { "name": "Cataclysm" },
  { "name": "JeonGi" },
  { "name": "Komodo" },
  { "name": "Thanatophobia" },
  { "name": "Infinite Circles v2" },
  { "name": "Plasma Pulse x2" },
  { "name": "Gunslinga Corridor" },
  { "name": "Ice Carbon Diablo X" },
  { "name": "Spectral Tentation" },
  { "name": "My Song" },
  { "name": "Ablaze" },
  { "name": "Crimson Clutter" },
  { "name": "Clubstep Nightmares" },
  { "name": "Blurred Face" },
  { "name": "POTROGAL GAZON" },
  { "name": "Unnerfed Larga Espera" },
  { "name": "Quest For Perfection" },
  { "name": "8o" },
  { "name": "Leyak" },
  { "name": "The Janus Miracles" },
  { "name": "The Secret Box" },
  { "name": "El Dorado" },
  { "name": "Acropolis" },
  { "name": "Flat Major" },
  { "name": "Night Terrors" },
  { "name": "Cursed Mansion" },
  { "name": "Magma Bound" },
  { "name": "Firewall" },
  { "name": "Supersonic" },
  { "name": "Terraphobia" },
  { "name": "Psychosis" },
  { "name": "Slaughterhouse" },
  { "name": "Plasma Pulse" },
  { "name": "Pyromaniac" },
  { "name": "CraZy II" },
  { "name": "Windy Landscape" },
  { "name": "Sharp Minor" },
  { "name": "Fingerdash v4" },
  { "name": "Forest Temple" },
  { "name": "Poltergeist" },
  { "name": "Classic" }
];

const players = [
  {
    "name": "Амир Пирбудагов",
    "verified": [
      "Crimson Planet", "Cosmic Cyclone", "Lucid Nightmares", "Cognition", "Bloodlust", 
      "Cersia Difficult", "Aquatic Auroras", "Arctic Lights", "Yatagarasu", 
      "Sonic Wave Rebirth", "Sonic Wave", "Erebus", "Auditory Breaker", "ErebuS", 
      "Sakupen Hell", "SUBVERSIVE", "Aftermath", "The Ultimate Phase", 
      "DETERMINATION PULSE (118502397)", "Proteus", "Allegiance", "Forbidden Isle", 
      "Insaction", "DoraDura", "Azurite", "Cat Planet", "Infinite Circles v2", 
      "Plasma Pulse x2", "Gunslinga Corridor", "Spectral Tentation", "My Song", 
      "Ablaze", "Quest For Perfection", "Leyak", "Supersonic", "Plasma Pulse", 
      "Pyromaniac"
    ],
    "completed": [
      "Infernal Abyss", "Carcano", "Hyper Paradox", "BloodBath", "HyperSonic", 
      "Disruption", "Churka Circles (87013239)", "ACU", "Cataclysm", "JeonGi", 
      "Thanatophobia", "POTROGAL GAZON", "Acropolis", "Windy Landscape", "Sharp Minor", 
      "Poltergeist"
    ]
  },
  {
    "name": "GMDXyilopan",
    "verified": [
      "Shitty Silent Helheim", "AMIP HA C B O (106544235)", "Layout dlya myjikov", 
      "Shitty CBO (101456002)", "Ya Russki", "shitty silent imposibl gromitb", 
      "Molten Core", "Hyper Paradox", "Femboy Fantasy", "Amir Proshel Kocmik", 
      "phonk town🤮", "Betelgeuse", "Viridian", "Reverence", "Shitty Acheron (89774876)", 
      "surveillant", "Disruption", "Churka Circles (87013239)", "Blurred Face", "Terraphobia", 
      "Sharp Minor", "Poltergeist"
    ],
    "completed": [
      "Mind Control", "Carcano", "Curcuit Breaker", "Yuka"
    ]
  },
  {
    "name": "Inidevy",
    "verified": [
      "Athanatos", "moment", "Plasma Pulse III", "Retention", "Sigma Interface", 
      "Another Phase", "HyperSonic", "Precipitance", "Sweater Weather", "Niwa"
    ],
    "completed": [
      "Blade of Justice", "BloodBath", "Crowd Control", "Allegiance", "Azurite", 
      "ACU", "Cataclysm"
    ]
  },
  {
    "name": "TheRealSter3o",
    "verified": [
      "Wasureta", "Begin", "Ouroboros Startpos 2", "Shukufuku", "ILOVECYAN", 
      "HASTE", "Hell Machine", "Hell Machine old", "JeonGi", "Komodo", 
      "Unnerfed Larga Espera"
    ],
    "completed": [
      "Blade of Justice", "Carcano", "Reverence", "SUBVERSIVE", "HyperSonic", 
      "Forbidden Isle", "ACU", "Cataclysm", "Thanatophobia", "Leyak", "Acropolis", 
      "Plasma Pulse", "Pyromaniac", "CraZy II", "Windy Landscape", "Sharp Minor", 
      "Poltergeist"
    ]
  },
  {
    "name": "LAZAFET",
    "verified": [
      "Infernal Abyss", "Carcano", "BloodBath", "Betrayal of Fate", "Curcuit Breaker", 
      "Cataclysm", "Ice Carbon Diablo X", "Clubstep Nightmares", "The Janus Miracles", 
      "El Dorado", "Acropolis", "Flat Major", "Night Terrors", "Cursed Mansion", 
      "Firewall", "Psychosis", "Slaughterhouse", "Windy Landscape"
    ],
    "completed": [
      "Shitty Acheron (89774876)", "surveillant", "ACU", "Leyak", "Supersonic", 
      "Forest Temple", "Poltergeist", "Classic"
    ]
  },
  {
    "name": "Trotil",
    "verified": [
      "Yo Ass Skrrt", "La Llorona", "ACU", "Crimson Clutter", "Magma Bound", "Forest Temple"
    ],
    "completed": [
      "Blade of Justice", "Femboy Fantasy", "BloodBath", "Yuka", "Thanatophobia", 
      "Leyak", "Acropolis", "Night Terrors", "Firewall", "Supersonic", 
      "Plasma Pulse", "Windy Landscape"
    ]
  },
  {
    "name": "Rick Mitchell",
    "verified": [
      "Yuka", "Thanatophobia", "POTROGAL GAZON", "The Secret Box"
    ],
    "completed": [
      "Blade of Justice", "Forbidden Isle", "ACU", "Forest Temple"
    ]
  },
  {
    "name": "Miradivy",
    "verified": [
      "8o", "Fingerdash v4", "Classic"
    ],
    "completed": [
      "Acropolis", "Magma Bound", "Supersonic", "CraZy II", "Poltergeist"
    ]
  },
  {
    "name": "Waterfall.",
    "verified": [
      "CraZy II"
    ],
    "completed": []
  }
];