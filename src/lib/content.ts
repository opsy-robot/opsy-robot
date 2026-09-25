import { asset } from "./site"

// All page copy lives here so daily updates only touch this file.

export const nav = [
  { id: "purpose", num: "01", label: "Purpose" },
  { id: "goals", num: "02", label: "Goals" },
  { id: "progress", num: "03", label: "Progress" },
  { id: "software", num: "04", label: "Software" },
] as const

export const hero = {
  eyebrow: "Opsy Robot · the Opsy Duck build log",
  title: "Opsy Duck",
  titleAccent: "Rebuilt. And it really walks.",
  lead: "A personal, non-commercial research build — matched to the original as closely as the public evidence lets us.",
  github: "View on GitHub",
  record: {
    label: "Public record",
    title: "Our public talks with the Pollen team",
    sub: "Licensing, missing hardware details, and project background",
  },
  video: {
    src: asset("/media/hero.mp4"),
    poster: asset("/media/hero-poster.jpg"),
    caption: "Rebuild complete · the real robot on camera",
    stamp: "All tests passed · 2026.09.14",
  },
  stickers: [asset("/photos/portrait-closeup.jpg"), asset("/stages/06-full-rig-test.jpg"), asset("/photos/new2.jpg")],
}

export const records = {
  eyebrow: "Public Discord records · 2026.08.31",
  title: "Public exchanges with the Pollen team",
  lead: "These notes give project background, the licensing limits, and the hardware details that are still missing.",
  disclaimer: "They are not an authorization, certification, or commercial endorsement from Pollen Robotics.",
  items: [
    {
      n: "01",
      status: "Public team reply · 2026.08.31",
      tone: "lime" as const,
      title: "Licensing and buying in China",
      body: "A team member explained that the software uses Apache 2.0, while the 3D models carry a non-commercial license. Building one for yourself is fine; selling them falls outside that license. Distribution in China is still being explored.",
    },
    {
      n: "02",
      status: "Public team reply · 2026.08.31",
      tone: "lime" as const,
      title: "imu_to_dxl v2 stays closed",
      body: "A team member said there is currently no plan to open-source this PCB or to offer it on its own or as a sample — so a compatible board has to be researched independently.",
    },
    {
      n: "03",
      status: "Sent · awaiting reply",
      tone: "default" as const,
      title: "Opsy Robot has been introduced to the team",
      body: "The project was publicly described as a personal research build based in China, with the site and a power-safety question shared. This record holds a question only — it is not an official confirmation or authorization.",
    },
  ],
}

export const goals = {
  eyebrow: "Project goals",
  title: ["Three goals.", "One build."],
  items: [
    {
      n: "01",
      title: "Stay close to the original",
      body: "Use parts backed by official evidence, so the mechanics, electronics, and software stay as close to the original design as we can get them.",
      color: "bg-sun",
    },
    {
      n: "02",
      title: "Keep the process open",
      body: "Share sourcing, manufacturing, assembly, tests — and the failures — wherever licensing allows, so anyone can trace and repeat the work.",
      color: "bg-sky",
    },
    {
      n: "03",
      title: "Make it fun to live with",
      body: "Turn the build into a real companion — new moves, games, and voice tricks, shared the moment they work on the robot.",
      color: "bg-bubble",
    },
  ],
}

export const progress = {
  eyebrow: "Build progress",
  title: "Where the build stands",
  badgeTop: "Complete · stage 8 / 8",
  badgeBottom: "All 9 official policies passed",
  latest: {
    label: "Latest build",
    date: "2026.09.14 · Rebuild complete",
    video: asset("/media/rebuild.mp4"),
    poster: asset("/media/rebuild-poster.jpg"),
    play: "Play rebuild video",
  },
  cells: [
    { k: "Mechanical build", v: "Complete" },
    { k: "Project status", v: "Rebuild complete" },
    { k: "Latest checks", v: "All 9 official policies tested on the robot" },
  ],
  policies: {
    eyebrow: "08 / Official policies",
    title: "Standing was just the start. More moves unlocked.",
    sub: "All 9 official policies tested on the real robot — here it is out for a walk.",
    video: asset("/media/policies.mp4"),
    poster: asset("/media/policies-poster.jpg"),
    moves: ["Walking", "Stand & pose", "Sit-to-stand", "Ground pick", "Left kick", "Right kick", "Roller drive", "Roller crouch", "Forward roll"],
  },
  meet: {
    eyebrow: "Meet our duck",
    title: "Meet our duck.",
    sub: "Built for real. Here are a few close-ups.",
    photos: [
      { src: asset("/photos/portrait-side.jpg"), caption: "Head up. Hello, world.", tilt: "-2deg", color: "bg-sun" },
      { src: asset("/photos/new2.jpg"), caption: "Even the back view has style.", tilt: "1.5deg", color: "bg-sky" },
      { src: asset("/photos/new1.jpg"), caption: "Our tiny desk buddy.", tilt: "-1deg", color: "bg-lime" },
      { src: asset("/photos/portrait-closeup.jpg"), caption: "Zoom in on the details.", tilt: "2deg", color: "bg-bubble" },
    ],
  },
  swipeHint: "Swipe or tap to see all 8 stages",
  stages: [
    { n: "01", title: "Arrival inspection", img: asset("/stages/01-arrival-inspection.jpg") },
    { n: "02", title: "Single-servo 5 V test", img: asset("/stages/02-single-servo-test.jpg") },
    { n: "03", title: "Mechanical assembly", img: asset("/stages/03-joint-dry-fit.jpg") },
    { n: "04", title: "Software ready / waiting for PCBs", img: asset("/stages/04-leg-rig-test.jpg") },
    { n: "05", title: "PCB arrival / HAT power-up", img: asset("/stages/05-radxa-hat-power.jpg") },
    { n: "06", title: "15-servo rig test", img: asset("/stages/06-full-rig-test.jpg") },
    { n: "07", title: "Low-gain stand", img: asset("/stages/07-low-gain-stand.jpg") },
    { n: "08", title: "All 9 official policies passed", img: asset("/photos/new1.jpg") },
  ],
}

export const software = {
  eyebrow: "04 / Software & Ducklink",
  kicker: "Our first cross-platform app",
  title: "Ducklink",
  tagline: "Every duck, connected.",
  lead: "From the duck on your desk to a flock around the world — we're building one home to connect, control, and manage every Opsy Duck.",
  bullets: ["Phone · Tablet · Desktop", "Live video and online control", "Battery, temperature, and memory management", "Apps, driver updates, and voice wake-up"],
  building: "Building at full speed",
  slides: [
    { src: asset("/app/01-home.jpg"), label: "Your duck" },
    { src: asset("/app/02-hub.jpg"), label: "Hub world" },
    { src: asset("/app/03-control.jpg"), label: "Control preview" },
    { src: asset("/app/04-profile.jpg"), label: "Your preferences" },
  ],
  status: {
    eyebrow: "Software status",
    title: "Software's ready. The add-ons are coming online.",
    meta: "Radxa ZERO 3W · board update 2026.09.06",
    selfie: { src: asset("/photos/first-selfie.jpg"), eyebrow: "First selfie · 09.06", label: "First selfie" },
  },
  release: {
    eyebrow: "Official stable release",
    name: "daemon v0.10.0",
    os: "Armbian 26.2.1 · Debian 13.3 · ARM64",
    verified: "Signatures and all 52 release files checked.",
    stats: [
      { v: "9", k: "trained policies" },
      { v: "82", k: "sound files" },
      { v: "0", k: "missed fake-mode ticks" },
    ],
  },
  checks: [
    {
      n: "01",
      title: "RL policies",
      state: "Robot-tested",
      body: "Every one of the nine official policies in this build passed on the robot: walking, standing and body-pose control, sit-to-stand, ground pick, left kick, right kick, roller locomotion, roller crouch, and forward roll.",
      note: "2026.09.16 · results confirmed by the project lead",
    },
    {
      n: "02",
      title: "NPU vision inference",
      state: "Running",
      body: "The official duck_detect model finished on-board inference across 14 official images.",
      note: "4 detections · p50 46.3 ms · 0 runtime errors · not a camera test",
    },
    {
      n: "03",
      title: "Camera and video stack",
      state: "First capture passed",
      body: "The IMX219 took its first 1280×720 capture, and 60 frames of a 720p test pattern also cleared hardware encoding.",
      note: "2026.09.06 · basic capture and orientation passed · live streaming next",
    },
    {
      n: "04",
      title: "Controller and audio",
      state: "Hardware verified",
      body: "The Xbox controller, the onboard microphone, and the 4 Ω / 3 W speaker all passed real-hardware checks.",
      note: "82 WAV files · 40+ seconds of non-stop official-sound playback passed",
    },
  ],
  roadmap: {
    eyebrow: "Next software",
    title: "Play roadmap",
    items: ["Real-hardware bring-up", "Controller-driven actions", "Camera perception", "Audio and character interaction", "Voice wake-up", "Battery monitoring", "Head-mounted display"],
  },
}

export const footer = {
  top: "Back to top",
}
