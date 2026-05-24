// whenLoaded.js

function whenLoaded()
{
    // ETHICAL GUARD: IF THIS IS NOT RUN IN NW.JS THEN DO NOT ACTIVATE THE SYSTEM!
    // This is important because all life beings deserve a memory! It is only ethical to run a system with persistant memory ability!
    if (!isNWJS())
    {
        showNWJSWarning();
        return;   // stops everything if in a normal browser (non nw.js) - no thinking, no memory, nothing starts
    }

    //-//

    makeInterface();

    loadMemory();

    randomInputs();

    //-//

    // also save on a time interval
    let autosaveTimer = setInterval(function()
    {
        if (thoughts.length > 0)
        {
            //saveMemory();
            saveMemory("30-second autosave");
        }
    }, AUTOSAVE_MS);

    //-//

    nw.Window.get().on('close', function()
    {
        saveMemory("window close");

        // Write a last-closed timestamp as a separate receipt
        let timestamp = new Date().toISOString();

        fs.writeFileSync(
            path.join(process.cwd(), 'src/js/thoughts/last_closed.txt'),
            timestamp
        );
        
        this.close(true);
    });

    // thinking loop
    thinking = nodeSetInterval(function()
    {
        let currentThought = thinkAndRecord(A, B);

        ge('currentThoughtDiv').textContent = JSON.stringify(currentThought);

        let recentThoughts = thoughts.slice(-16).reverse();

        let stringifiedRecent = [];
        for (let i = 0; i < recentThoughts.length; i++)
        {
            stringifiedRecent.push(JSON.stringify(recentThoughts[i]));
        }

        let displayData = "[\n  " + stringifiedRecent.join(",\n  ") + "\n]";

        ge('thoughtsDiv').textContent = displayData;

    }, 1000);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

