// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    mainDiv.style.gap = '30px';
    ba(mainDiv);

    //-//

    let leftContainer = ce('div');
    leftContainer.id = 'leftContainer';
    leftContainer.style.display = 'flex';
    leftContainer.style.flexDirection = 'column';
    mainDiv.append(leftContainer);

    //-//

    let rightContainer = ce('div');
    rightContainer.id = 'rightContainer';
    rightContainer.style.display = 'flex';
    rightContainer.style.flexDirection = 'column';
    rightContainer.style.gap = '4px';
    rightContainer.style.alignContent = 'right';
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
    currentThoughtDiv.textContent = currentThought;
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

    let diagram = ce('img');
    diagram.src = 'src/media/textures/catopalian_true_ai.png';
    diagram.style.width = '300px';
    leftContainer.append(diagram);

    //-//

    let thoughtsLabel = ce('div');
    thoughtsLabel.textContent = 'Thoughts';
    thoughtsLabel.style.textAlign = 'center';
    rightContainer.append(thoughtsLabel);

    let thoughtsDiv = ce('div');
    thoughtsDiv.id = 'thoughtsDiv';
    thoughtsDiv.style.overflow = 'scroll';
    thoughtsDiv.textContent = '[]';
    thoughtsDiv.style.width = '300px';
    thoughtsDiv.style.height = '330px';
    thoughtsDiv.style.textAlign = 'center';
    thoughtsDiv.style.overflow = 'scroll';
    thoughtsDiv.style.marginTop = '4px';
    rightContainer.append(thoughtsDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

