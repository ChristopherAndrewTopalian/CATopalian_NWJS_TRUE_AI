// worldVariables.js

const fs = require('fs');
const path = require('path');

// In NW.js we use Node's setInterval directly via nw.require
// This runs on the Node side - completely immune to any browser throttling

const nodeTimers = nw.require('timers');
const nodeSetInterval = nodeTimers.setInterval;
const nodeClearInterval = nodeTimers.clearInterval;

let thoughts = [];

let thinking;

let inputTimer001;

let A;
let B;

// process.cwd() gives us the folder our package.json is in - reliable in NW.js
const MEMORY_PATH = path.join(process.cwd(), 'src/js/thoughts/thoughts.json');

let visualNodes = {};

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

