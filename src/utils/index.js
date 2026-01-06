export const workoutProgram = {
  0: { // Push (Strength + Gymnastics)
    coachTip: "Press with control. Technique first, then load.",
    warmup: [
      { name: "Around the worlds", sets: 2, reps: 25 },
      { name: "Scapula pushups", sets: 2, reps: 20 },
      { name: "PVC pass-throughs", sets: 2, reps: 15 }
    ],
    workout: [
      { name: "Push press", sets: 5, reps: 3 },
      { name: "Handstand push-ups (scaled)", sets: 4, reps: 6 },
      { name: "Dips (rings or bars)", sets: 3, reps: 10 },
      { name: "Incline dumbbell press", sets: 3, reps: 10 },
      { name: "Dumbbell skull crushers", sets: 3, reps: 12 }
    ]
  },

  1: { // Pull (Gymnastics + Pull strength)
    coachTip: "Pull with stable shoulders: keep your scapula active.",
    warmup: [
      { name: "Scapula pull ups", sets: 2, reps: 12 },
      { name: "Wall bodyweight rows", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Pull-ups (strict or banded)", sets: 5, reps: 5 },
      { name: "Ring rows", sets: 4, reps: 10 },
      { name: "Chest supported dumbbell row", sets: 3, reps: 10 },
      { name: "Rear delt flies", sets: 3, reps: 15 },
      { name: "Hammer grip dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  2: { // Legs (Olympic base)
    coachTip: "Strong legs = better everything. Prioritize range and control.",
    warmup: [
      { name: "Glute bridges", sets: 2, reps: 20 },
      { name: "Bodyweight squats", sets: 2, reps: 15 },
      { name: "Ankle rocks", sets: 2, reps: 15 }
    ],
    workout: [
      { name: "Front squat", sets: 5, reps: 3 },
      { name: "Barbell squat", sets: 3, reps: 8 },
      { name: "Bulgarian split squat", sets: 3, reps: 10 },
      { name: "Hamstring curl", sets: 3, reps: 12 },
      { name: "Calf raises", sets: 3, reps: 15 }
    ]
  },

  3: { // Push (Bench + Gymnastics accessory)
    coachTip: "Chest and triceps today, with a CrossFit flavor.",
    warmup: [
      { name: "Around the worlds", sets: 2, reps: 20 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Barbell bench press", sets: 4, reps: 6 },
      { name: "Ring dips (scaled if needed)", sets: 4, reps: 8 },
      { name: "Pushups", sets: 3, reps: 20 },
      { name: "Dumbbell chest flies", sets: 3, reps: 15 },
      { name: "Cable rope pushdown", sets: 3, reps: 15 }
    ]
  },

  4: { // Pull (Clean technique + Back)
    coachTip: "On cleans: keep the bar close, snap the hips, receive solid.",
    warmup: [
      { name: "Leaning rear delt holds", sets: 2, reps: 20 },
      { name: "Scapula pull ups", sets: 2, reps: 12 },
      { name: "Empty bar complex (RDL + high pull + front rack)", sets: 2, reps: 6 }
    ],
    workout: [
      { name: "Hang power clean", sets: 6, reps: 2 },
      { name: "Cable row", sets: 3, reps: 10 },
      { name: "Unilateral dumbbell row", sets: 3, reps: 10 },
      { name: "Cable bar shrugs", sets: 3, reps: 12 },
      { name: "Alternating dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  5: { // Legs (Posterior chain)
    coachTip: "A strong posterior chain = more power and fewer injuries.",
    warmup: [
      { name: "Bodyweight RDLs", sets: 2, reps: 15 },
      { name: "Glute bridges", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Romanian deadlifts", sets: 4, reps: 8 },
      { name: "Walking lunges", sets: 3, reps: 14 },
      { name: "Hip thrust", sets: 3, reps: 10 },
      { name: "Leg extension", sets: 3, reps: 15 },
      { name: "Calf raises", sets: 3, reps: 12 }
    ]
  },

  6: { // Push (Overhead strength)
    coachTip: "If your shoulder complains: reduce range or scale (pike/HSPU).",
    warmup: [
      { name: "PVC pass-throughs", sets: 2, reps: 15 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Strict press", sets: 5, reps: 5 },
      { name: "Handstand push-ups (scaled)", sets: 4, reps: 6 },
      { name: "Incline dumbbell press", sets: 3, reps: 10 },
      { name: "Unilateral cable pushdown", sets: 3, reps: 15 },
      { name: "Dips", sets: 3, reps: 10 }
    ]
  },

  7: { // Pull (Gymnastics pull + Row)
    coachTip: "No kipping today: strict pulling to build a solid base.",
    warmup: [
      { name: "Scapula pull ups", sets: 2, reps: 12 },
      { name: "Wall bodyweight rows", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Pull-ups (strict or banded)", sets: 5, reps: 4 },
      { name: "Lat pull down", sets: 3, reps: 10 },
      { name: "Cable row", sets: 3, reps: 10 },
      { name: "Rear delt flies", sets: 3, reps: 15 },
      { name: "Hammer grip dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  8: { // Legs (Snatch base + Single leg)
    coachTip: "Snatch: light, fast, perfect reps. You don't need max loads.",
    warmup: [
      { name: "Bodyweight squats", sets: 2, reps: 15 },
      { name: "Ankle rocks", sets: 2, reps: 15 },
      { name: "PVC pass-throughs", sets: 2, reps: 12 }
    ],
    workout: [
      { name: "Hang power snatch", sets: 6, reps: 2 },
      { name: "Barbell squat", sets: 3, reps: 8 },
      { name: "Bulgarian split squat", sets: 3, reps: 10 },
      { name: "Unilateral RDLs", sets: 3, reps: 10 },
      { name: "Good girls / bad girls", sets: 3, reps: 15 }
    ]
  },

  9: { // Push (Bench volume + Triceps)
    coachTip: "Controlled volume: keep 1–2 reps in reserve on each set.",
    warmup: [
      { name: "Around the worlds", sets: 2, reps: 20 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Barbell bench press", sets: 4, reps: 8 },
      { name: "Dumbbell chest flies", sets: 3, reps: 15 },
      { name: "Dips", sets: 3, reps: 12 },
      { name: "Cable crossover press", sets: 3, reps: 12 },
      { name: "Dumbbell skull crushers", sets: 3, reps: 12 }
    ]
  },

  10: { // Pull (Clean + Back strength)
    coachTip: "Power day: speed and clean positions beat ego loading.",
    warmup: [
      { name: "Scapula pull ups", sets: 2, reps: 10 },
      { name: "Empty bar high pull", sets: 2, reps: 8 }
    ],
    workout: [
      { name: "Power clean", sets: 7, reps: 1 },
      { name: "Chest supported dumbbell row", sets: 3, reps: 10 },
      { name: "Cable row", sets: 3, reps: 10 },
      { name: "Cable bar shrugs", sets: 3, reps: 12 },
      { name: "Overhand cable curl", sets: 3, reps: 15 }
    ]
  },

  11: { // Legs (Deadlift focus)
    coachTip: "Neutral spine always. If unsure, lower the load and own it.",
    warmup: [
      { name: "Bodyweight RDLs", sets: 2, reps: 12 },
      { name: "Glute bridges", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Deadlift", sets: 5, reps: 3 },
      { name: "Romanian deadlifts", sets: 3, reps: 8 },
      { name: "Walking lunges", sets: 3, reps: 14 },
      { name: "Hamstring curl", sets: 3, reps: 12 },
      { name: "Calf raises", sets: 3, reps: 15 }
    ]
  },

  12: { // Push (Jerk technique + Pressing)
    coachTip: "Jerk = fast feet + strong lockout overhead.",
    warmup: [
      { name: "PVC pass-throughs", sets: 2, reps: 12 },
      { name: "Scapula pushups", sets: 2, reps: 20 },
      { name: "Front rack stretch", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Split jerk (technique)", sets: 6, reps: 2 },
      { name: "Strict press", sets: 4, reps: 6 },
      { name: "Pushups", sets: 3, reps: 20 },
      { name: "Cable rope pushdown", sets: 3, reps: 15 },
      { name: "Dips", sets: 3, reps: 10 }
    ]
  },

  13: { // Pull (Gymnastics + Upper back)
    coachTip: "Chase quality pull-ups. Scale so every rep looks the same.",
    warmup: [
      { name: "Wall bodyweight rows", sets: 2, reps: 20 },
      { name: "Scapula pull ups", sets: 2, reps: 12 }
    ],
    workout: [
      { name: "Toes to bar (scaled)", sets: 4, reps: 8 },
      { name: "Pull-ups (strict or banded)", sets: 4, reps: 6 },
      { name: "Cable row", sets: 3, reps: 10 },
      { name: "Rear delt flies", sets: 3, reps: 15 },
      { name: "Hammer grip dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  14: { // Legs (Squat + Snatch accessory)
    coachTip: "Legs + positions. Keep your torso tall and your core braced.",
    warmup: [
      { name: "Glute bridges", sets: 2, reps: 20 },
      { name: "Bodyweight squats", sets: 2, reps: 15 },
      { name: "PVC overhead squat", sets: 2, reps: 10 }
    ],
    workout: [
      { name: "Overhead squat (light technique)", sets: 5, reps: 3 },
      { name: "Barbell squat", sets: 4, reps: 6 },
      { name: "Hamstring curl", sets: 3, reps: 12 },
      { name: "Leg extension", sets: 3, reps: 12 },
      { name: "Calf raises", sets: 3, reps: 15 }
    ]
  },

  15: { // Push (Gymnastics push + Chest)
    coachTip: "Own your bodyweight first, then add load.",
    warmup: [
      { name: "Around the worlds", sets: 2, reps: 20 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Ring dips (scaled if needed)", sets: 4, reps: 8 },
      { name: "Pushups", sets: 3, reps: 20 },
      { name: "Incline dumbbell press", sets: 3, reps: 10 },
      { name: "Cable crossover press", sets: 3, reps: 12 },
      { name: "Dumbbell skull crushers", sets: 3, reps: 12 }
    ]
  },

  16: { // Pull (Snatch pull + Shoulders/back)
    coachTip: "Keep the bar close. Feel lats and upper back doing the work.",
    warmup: [
      { name: "Leaning rear delt holds", sets: 2, reps: 20 },
      { name: "Scapula pull ups", sets: 2, reps: 12 },
      { name: "PVC pass-throughs", sets: 2, reps: 12 }
    ],
    workout: [
      { name: "Snatch high pull (light)", sets: 5, reps: 3 },
      { name: "Chest supported dumbbell row", sets: 3, reps: 10 },
      { name: "Dumbbell side raises", sets: 3, reps: 15 },
      { name: "Cable bar shrugs", sets: 3, reps: 12 },
      { name: "Alternating dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  17: { // Legs (Unilateral + Posterior chain)
    coachTip: "Single-leg work fixes imbalances. Control every rep.",
    warmup: [
      { name: "Bodyweight RDLs", sets: 2, reps: 15 },
      { name: "Glute bridges", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Romanian deadlifts", sets: 4, reps: 8 },
      { name: "Bulgarian split squat", sets: 3, reps: 12 },
      { name: "Hip thrust", sets: 3, reps: 10 },
      { name: "Hamstring curl", sets: 3, reps: 12 },
      { name: "Calf raises", sets: 3, reps: 15 }
    ]
  },

  18: { // Push (Press + Gymnastics)
    coachTip: "Mixing barbell + bodyweight keeps you athletic and strong.",
    warmup: [
      { name: "PVC pass-throughs", sets: 2, reps: 12 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Push press", sets: 5, reps: 3 },
      { name: "Dips (rings or bars)", sets: 3, reps: 10 },
      { name: "Pushups", sets: 3, reps: 20 },
      { name: "Cable chest flies", sets: 3, reps: 15 },
      { name: "Unilateral cable pushdown", sets: 3, reps: 15 }
    ]
  },

  19: { // Pull (Strict pull + Row)
    coachTip: "Today is all about strict pulling strength—no shortcuts.",
    warmup: [
      { name: "Scapula pull ups", sets: 2, reps: 12 },
      { name: "Wall bodyweight rows", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Pull-ups (strict or banded)", sets: 5, reps: 5 },
      { name: "Cable row", sets: 3, reps: 10 },
      { name: "Unilateral dumbbell row", sets: 3, reps: 10 },
      { name: "Rear delt flies", sets: 3, reps: 15 },
      { name: "Hammer grip dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  20: { // Legs (Clean accessory + Squat)
    coachTip: "Leg drive matters. Stay braced and keep your knees tracking.",
    warmup: [
      { name: "Bodyweight squats", sets: 2, reps: 15 },
      { name: "Glute bridges", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Front squat", sets: 5, reps: 3 },
      { name: "Barbell squat", sets: 3, reps: 8 },
      { name: "Walking lunges", sets: 3, reps: 14 },
      { name: "Unilateral RDLs", sets: 3, reps: 10 },
      { name: "Calf raises", sets: 3, reps: 15 }
    ]
  },

  21: { // Push (Bench + overhead accessory)
    coachTip: "Strong pressing comes from consistency—keep your form tight.",
    warmup: [
      { name: "Around the worlds", sets: 2, reps: 20 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Barbell bench press", sets: 4, reps: 6 },
      { name: "Strict press", sets: 4, reps: 6 },
      { name: "Dips", sets: 3, reps: 12 },
      { name: "Cable crossover press", sets: 3, reps: 12 },
      { name: "Dumbbell skull crushers", sets: 3, reps: 12 }
    ]
  },

  22: { // Pull (Upper back + snatch accessory)
    coachTip: "Build a strong upper back—it's your engine for barbell work.",
    warmup: [
      { name: "Leaning rear delt holds", sets: 2, reps: 20 },
      { name: "Wall bodyweight rows", sets: 2, reps: 20 },
      { name: "PVC pass-throughs", sets: 2, reps: 12 }
    ],
    workout: [
      { name: "Snatch grip deadlift (light)", sets: 4, reps: 6 },
      { name: "Chest supported dumbbell row", sets: 3, reps: 10 },
      { name: "Dumbbell side raises", sets: 3, reps: 15 },
      { name: "Cable bar shrugs", sets: 3, reps: 12 },
      { name: "Alternating dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  23: { // Legs (Mixed strength)
    coachTip: "Balance strength + volume. Keep your breathing under control.",
    warmup: [
      { name: "Bodyweight RDLs", sets: 2, reps: 15 },
      { name: "Bodyweight squats", sets: 2, reps: 15 }
    ],
    workout: [
      { name: "Romanian deadlifts", sets: 4, reps: 8 },
      { name: "Goblet squat", sets: 3, reps: 15 },
      { name: "Leg press", sets: 3, reps: 10 },
      { name: "Hamstring curl", sets: 3, reps: 12 },
      { name: "Calf raises", sets: 3, reps: 15 }
    ]
  },

  24: { // Push (Jerk + triceps)
    coachTip: "Overhead work needs a strong core—brace hard every rep.",
    warmup: [
      { name: "PVC pass-throughs", sets: 2, reps: 12 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Push jerk", sets: 6, reps: 2 },
      { name: "Incline dumbbell press", sets: 3, reps: 10 },
      { name: "Cable crossover press", sets: 3, reps: 12 },
      { name: "Unilateral cable pushdown", sets: 3, reps: 15 },
      { name: "Dumbbell skull crushers", sets: 3, reps: 12 }
    ]
  },

  25: { // Pull (Pull-ups + rows)
    coachTip: "Make your pull-ups cleaner each week—quality beats quantity.",
    warmup: [
      { name: "Scapula pull ups", sets: 2, reps: 12 },
      { name: "Wall bodyweight rows", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Pull-ups (strict or banded)", sets: 5, reps: 5 },
      { name: "Cable row", sets: 3, reps: 10 },
      { name: "Unilateral dumbbell row", sets: 3, reps: 10 },
      { name: "Rear delt flies", sets: 3, reps: 15 },
      { name: "Hammer grip dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  26: { // Legs (Squat + hinge)
    coachTip: "Own the squat pattern, then reinforce it with hinge work.",
    warmup: [
      { name: "Bodyweight squats", sets: 2, reps: 15 },
      { name: "Bodyweight RDLs", sets: 2, reps: 15 }
    ],
    workout: [
      { name: "Barbell squat", sets: 4, reps: 6 },
      { name: "Hip thrust", sets: 3, reps: 10 },
      { name: "Unilateral RDLs", sets: 3, reps: 10 },
      { name: "Walking lunges", sets: 3, reps: 14 },
      { name: "Calf raises", sets: 3, reps: 12 }
    ]
  },

  27: { // Push (Bench + dips)
    coachTip: "Pressing power comes from tight setup and consistent tempo.",
    warmup: [
      { name: "Around the worlds", sets: 2, reps: 20 },
      { name: "Scapula pushups", sets: 2, reps: 20 }
    ],
    workout: [
      { name: "Barbell bench press", sets: 4, reps: 6 },
      { name: "Dips (rings or bars)", sets: 4, reps: 8 },
      { name: "Pushups", sets: 3, reps: 20 },
      { name: "Cable crossover press", sets: 3, reps: 12 },
      { name: "Unilateral cable pushdown", sets: 3, reps: 15 }
    ]
  },

  28: { // Pull (Clean accessory + upper back)
    coachTip: "Keep your shoulders healthy: rows + rear delts every week.",
    warmup: [
      { name: "Leaning rear delt holds", sets: 2, reps: 20 },
      { name: "Scapula pull ups", sets: 2, reps: 12 }
    ],
    workout: [
      { name: "Hang power clean", sets: 6, reps: 2 },
      { name: "Chest supported dumbbell row", sets: 3, reps: 10 },
      { name: "Cable row", sets: 3, reps: 10 },
      { name: "Rear delt flies", sets: 3, reps: 15 },
      { name: "Alternating dumbbell curl", sets: 3, reps: 12 }
    ]
  },

  29: { // Legs (Volume + stability)
    coachTip: "Finish strong: clean reps, good depth, stable knees and hips.",
    warmup: [
      { name: "Glute bridges", sets: 2, reps: 20 },
      { name: "Bodyweight squats", sets: 2, reps: 15 }
    ],
    workout: [
      { name: "Front squat", sets: 4, reps: 5 },
      { name: "Leg press", sets: 3, reps: 10 },
      { name: "Bulgarian split squat", sets: 3, reps: 10 },
      { name: "Hamstring curl", sets: 3, reps: 12 },
      { name: "Calf raises", sets: 3, reps: 15 }
    ]
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
  "Empty bar complex (RDL + high pull + front rack)":
    "With an empty bar, perform a Romanian deadlift, then a high pull, then bring the bar into a front rack. Move smoothly and keep the bar close throughout.",

  // Press / push strength + calisthenics
  "Barbell bench press":
    "Lie on a flat bench and lower the bar to your chest with control, elbows about 45–60 degrees from your body. Press the bar back up, keeping your upper back tight and feet planted.",
  "Incline dumbbell press":
    "Lie on an incline bench and press dumbbells up and slightly inward. Lower under control to feel the upper chest, keeping shoulders packed down and back.",
  "Dumbbell chest flies":
    "Lie on a bench with dumbbells over your chest, elbows slightly bent. Open your arms wide under control, then squeeze your chest to bring the dumbbells back together.",
  "Cable crossover press":
    "Using cable handles, press forward and slightly across your body, finishing with a strong chest squeeze. Keep shoulders down and avoid shrugging.",
  "Cable chest flies":
    "Stand between two cable attachments and bring the handles together in front of your chest. Keep a slight bend in your elbows and focus on squeezing the chest at the end.",
  "Pushups":
    "Start in a plank with hands slightly wider than shoulder-width. Lower your chest to the floor with a tight core, then press back up. Keep elbows around 45 degrees and body in a straight line.",
  "Dips":
    "Using parallel bars, lower your body by bending your elbows, then push back up. Keep shoulders stable and torso slightly forward to engage chest and triceps.",
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
  "Push press":
    "Dip slightly with a vertical torso, then drive through your legs to help press the bar overhead. Finish with locked elbows and a stable core.",
  "Push jerk":
    "Dip and drive the bar up, then quickly re-dip under it to catch overhead with locked elbows. Stand tall to finish. Focus on speed and solid receiving position.",
  "Split jerk (technique)":
    "Drive the bar upward and split your legs to receive it overhead. Front shin stays mostly vertical, back knee slightly bent, and elbows locked out. Recover to standing under control.",
  "Handstand push-ups (scaled)":
    "Perform a vertical press against a wall, lowering your head with control and pressing back up. Scale with pike push-ups, an abmat, or reduced range of motion.",

  // Pull strength + calisthenics
  "Lat pull down":
    "Sit at a lat pulldown machine and pull the bar down to your upper chest while keeping your torso tall. Control the return and focus on driving elbows down.",
  "Cable row":
    "Sit at a cable row station and pull the handle toward your torso. Keep your back neutral and squeeze shoulder blades together at the end without leaning back excessively.",
  "Unilateral dumbbell row":
    "Support one hand on a bench, hinge at the hips, and row a dumbbell toward your hip. Keep your back flat and pull with your lat, not your shoulder.",
  "Chest supported dumbbell row":
    "Lie face down on an incline bench and row dumbbells up by pulling elbows back. Pause briefly at the top to squeeze your upper back.",
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
  "Pull-ups (strict or banded)":
    "Hang from a bar with a tight core and pull your chest toward the bar by driving elbows down. Lower under control to full extension. Scale using a band or a lower bar.",
  "Ring rows":
    "Hold rings with a tight body line and row your chest to the rings. Keep shoulders down, squeeze shoulder blades, and control the return.",
  "Toes to bar (scaled)":
    "Hang from a pull-up bar and raise your feet toward the bar while keeping shoulders active. Scale with knee raises, toes-to-ring, or a smaller range of motion.",

  // Legs / posterior chain
  "Barbell squat":
    "Set a barbell across your upper back, brace your core, and squat down by bending hips and knees. Keep your chest up and drive through your heels to stand.",
  "Front squat":
    "Hold the bar in the front rack with elbows high. Keep your torso upright as you squat, then drive up while maintaining a strong brace and stable knees.",
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
  "Snatch high pull (light)":
    "With a snatch-width grip, extend powerfully and pull the bar up close to your body with elbows high. Keep shoulders over the bar and prioritize bar path and speed.",
  "Snatch grip deadlift (light)":
    "Deadlift with a wide snatch grip. Keep your back neutral, lats engaged, and the bar close to your body. Use this to build positions and upper-back strength."
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
