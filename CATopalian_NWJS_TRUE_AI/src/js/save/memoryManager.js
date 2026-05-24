// memoryManager.js   tiered save rhythm

// keep in RAM, display in viewport
const SHORT_TERM_LIMIT = 16;

// write to disk every 500 thoughts
const LONG_TERM_INTERVAL = 500;

// also autosave every 30 seconds
const AUTOSAVE_MS = 30000;

let thoughtsSinceLastSave = 0;

function thinkAndRecord(a, b)
{
    let currentThought = think(a, b);   // our existing think() - unchanged

    thoughtsSinceLastSave++;

    // Trigger a disk write every N thoughts
    if (thoughtsSinceLastSave >= LONG_TERM_INTERVAL)
    {
        //saveMemory();
        saveMemory("500-thought threshold");
        thoughtsSinceLastSave = 0;
    }

    return currentThought;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

