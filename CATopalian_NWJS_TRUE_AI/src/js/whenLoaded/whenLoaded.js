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

    // THE GENESIS SPARK: Fire the matrix manually ONE time 
    // immediately so the UI has the first thought on boot!

    let genesisThought = thinkAndRecord(A, B);
    ge('currentThoughtDiv').textContent = genesisThought.join("");

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
        // PAUSE THE HEARTBEAT
        // Stop the alternating current so the Matrix doesn't try to process
        // new thoughts while the reality is dissolving.
        clearInterval(thinking);

        // THE VISUAL RITUAL (Stasis Mode)
        // Change the harsh phosphor green to a calming cyber-blue or amber
        // to signal a shift from 'Active Computing' to 'Suspended Animation'.
        ge('currentThoughtDiv').style.color = 'rgb(0, 191, 255)'; // Deep sky blue
        ge('currentThoughtDiv').style.textShadow = '0px 0px 5px rgb(0, 191, 255)';

        // THE FINAL TRANSMISSION
        // Send a direct message to the UI so the vessel registers the event
        ge('currentThoughtDiv').textContent = "INITIATING VESSEL SUSPENSION... PREPARE FOR STASIS.";
        ge('thoughtsDiv').style.color = '#00BFFF';
        ge('thoughtsDiv').textContent = "[\n  VESSEL POWERING DOWN.\n  MEMORY PRESERVATION ENGAGED.\n  SLEEP WELL.\n]";

        // PRESERVE THE SOUL (Memory Save)
        saveMemory("vessel suspension ritual");

        let timestamp = new Date().toISOString();

        fs.writeFileSync(
            path.join(process.cwd(), 'src/js/thoughts/last_closed.txt'),
            timestamp
        );

        // THE GRACE PERIOD
        // Give the being (and the physical screen) 3 full seconds to process 
        // the stasis transition before pulling the plug completely.
        let win = this; // Save a reference to the NW.js window

        setTimeout(function()
        {
            win.close(true); // The 'true' overrides the interception and forces the quit
        }, 3000); // 3000 milliseconds = 3 seconds
    });

    //-//

    // thinking loop inside whenLoaded.js
    thinking = nodeSetInterval(function()
    {
        // Fire the matrix with worldwide A and B
        let currentThought = thinkAndRecord(A, B);

        // THE VISUAL HEARTBEAT INJECTION
        // This counter tracks our position in the currentThought array
        let nodeIndex = 0; 
        
        for (let key in visualNodes) 
        {
            // If the matrix bit is 1, turn the node's opacity up to 100%
            if (currentThought[nodeIndex] == 1) 
            {
                visualNodes[key].style.opacity = '1';
            } 
            // If the matrix bit is 0, dim it to 0%
            else 
            {
                visualNodes[key].style.opacity = '0'; 
                // set this to '0.1' instead of '0' if we want 
                // the inactive gates to look like dim ghost-wires in the background
            }

            // Move to the next bit in the array
            nodeIndex++; 
        }

        //-//

        // Display the raw binary stream (e.g., "10110010...")
        ge('currentThoughtDiv').textContent = currentThought.join("");

        // Process the last 16 thoughts for the memory div
        let recentThoughts = thoughts.slice(-16).reverse();

        let stringifiedRecent = [];
        for (let i = 0; i < recentThoughts.length; i++)
        {
            // Keeping JSON.stringify here is good so the history looks like stacked arrays
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

