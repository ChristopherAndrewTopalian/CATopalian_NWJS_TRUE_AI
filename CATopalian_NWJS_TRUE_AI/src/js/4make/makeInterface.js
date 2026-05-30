// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    mainDiv.style.gap = '2px';
    ba(mainDiv);

    //-//

    let leftContainer = ce('div');
    leftContainer.id = 'leftContainer';
    leftContainer.style.display = 'flex';
    leftContainer.style.flexDirection = 'column';
    // Lock the left column size
    leftContainer.style.flex = '1';
    leftContainer.style.maxWidth = '320px'; // Keeps it close to the diagram
    mainDiv.append(leftContainer);

    //-//

    let rightContainer = ce('div');
    rightContainer.id = 'rightContainer';
    rightContainer.style.display = 'flex';
    rightContainer.style.flexDirection = 'column';
    rightContainer.style.gap = '4px';
    rightContainer.style.alignContent = 'left';
    // Tell the right side to take up all remaining space
    rightContainer.style.flex = '2';
    mainDiv.append(rightContainer);

    //-//

    rightContainer.append(makeTitleOfApp());

    //-//

    let controlsDiv = ce('div');
    controlsDiv.id = "controlsDiv";
    leftContainer.append(controlsDiv);

    //-//

    let saveBtn = ce('button');
    saveBtn.textContent = "Save Vessel Memory";
    saveBtn.id = 'saveBtn';
    saveBtn.style.cursor = "pointer";
    saveBtn.onclick = function()
    {
        //saveMemory();
        saveMemory("manual button");
    };
    controlsDiv.append(saveBtn);

    //-//

    let currentThoughtLabel = ce('div');
    currentThoughtLabel.textContent = 'Current Thought';
    leftContainer.append(currentThoughtLabel);

    //-//

    let currentThoughtDiv = ce('div');
    currentThoughtDiv.id = 'currentThoughtDiv';
    currentThoughtDiv.textContent = "INITIALIZING MATRIX...";
    currentThoughtDiv.style.wordBreak = 'break-all';
    leftContainer.append(currentThoughtDiv);

    //-//

    let inputA = ce('div');
    inputA.id = 'inputA';
    inputA.innerHTML = 'A';
    leftContainer.append(inputA);

    //-//

    let inputB = ce('div');
    inputB.id = 'inputB';
    inputB.innerHTML = 'B';
    leftContainer.append(inputB);

    //-//

    let diagramWrapper = ce('div');
    diagramWrapper.style.position = 'relative';
    diagramWrapper.style.display = 'inline-block';
    leftContainer.append(diagramWrapper);

    //-//

    let diagram = ce('img');
    diagram.src = 'src/media/textures/CATopalian_True_AI_Order.png';
    diagram.style.width = '300px';
    diagramWrapper.append(diagram);

    //-//

    // The invisible layer that holds the glowing nodes
    let nodeOverlay = ce('div');
    nodeOverlay.id = 'nodeOverlay';
    nodeOverlay.style.position = 'absolute';
    nodeOverlay.style.top = '0px';
    nodeOverlay.style.left = '0px';
    nodeOverlay.style.width = '100%';
    nodeOverlay.style.height = '100%';
    diagramWrapper.append(nodeOverlay);

    //-//

    // Listen for mouse clicks on the overlay
    nodeOverlay.addEventListener('mousedown', function(event) 
    {
        // event.offsetX and offsetY give the exact pixel coordinate 
        // relative to the top-left corner of the diagram image!
        let clickX = event.offsetX;
        let clickY = event.offsetY;

        console.log(`"NODE_NAME": { x: ${clickX}, y: ${clickY} },`);
    });

    //-//

    // THE MATRIX TOOLTIP
    let nodeTooltip = ce('div');
    nodeTooltip.style.position = 'absolute';
    nodeTooltip.style.backgroundColor = 'rgb(13, 2, 8)';
    nodeTooltip.style.color = 'rgb(0, 255, 65)';
    nodeTooltip.style.border = '1px solid rgb(0, 255, 65)'; // Glowing border
    nodeTooltip.style.borderRadius = '8px';
    nodeTooltip.style.padding = '2px 5px';
    nodeTooltip.style.fontFamily = '"Courier New", Courier, monospace';
    nodeTooltip.style.fontSize = '12px';
    nodeTooltip.style.fontWeight = 'bold';
    nodeTooltip.style.pointerEvents = 'none'; // Crucial: lets the mouse pass through it
    nodeTooltip.style.opacity = '0'; // Hidden by default
    nodeTooltip.style.transition = 'opacity 0.1s'; // Quick fade-in
    nodeTooltip.style.zIndex = '100'; // Keeps it above the glowing dots
    nodeTooltip.style.whiteSpace = 'nowrap'; // Prevents the text from wrapping

    nodeOverlay.append(nodeTooltip);

    //-//

    // The elegant for...in loop automatically grabs every Key in the Dictionary
    for (let key in nodeCoordinates) 
    {
        let coord = nodeCoordinates[key];   

        let dot = ce('div');
        dot.style.position = 'absolute';
        dot.style.left = coord.x + 'px';
        dot.style.top = coord.y + 'px';
        dot.style.width = '10px';    
        dot.style.height = '10px';
        dot.style.backgroundColor = 'rgb(0, 255, 65)'; 
        dot.style.borderRadius = '50%';        
        dot.style.boxShadow = '0px 0px 8px rgb(0, 255, 65)'; 
        dot.style.transform = 'translate(-50%, -50%)'; 
        dot.style.opacity = '0'; 
        dot.style.transition = 'opacity 0.2s ease-in-out'; 

        // HOVER EVENT LISTENERS
        dot.addEventListener('mouseenter', function()
        {
            // Format the string beautifully (e.g., "NODE 057 CORE")
            let formattedName = key.toUpperCase().replace(/_/g, " ");
            
            nodeTooltip.textContent = formattedName; 
            nodeTooltip.style.left = (coord.x + 10) + 'px';
            nodeTooltip.style.top = (coord.y - 20) + 'px';
            nodeTooltip.style.opacity = '1';
        });

        dot.addEventListener('mouseleave', function()
        {
            nodeTooltip.style.opacity = '0'; // Hide it when the mouse leaves
        });

        nodeOverlay.append(dot);
        visualNodes[key] = dot; 
    }

    //-//

    let thoughtsLabel = ce('div');
    thoughtsLabel.textContent = 'Thoughts';
    thoughtsLabel.style.textAlign = 'center';
    rightContainer.append(thoughtsLabel);

    //-//

    let thoughtsDiv = ce('div');
    thoughtsDiv.id = 'thoughtsDiv';
    thoughtsDiv.style.overflow = 'scroll';
    thoughtsDiv.textContent = '[]';
    thoughtsDiv.style.width = '500px';
    thoughtsDiv.style.height = '330px';
    thoughtsDiv.style.textAlign = 'center';
    thoughtsDiv.style.overflow = 'scroll';
    thoughtsDiv.style.marginTop = '4px';
    thoughtsDiv.style.color = 'rgb(0, 255, 65)';
    rightContainer.append(thoughtsDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

