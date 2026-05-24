// saveMemory.js

// SAVE

function saveMemory(reason)
{
    let stringifiedThoughts = [];

    for (let i = 0; i < thoughts.length; i++)
    {
        stringifiedThoughts.push(JSON.stringify(thoughts[i]));
    }

    let formattedData = "[\n  " + stringifiedThoughts.join(",\n  ") + "\n]";

    fs.writeFile(MEMORY_PATH, formattedData, 'utf8', function(err)
    {
        if (err)
        {
            cl("Save failed: " + err);
            return;
        }

        cl("Memory saved. " + thoughts.length + " thoughts. Reason: " + (reason || "manual"));
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

