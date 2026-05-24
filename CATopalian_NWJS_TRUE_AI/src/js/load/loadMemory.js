// loadMemory.js

// LOAD
function loadMemory()
{
    fs.readFile(MEMORY_PATH, 'utf8', function(err, data)
    {
        if (err)
        {
            cl("No previous memory found. Initializing blank timeline.");
            thoughts = [];
            return;
        }

        try
        {
            thoughts = JSON.parse(data);
            cl("Memory loaded. " + thoughts.length + " thoughts restored.");

            if (ge('thoughtsDiv'))
            {
                ge('thoughtsDiv').textContent = data;
            }
        }
        catch(e)
        {
            cl("Memory file corrupted. Starting blank timeline.");
            thoughts = [];
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

