// nwjsCheck.js

function isNWJS()
{
    // NW.js always exposes the nw object on the window
    if (typeof nw !== 'undefined' && typeof nw.require === 'function')
    {
        return true;
    }
    return false;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

