export const workoutProgram = {
  0: {
    title: "Ignition",
    coachTip: "Smooth presses. Warm shoulders move better.",
    warmup: [
      { id: "pvc-pass", name: "PVC pass-throughs", sets: 2, reps: 15 },
      { id: "scap-push", name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "push-press", name: "Push press", sets: 5, reps: 3 },
      { id: "incline-db", name: "Incline dumbbell press", sets: 3, reps: 10 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 12,
      movements: [
        { id: "row", name: "Row", reps: "500m" },
        { id: "pushups", name: "Push-ups", reps: 30 },
        { id: "situps", name: "Sit-ups", reps: 40 }
      ]
    }
  },

  1: {
    title: "Pull Engine",
    coachTip: "Stable shoulders before fast reps.",
    warmup: [
      { id: "scap-pull", name: "Scapula pull-ups", sets: 2, reps: 12 },
      { id: "bw-rows", name: "Wall bodyweight rows", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "pullups", name: "Strict pull-ups", sets: 5, reps: 5 },
      { id: "cable-row", name: "Cable row", sets: 3, reps: 10 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 10,
      movements: [
        { id: "ring-rows", name: "Ring rows", reps: 10 },
        { id: "db-curl", name: "Dumbbell curls", reps: 12 },
        { id: "bike", name: "Bike", reps: "12 cal" }
      ]
    }
  },

  2: {
    title: "Solid Base",
    coachTip: "Leg drive and full depth.",
    warmup: [
      { id: "glute-bridge", name: "Glute bridges", sets: 2, reps: 20 },
      { id: "bw-squat", name: "Bodyweight squats", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "front-squat", name: "Front squat", sets: 5, reps: 3 },
      { id: "bulgarian", name: "Bulgarian split squat", sets: 3, reps: 10 }
    ],
    training: {
      type: "ROUNDS",
      timeCapMin: 14,
      movements: [
        { id: "wallball", name: "Wall balls", reps: 20 },
        { id: "box-step", name: "Box step-ups", reps: 20 }
      ]
    }
  },

  3: {
    title: "Upper Pump",
    coachTip: "Control the tempo, earn the volume.",
    warmup: [
      { id: "around", name: "Around the worlds", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "bench", name: "Barbell bench press", sets: 4, reps: 6 },
      { id: "ring-dips", name: "Ring dips", sets: 4, reps: 8 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 10,
      movements: [
        { id: "pushups", name: "Push-ups", reps: 50 },
        { id: "vups", name: "V-ups", reps: 40 }
      ]
    }
  },

  4: {
    title: "Clean Lines",
    coachTip: "Fast hips, quiet catch.",
    warmup: [
      { id: "empty-complex", name: "Empty bar complex", sets: 2, reps: 6 }
    ],
    strength: [
      { id: "hang-clean", name: "Hang power clean", sets: 6, reps: 2 },
      { id: "db-row", name: "Unilateral dumbbell row", sets: 3, reps: 10 }
    ],
    training: {
      type: "EMOM",
      timeCapMin: 12,
      movements: [
        { id: "clean", name: "Power clean", reps: 3 },
        { id: "burpee", name: "Burpees", reps: 8 }
      ]
    }
  },

  5: {
    title: "Posterior Chain",
    coachTip: "Feel hamstrings, not lower back.",
    warmup: [
      { id: "bw-rdl", name: "Bodyweight RDLs", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "rdl", name: "Romanian deadlift", sets: 4, reps: 8 },
      { id: "hip-thrust", name: "Hip thrust", sets: 3, reps: 10 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 10,
      movements: [
        { id: "kb-swing", name: "KB swings", reps: 20 },
        { id: "lunges", name: "Walking lunges", reps: 20 }
      ]
    }
  },

  6: {
    title: "Overhead Control",
    coachTip: "Lockout and balance first.",
    warmup: [
      { id: "pvc-pass", name: "PVC pass-throughs", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "strict-press", name: "Strict press", sets: 5, reps: 5 },
      { id: "hspu", name: "Handstand push-ups", sets: 4, reps: 6 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 8,
      movements: [
        { id: "db-snatch", name: "DB snatch", reps: 30 },
        { id: "situps", name: "Sit-ups", reps: 40 }
      ]
    }
  },

  7: {
    title: "Strict Pull",
    coachTip: "Quality reps over speed.",
    warmup: [
      { id: "scap-pull", name: "Scapula pull-ups", sets: 2, reps: 12 }
    ],
    strength: [
      { id: "pullups", name: "Strict pull-ups", sets: 5, reps: 4 },
      { id: "lat-pull", name: "Lat pull-down", sets: 3, reps: 10 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 12,
      movements: [
        { id: "row", name: "Row", reps: "250m" },
        { id: "ring-rows", name: "Ring rows", reps: 12 }
      ]
    }
  },

  8: {
    title: "Snatch Flow",
    coachTip: "Light, fast, precise.",
    warmup: [
      { id: "ankle", name: "Ankle rocks", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "hang-snatch", name: "Hang power snatch", sets: 6, reps: 2 },
      { id: "oh-squat", name: "Overhead squat", sets: 3, reps: 5 }
    ],
    training: {
      type: "ROUNDS",
      timeCapMin: 14,
      movements: [
        { id: "wallball", name: "Wall balls", reps: 25 },
        { id: "du", name: "Double unders", reps: 50 }
      ]
    }
  },

  9: {
    title: "Volume Press",
    coachTip: "Keep reps smooth under fatigue.",
    warmup: [
      { id: "scap-push", name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "bench", name: "Bench press", sets: 4, reps: 8 },
      { id: "db-fly", name: "Dumbbell chest flies", sets: 3, reps: 15 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 10,
      movements: [
        { id: "pushups", name: "Push-ups", reps: 60 },
        { id: "plank", name: "Plank", reps: "2 min" }
      ]
    }
  },

  10: {
    title: "Clean Speed",
    coachTip: "Speed beats load today.",
    warmup: [
      { id: "empty-pull", name: "Empty bar high pull", sets: 2, reps: 8 }
    ],
    strength: [
      { id: "power-clean", name: "Power clean", sets: 7, reps: 1 },
      { id: "shrugs", name: "Cable bar shrugs", sets: 3, reps: 12 }
    ],
    training: {
      type: "EMOM",
      timeCapMin: 10,
      movements: [
        { id: "clean", name: "Power clean", reps: 2 },
        { id: "jump", name: "Box jumps", reps: 6 }
      ]
    }
  },

  11: {
    title: "Deadlift Day",
    coachTip: "Neutral spine always.",
    warmup: [
      { id: "bw-rdl", name: "Bodyweight RDLs", sets: 2, reps: 12 }
    ],
    strength: [
      { id: "deadlift", name: "Deadlift", sets: 5, reps: 3 },
      { id: "ham-curl", name: "Hamstring curl", sets: 3, reps: 12 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 8,
      movements: [
        { id: "kb-swing", name: "KB swings", reps: 15 },
        { id: "situps", name: "Sit-ups", reps: 20 }
      ]
    }
  },

  12: {
    title: "Jerk Skill",
    coachTip: "Fast feet, solid lockout.",
    warmup: [
      { id: "front-rack", name: "Front rack stretch", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "split-jerk", name: "Split jerk", sets: 6, reps: 2 },
      { id: "strict-press", name: "Strict press", sets: 4, reps: 6 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 8,
      movements: [
        { id: "wallball", name: "Wall balls", reps: 40 },
        { id: "burpee", name: "Burpees", reps: 30 }
      ]
    }
  },

  13: {
    title: "Gym Control",
    coachTip: "Scale to perfect reps.",
    warmup: [
      { id: "bw-rows", name: "Wall bodyweight rows", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "t2b", name: "Toes to bar", sets: 4, reps: 8 },
      { id: "pullups", name: "Pull-ups", sets: 4, reps: 6 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 12,
      movements: [
        { id: "situps", name: "Sit-ups", reps: 20 },
        { id: "jump", name: "Jump rope", reps: "50" }
      ]
    }
  },

  14: {
    title: "Squat Positions",
    coachTip: "Balance and control.",
    warmup: [
      { id: "pvc-oh", name: "PVC overhead squat", sets: 2, reps: 10 }
    ],
    strength: [
      { id: "oh-squat", name: "Overhead squat", sets: 5, reps: 3 },
      { id: "back-squat", name: "Back squat", sets: 4, reps: 6 }
    ],
    training: {
      type: "ROUNDS",
      timeCapMin: 12,
      movements: [
        { id: "lunges", name: "Walking lunges", reps: 30 },
        { id: "plank", name: "Plank", reps: "1 min" }
      ]
    }
  },

  15: {
    title: "Gym Push",
    coachTip: "Own bodyweight first.",
    warmup: [
      { id: "scap-push", name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "ring-dips", name: "Ring dips", sets: 4, reps: 8 },
      { id: "pushups", name: "Push-ups", sets: 3, reps: 20 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 10,
      movements: [
        { id: "db-press", name: "DB shoulder press", reps: 12 },
        { id: "situps", name: "Sit-ups", reps: 20 }
      ]
    }
  },

  16: {
    title: "Upper Back",
    coachTip: "Feel lats and traps.",
    warmup: [
      { id: "rear-delt", name: "Rear delt holds", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "snatch-pull", name: "Snatch high pull", sets: 5, reps: 3 },
      { id: "db-row", name: "Chest supported DB row", sets: 3, reps: 10 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 10,
      movements: [
        { id: "row", name: "Row", reps: "750m" },
        { id: "burpee", name: "Burpees", reps: 25 }
      ]
    }
  },

  17: {
    title: "Single Leg",
    coachTip: "Control every rep.",
    warmup: [
      { id: "bw-rdl", name: "Bodyweight RDLs", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "bulgarian", name: "Bulgarian split squat", sets: 3, reps: 12 },
      { id: "hip-thrust", name: "Hip thrust", sets: 3, reps: 10 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 10,
      movements: [
        { id: "box-step", name: "Box step-ups", reps: 20 },
        { id: "calf", name: "Calf raises", reps: 30 }
      ]
    }
  },

  18: {
    title: "Press & Move",
    coachTip: "Athletic pressing.",
    warmup: [
      { id: "pvc-pass", name: "PVC pass-throughs", sets: 2, reps: 12 }
    ],
    strength: [
      { id: "push-press", name: "Push press", sets: 5, reps: 3 },
      { id: "dips", name: "Dips", sets: 3, reps: 10 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 9,
      movements: [
        { id: "db-snatch", name: "DB snatch", reps: 40 },
        { id: "situps", name: "Sit-ups", reps: 40 }
      ]
    }
  },

  19: {
    title: "Row Focus",
    coachTip: "Strong pulls, no rushing.",
    warmup: [
      { id: "bw-rows", name: "Wall bodyweight rows", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "pullups", name: "Pull-ups", sets: 5, reps: 5 },
      { id: "cable-row", name: "Cable row", sets: 3, reps: 10 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 12,
      movements: [
        { id: "kb-row", name: "KB rows", reps: 12 },
        { id: "bike", name: "Bike", reps: "10 cal" }
      ]
    }
  },

  20: {
    title: "Leg Drive",
    coachTip: "Stay braced.",
    warmup: [
      { id: "bw-squat", name: "Bodyweight squats", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "front-squat", name: "Front squat", sets: 5, reps: 3 },
      { id: "walking-lunge", name: "Walking lunges", sets: 3, reps: 14 }
    ],
    training: {
      type: "ROUNDS",
      timeCapMin: 14,
      movements: [
        { id: "wallball", name: "Wall balls", reps: 25 },
        { id: "plank", name: "Plank", reps: "1 min" }
      ]
    }
  },

  21: {
    title: "Press Balance",
    coachTip: "Consistency beats load.",
    warmup: [
      { id: "around", name: "Around the worlds", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "bench", name: "Bench press", sets: 4, reps: 6 },
      { id: "strict-press", name: "Strict press", sets: 4, reps: 6 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 10,
      movements: [
        { id: "pushups", name: "Push-ups", reps: 50 },
        { id: "burpee", name: "Burpees", reps: 25 }
      ]
    }
  },

  22: {
    title: "Upper Builder",
    coachTip: "Strong back supports everything.",
    warmup: [
      { id: "rear-delt", name: "Rear delt holds", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "snatch-dl", name: "Snatch grip deadlift", sets: 4, reps: 6 },
      { id: "db-row", name: "DB row", sets: 3, reps: 10 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 10,
      movements: [
        { id: "ring-rows", name: "Ring rows", reps: 15 },
        { id: "jump", name: "Jump rope", reps: "50" }
      ]
    }
  },

  23: {
    title: "Mixed Legs",
    coachTip: "Breathing control matters.",
    warmup: [
      { id: "bw-rdl", name: "Bodyweight RDLs", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "rdl", name: "Romanian deadlift", sets: 4, reps: 8 },
      { id: "goblet", name: "Goblet squat", sets: 3, reps: 15 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 12,
      movements: [
        { id: "stepups", name: "Box step-ups", reps: 30 },
        { id: "situps", name: "Sit-ups", reps: 40 }
      ]
    }
  },

  24: {
    title: "Jerk Power",
    coachTip: "Explode and recover.",
    warmup: [
      { id: "pvc-pass", name: "PVC pass-throughs", sets: 2, reps: 12 }
    ],
    strength: [
      { id: "push-jerk", name: "Push jerk", sets: 6, reps: 2 },
      { id: "db-press", name: "Incline DB press", sets: 3, reps: 10 }
    ],
    training: {
      type: "EMOM",
      timeCapMin: 12,
      movements: [
        { id: "jerk", name: "Push jerk", reps: 2 },
        { id: "situps", name: "Sit-ups", reps: 12 }
      ]
    }
  },

  25: {
    title: "Pull Volume",
    coachTip: "Quality over ego.",
    warmup: [
      { id: "scap-pull", name: "Scapula pull-ups", sets: 2, reps: 12 }
    ],
    strength: [
      { id: "pullups", name: "Pull-ups", sets: 5, reps: 5 },
      { id: "db-row", name: "Unilateral DB row", sets: 3, reps: 10 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 12,
      movements: [
        { id: "row", name: "Row", reps: "300m" },
        { id: "curl", name: "DB curls", reps: 12 }
      ]
    }
  },

  26: {
    title: "Squat & Hinge",
    coachTip: "Own both patterns.",
    warmup: [
      { id: "bw-squat", name: "Bodyweight squats", sets: 2, reps: 15 }
    ],
    strength: [
      { id: "back-squat", name: "Back squat", sets: 4, reps: 6 },
      { id: "hip-thrust", name: "Hip thrust", sets: 3, reps: 10 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 12,
      movements: [
        { id: "lunges", name: "Walking lunges", reps: 40 },
        { id: "plank", name: "Plank", reps: "90 sec" }
      ]
    }
  },

  27: {
    title: "Bench Burn",
    coachTip: "Consistent tempo.",
    warmup: [
      { id: "around", name: "Around the worlds", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "bench", name: "Bench press", sets: 4, reps: 6 },
      { id: "dips", name: "Dips", sets: 4, reps: 8 }
    ],
    training: {
      type: "AMRAP",
      timeCapMin: 10,
      movements: [
        { id: "pushups", name: "Push-ups", reps: 20 },
        { id: "situps", name: "Sit-ups", reps: 30 }
      ]
    }
  },

  28: {
    title: "Clean Accessory",
    coachTip: "Bar close, finish tall.",
    warmup: [
      { id: "rear-delt", name: "Rear delt holds", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "hang-clean", name: "Hang power clean", sets: 6, reps: 2 },
      { id: "db-row", name: "Chest supported DB row", sets: 3, reps: 10 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 10,
      movements: [
        { id: "row", name: "Row", reps: "600m" },
        { id: "burpee", name: "Burpees", reps: 30 }
      ]
    }
  },

  29: {
    title: "Final Push",
    coachTip: "Finish strong and clean.",
    warmup: [
      { id: "glute-bridge", name: "Glute bridges", sets: 2, reps: 20 }
    ],
    strength: [
      { id: "front-squat", name: "Front squat", sets: 4, reps: 5 },
      { id: "bulgarian", name: "Bulgarian split squat", sets: 3, reps: 10 }
    ],
    training: {
      type: "FOR_TIME",
      timeCapMin: 14,
      movements: [
        { id: "leg-press", name: "Leg press", reps: 30 },
        { id: "ham-curl", name: "Hamstring curl", reps: 30 },
        { id: "calf", name: "Calf raises", reps: 50 }
      ]
    }
  }
};

export const exerciseDescriptions = {
  // Warm-up / mobility
  "Around the worlds":
    "Hold a PVC pipe or stick with a wide grip. Start at your hips, raise it overhead with straight arms, then lower it behind your back as far as comfortable. Reverse the motion slowly back to the start.",
  "Scapula pushups":
    "Start in a high plank with straight arms. Without bending your elbows, retract and protract your shoulder blades in a controlled way. Scale by doing it on your knees if needed.",
  "Wall bodyweight rows":
    "Stand about a foot from a wall, lean back, and row your body toward the wall by pulling your elbows back and squeezing your shoulder blades. Keep your core tight and move smoothly.",
  "Leaning rear delt holds":
    "Stand with your back against a wall, elbows at shoulder height, forearms vertical and thumbs pointing toward your ears. Press your elbows into the wall and hold tension in the rear delts and upper back.",
  "Rear delt holds":
    "Stand or hinge slightly forward and hold your arms out to the sides (or in a 'W' position) under tension. Keep shoulders down and feel the rear delts and upper back working. Focus on posture and steady breathing.",
  "Scapula pull ups":
    "Hang from a pull-up bar with straight arms. Without bending your elbows, pull your shoulders down and back to lift your body slightly, then return to a full hang under control.",
  "Glute bridges":
    "Lie on your back with knees bent and feet flat. Drive through your heels and squeeze your glutes to lift your hips until your body forms a straight line from shoulders to knees.",
  "Bodyweight squats":
    "Squat down with feet about shoulder-width, pause 2–3 seconds at the bottom, then stand up. Keep your heels down, knees tracking over toes, and chest tall.",
  "Bodyweight RDLs":
    "Stand tall and hinge at the hips while keeping a neutral spine. Push your hips back, feel the hamstrings load, then return to standing by squeezing glutes and hamstrings.",
  "Ankle rocks":
    "Stand facing a wall with one foot forward. Keeping the heel down, drive your knee toward the wall to mobilize the ankle. Move in and out of range with control.",
  "PVC pass-throughs":
    "Hold a PVC pipe with a wide grip. Keeping elbows locked, move the pipe from hips to overhead and behind your back, then return. Keep ribs down and move smoothly.",
  "PVC overhead squat":
    "Hold a PVC pipe overhead with a wide grip and locked elbows. Squat down while keeping the pipe over your midfoot, chest up, and heels flat. Focus on balance and mobility.",
  "Front rack stretch":
    "Place the bar or PVC in the front rack position across your shoulders. Keep elbows high and gently stretch wrists, lats, and upper back to improve front rack comfort.",
  "Empty bar high pull":
    "With an empty bar, hinge slightly and extend powerfully. Pull the bar up close to your body with elbows high and outside. Focus on speed and bar path, not load.",
  "Empty bar complex":
    "With an empty bar, move through a simple sequence (hinge + pull + rack) to groove positions. Keep the bar close, move smoothly, and prioritize clean posture and control.",
  "Empty bar complex (RDL + high pull + front rack)":
    "With an empty bar, perform a Romanian deadlift, then a high pull, then bring the bar into a front rack. Move smoothly and keep the bar close throughout.",

  // Conditioning / general (added)
  "Row":
    "Use a rowing machine. Drive with your legs first, then swing the torso slightly back, then pull with the arms. Reverse on the way back (arms, torso, legs). Keep strokes smooth and consistent.",
  "Bike":
    "Use an assault bike or air bike. Start at a sustainable pace and keep cadence steady. Breathe rhythmically and avoid redlining too early.",
  "Bike (Assault/Air)":
    "Use an air bike. Push and pull with arms while driving with legs. Keep cadence steady and aim for consistent output per round/minute.",
  "Jump rope":
    "Jump with small, relaxed hops. Keep elbows close to your ribs and turn the rope mainly with your wrists. Stay tall and land softly.",
  "Double unders":
    "Jump a little higher while spinning the rope twice per jump. Keep arms relaxed, elbows close, and use wrists for speed. Practice smooth rhythm over forcing height.",
  "Box jumps":
    "Jump onto a stable box with full-foot contact, stand tall, then step down safely or rebound depending on intent. Keep knees tracking and land softly.",
  "Box step-ups":
    "Step onto a box with full foot placement, stand tall by driving through the front leg, then step down under control. Avoid pushing off excessively with the back leg.",
  "Box step-ups (weighted)":
    "Hold dumbbells at your sides. Step up with full foot contact, stand tall, then step down controlled. Keep torso stable and avoid collapsing the knee inward.",
  "Wall balls":
    "Hold a medicine ball at the chest, squat to depth, then drive up and throw to target. Catch smoothly and flow into the next rep. Keep heels down and chest tall.",
  "Burpees":
    "From standing, place hands down, jump or step back to a plank, lower chest to floor, then jump/step forward and stand with a small jump or extension. Keep a steady cadence.",
  "Sit-ups":
    "Lie on your back, bring torso up to sit tall, then return under control. Keep breathing steady and avoid yanking the neck.",
  "V-ups":
    "Start lying flat. Lift legs and torso simultaneously to meet in the middle, then return controlled. Scale by bending knees or doing tuck-ups.",
  "Plank":
    "Hold a strong forearm or high plank position. Keep ribs down, glutes tight, and a straight line from head to heels. Breathe slowly without collapsing the hips.",

  // Press / push strength + calisthenics
  "Barbell bench press":
    "Lie on a flat bench and lower the bar to your chest with control, elbows about 45–60 degrees from your body. Press the bar back up, keeping your upper back tight and feet planted.",
  "Bench press":
    "Lie on a flat bench and lower the bar to your chest with control. Keep shoulder blades retracted, feet planted, and press to full extension without losing tightness.",
  "Incline dumbbell press":
    "Lie on an incline bench and press dumbbells up and slightly inward. Lower under control to feel the upper chest, keeping shoulders packed down and back.",
  "Dumbbell chest flies":
    "Lie on a bench with dumbbells over your chest, elbows slightly bent. Open your arms wide under control, then squeeze your chest to bring the dumbbells back together.",
  "Cable crossover press":
    "Using cable handles, press forward and slightly across your body, finishing with a strong chest squeeze. Keep shoulders down and avoid shrugging.",
  "Cable chest flies":
    "Stand between two cable attachments and bring the handles together in front of your chest. Keep a slight bend in your elbows and focus on squeezing the chest at the end.",
  "Push-ups":
    "Start in a plank with hands slightly wider than shoulder-width. Lower your chest to the floor with a tight core, then press back up. Keep elbows around 45 degrees and body in a straight line.",
  "Pushups":
    "Start in a plank with hands slightly wider than shoulder-width. Lower your chest to the floor with a tight core, then press back up. Keep elbows around 45 degrees and body in a straight line.",
  "Dips":
    "Using parallel bars, lower your body by bending your elbows, then push back up. Keep shoulders stable and torso slightly forward to engage chest and triceps.",
  "Ring dips":
    "Perform dips on rings. Keep rings close, shoulders stable, descend under control, and press to full lockout. Scale with reduced range or foot assistance.",
  "Dips (rings or bars)":
    "Perform dips on rings or parallel bars. Keep shoulders packed, descend under control, and press to full lockout. Scale by reducing range or using assistance.",
  "Cable rope pushdown":
    "Attach a rope to a cable station and push down until elbows fully extend. Keep elbows pinned to your sides and finish by spreading the rope slightly to contract the triceps.",
  "Dumbbell skull crushers":
    "Lie on a bench with dumbbells above your chest. Bend elbows to lower the dumbbells toward your forehead, then extend back up, keeping upper arms mostly still.",
  "Unilateral cable pushdown":
    "With one handle on a cable station, keep your elbow close to your torso and press down to full extension. Control the return and keep shoulders relaxed.",
  "Strict press":
    "Press a barbell from the shoulders to overhead without using your legs. Keep ribs down, squeeze glutes, and finish with the bar over the midfoot.",
  "DB shoulder press":
    "Press dumbbells overhead from shoulder height. Keep ribs down, brace your core, and finish with biceps near ears. Control the descent and avoid arching your lower back.",
  "Push press":
    "Dip slightly with a vertical torso, then drive through your legs to help press the bar overhead. Finish with locked elbows and a stable core.",
  "Push jerk":
    "Dip and drive the bar up, then quickly re-dip under it to catch overhead with locked elbows. Stand tall to finish. Focus on speed and solid receiving position.",
  "Split jerk (technique)":
    "Drive the bar upward and split your legs to receive it overhead. Front shin stays mostly vertical, back knee slightly bent, and elbows locked out. Recover to standing under control.",
  "Handstand push-ups":
    "Perform a vertical press against a wall, lowering your head with control and pressing back up. Scale with pike push-ups, an abmat, or reduced range of motion.",
  "Handstand push-ups (scaled)":
    "Perform a vertical press against a wall, lowering your head with control and pressing back up. Scale with pike push-ups, an abmat, or reduced range of motion.",

  // Pull strength + calisthenics
  "Lat pull down":
    "Sit at a lat pulldown machine and pull the bar down to your upper chest while keeping your torso tall. Control the return and focus on driving elbows down.",
  "Cable row":
    "Sit at a cable row station and pull the handle toward your torso. Keep your back neutral and squeeze shoulder blades together at the end without leaning back excessively.",
  "DB row":
    "Hinge or support your body on a bench and row the dumbbell toward your hip. Keep the back flat, pull with the lat, and control the lowering phase.",
  "KB rows":
    "Hinge with a flat back and row the kettlebell(s) toward your hip. Keep shoulders packed and avoid twisting. Move smoothly and control the eccentric.",
  "Unilateral dumbbell row":
    "Support one hand on a bench, hinge at the hips, and row a dumbbell toward your hip. Keep your back flat and pull with your lat, not your shoulder.",
  "Chest supported dumbbell row":
    "Lie face down on an incline bench and row dumbbells up by pulling elbows back. Pause briefly at the top to squeeze your upper back.",
  "Chest supported DB row":
    "Lie face down on an incline bench and row dumbbells up by pulling elbows back. Keep neck neutral, pause briefly at the top, and lower under control.",
  "Dumbbell side raises":
    "Hold dumbbells at your sides and raise them out until arms are parallel to the floor. Keep a slight bend in elbows and avoid shrugging.",
  "Rear delt flies":
    "Hinge forward with a flat back and raise dumbbells out to the sides. Move from the shoulders and upper back, focusing on rear delts and scapular control.",
  "Cable bar shrugs":
    "Hold a cable bar with straight arms and shrug your shoulders straight up. Pause at the top, then lower slowly. Keep your neck relaxed.",
  "Overhand cable curl":
    "Use a cable bar with an overhand grip and curl up by bending your elbows. Keep upper arms still and focus on forearms and biceps.",
  "Hammer grip dumbbell curl":
    "Hold dumbbells with palms facing each other and curl upward. Keep elbows close to your body and control the descent.",
  "Alternating dumbbell curl":
    "Curl one dumbbell at a time while keeping the other arm still. Rotate the wrist naturally and focus on a controlled squeeze at the top.",
  "Pull-ups":
    "Hang from a bar with a tight core and pull your chest toward the bar by driving elbows down. Lower under control to full extension. Scale using a band or a lower bar.",
  "Strict pull-ups":
    "Perform pull-ups without kipping. Keep a tight hollow body, drive elbows down, and control the descent to full extension. Scale with a band to maintain strict form.",
  "Pull-ups (strict or banded)":
    "Hang from a bar with a tight core and pull your chest toward the bar by driving elbows down. Lower under control to full extension. Scale using a band or a lower bar.",
  "Ring rows":
    "Hold rings with a tight body line and row your chest to the rings. Keep shoulders down, squeeze shoulder blades, and control the return.",
  "Toes to bar":
    "Hang from a pull-up bar with active shoulders. Raise toes to touch the bar by using core and controlled swing. Scale with knee raises or a smaller range of motion.",
  "Toes to bar (scaled)":
    "Hang from a pull-up bar and raise your feet toward the bar while keeping shoulders active. Scale with knee raises, toes-to-ring, or a smaller range of motion.",

  // Legs / posterior chain
  "Barbell squat":
    "Set a barbell across your upper back, brace your core, and squat down by bending hips and knees. Keep your chest up and drive through your heels to stand.",
  "Back squat":
    "Set the bar on your upper back, brace hard, and squat to depth with knees tracking over toes. Drive up through midfoot and keep your torso stable.",
  "Front squat":
    "Hold the bar in the front rack with elbows high. Keep your torso upright as you squat, then drive up while maintaining a strong brace and stable knees.",
  "Overhead squat":
    "Hold the bar overhead with locked elbows and squat while keeping the bar stacked over your midfoot. Move slowly and prioritize balance and mobility over load.",
  "Overhead squat (light technique)":
    "Hold the bar overhead with locked elbows and squat while keeping the bar stacked over your midfoot. Move slowly and prioritize balance and mobility over load.",
  "Leg press":
    "Sit on the leg press and press the platform away by extending your legs. Lower with control until you reach a comfortable depth, keeping knees tracking over toes.",
  "Goblet squat":
    "Hold a dumbbell or kettlebell close to your chest and squat down with a tall torso. Keep heels flat and use the weight to stay upright.",
  "Hip thrust":
    "Rest your upper back on a bench and place a barbell or weight over your hips. Drive hips upward by squeezing glutes, then lower under control.",
  "Bulgarian split squat":
    "Place one foot behind you on a bench and squat with the front leg. Keep torso tall and control the depth; drive through the front heel to stand.",
  "Unilateral RDLs":
    "Stand on one leg and hinge at the hips while the other leg extends behind you. Keep hips square and a neutral spine, then stand by engaging hamstrings and glutes.",
  "Romanian deadlift":
    "Hold a barbell or dumbbells and hinge at the hips with a neutral spine. Lower until you feel hamstrings stretch, then stand up by squeezing glutes.",
  "Romanian deadlifts":
    "Hold a barbell or dumbbells and hinge at the hips with a neutral spine. Lower until you feel hamstrings stretch, then stand up by squeezing glutes.",
  "Deadlift":
    "Set up with the bar over midfoot, brace your core, and pull by driving the floor away. Keep the bar close to your legs and lock out with glutes, not a back lean.",
  "Walking lunges":
    "Step forward and lower into a lunge with control, keeping the front knee tracking over toes. Push through the front heel to step forward and repeat.",
  "Leg extension":
    "Sit on a leg extension machine and extend your knees to straighten your legs. Pause briefly at the top and lower under control.",
  "Hamstring curl":
    "Use a leg curl machine to curl your heels toward your glutes. Keep hips stable and control the eccentric (lowering) phase.",
  "Calf raises":
    "Stand with stable balance and raise your heels to contract calves, then lower slowly to a full stretch. Keep knees mostly straight but not locked.",
  "Good girls / bad girls":
    "Use the adductor/abductor machine to bring knees together (adduction) or push them apart (abduction). Move with control and avoid bouncing.",

  // Olympic / barbell technique work
  "Hang power clean":
    "Start from the hang position above the knees. Keep the bar close, extend hips and knees explosively, then pull under to catch the bar in a front rack with elbows high.",
  "Power clean":
    "From the floor or hang, drive the bar up with leg power, keep it close, and catch it in a strong front rack above parallel. Stand tall to finish each rep.",
  "Hang power snatch":
    "Start from the hang, keep the bar close, extend explosively, then pull under and catch overhead with locked elbows. Focus on speed and solid receiving position.",
  "Snatch high pull":
    "With a snatch-width grip, extend powerfully and pull the bar up close to your body with elbows high. Prioritize speed and bar path over load.",
  "Snatch high pull (light)":
    "With a snatch-width grip, extend powerfully and pull the bar up close to your body with elbows high. Keep shoulders over the bar and prioritize bar path and speed.",
  "Snatch grip deadlift":
    "Deadlift with a wide snatch grip. Keep your back neutral, lats engaged, and the bar close to your body. Use it to reinforce positions and upper-back strength.",
  "Snatch grip deadlift (light)":
    "Deadlift with a wide snatch grip. Keep your back neutral, lats engaged, and the bar close to your body. Use this to build positions and upper-back strength.",

  // Added: kettlebell / dumbbell conditioning moves
  "KB swings":
    "Hinge at the hips with a neutral spine, then snap hips forward to swing the kettlebell to chest height. Arms stay relaxed; power comes from hips, not shoulders.",
  "DB snatch":
    "From the floor or hang, drive through legs and hips to bring the dumbbell overhead in one motion. Lock out overhead and control the descent. Alternate arms if desired."
};


export const gymHealthFacts = [
  "Getting 7–9 hours of sleep supports recovery, performance, and hormone balance.",
  "Eating enough protein (about 1.6–2.2g per kg of bodyweight) helps muscle repair and strength gains.",
  "Staying hydrated improves training output and supports nutrient delivery.",
  "Moderate caffeine can improve focus, strength, and endurance when used strategically.",
  "Healthy fats support hormone production and long-term energy levels.",
  "Fiber-rich foods support digestion and help keep appetite and body composition in check.",
  "Easy daily walking improves cardiovascular health and helps recovery on non-training days.",
  "Breathwork or meditation can lower stress and improve recovery and focus.",
  "A proper warm-up increases blood flow, improves movement quality, and reduces injury risk.",
  "Skipping rest and recovery can lead to overtraining, fatigue, and stalled progress."
];
