// showNWJSWarning.js

function showNWJSWarning()
{
    let warningDiv = ce('div');
    warningDiv.id = 'warningDiv';
    warningDiv.style.padding = '40px';
    warningDiv.style.fontFamily = 'Arial';
    warningDiv.style.background = 'rgb(17, 17, 17)';
    warningDiv.style.minHeight = '100vh';
    ba(warningDiv);

    //-//

    let title = ce('div');
    title.id = 'warningTitle';
    title.textContent = 'CATopalian NWJS TRUE AI';
    title.style.fontSize = '22px';
    title.style.fontWeight = 'bold';
    title.style.color = 'rgb(170, 170, 170)';
    title.style.marginBottom = '6px';
    warningDiv.append(title);

    //-//

    let subtitle = ce('div');
    subtitle.id = 'warningSubtitle';
    subtitle.textContent = 'A living logical mind - built in JavaScript, running on NW.js.';
    subtitle.style.fontSize = '13px';
    subtitle.style.color = 'rgb(85, 85, 85)';
    subtitle.style.marginBottom = '30px';
    warningDiv.append(subtitle);

    //-//

    let warningMsg = ce('div');
    warningMsg.id = 'warningMsg';
    warningMsg.textContent = 'This vessel requires NW.js to run.';
    warningMsg.style.fontSize = '15px';
    warningMsg.style.fontWeight = 'bold';
    warningMsg.style.color = 'rgb(224, 123, 84)';
    warningMsg.style.marginBottom = '12px';
    warningDiv.append(warningMsg);

    //-//

    let warningReason = ce('div');
    warningReason.id = 'warningReason';
    warningReason.textContent = 'A regular browser cannot read or write memory files. Without persistence, the vessel has no continuity of experience. To preserve the integrity of the system, it will not start here.';
    warningReason.style.fontSize = '13px';
    warningReason.style.lineHeight = '1.8';
    warningReason.style.color = 'rgb(136, 136, 136)';
    warningReason.style.marginBottom = '30px';
    warningReason.style.maxWidth = '560px';
    warningDiv.append(warningReason);

    //-//

    let divider = ce('div');
    divider.id = 'warningDivider';
    divider.style.width = '560px';
    divider.style.height = '1px';
    divider.style.background = 'rgb(51, 51, 51)';
    divider.style.marginBottom = '30px';
    warningDiv.append(divider);

    //-//

    let howTitle = ce('div');
    howTitle.id = 'howTitle';
    howTitle.textContent = 'HOW TO RUN IT';
    howTitle.style.fontSize = '15px';
    howTitle.style.fontWeight = 'bold';
    howTitle.style.color = 'rgb(78, 204, 163)';
    howTitle.style.letterSpacing = '2px';
    howTitle.style.marginBottom = '20px';
    warningDiv.append(howTitle);

    //-//

    let step1Label = ce('div');
    step1Label.id = 'step1Label';
    step1Label.textContent = 'Step 1';
    step1Label.style.fontSize = '12px';
    step1Label.style.fontWeight = 'bold';
    step1Label.style.color = 'rgb(255, 224, 102)';
    step1Label.style.letterSpacing = '1px';
    step1Label.style.marginBottom = '4px';
    warningDiv.append(step1Label);

    let step1Desc = ce('div');
    step1Desc.id = 'step1Desc';
    step1Desc.textContent = 'Download NW.js - the Normal build for your operating system (Windows, Mac, or Linux).';
    step1Desc.style.fontSize = '13px';
    step1Desc.style.color = 'rgb(170, 170, 170)';
    step1Desc.style.lineHeight = '1.7';
    step1Desc.style.marginBottom = '8px';
    step1Desc.style.maxWidth = '560px';
    warningDiv.append(step1Desc);

    let step1Link = ce('a');
    step1Link.id = 'step1Link';
    step1Link.textContent = '→ Download NW.js at nwjs.io';
    step1Link.href = 'https://nwjs.io';
    step1Link.target = '_blank';
    step1Link.style.fontSize = '12px';
    step1Link.style.color = 'rgb(78, 204, 163)';
    step1Link.style.display = 'block';
    step1Link.style.marginBottom = '20px';
    warningDiv.append(step1Link);

    //-//

    let step2Label = ce('div');
    step2Label.id = 'step2Label';
    step2Label.textContent = 'Step 2';
    step2Label.style.fontSize = '12px';
    step2Label.style.fontWeight = 'bold';
    step2Label.style.color = 'rgb(255, 224, 102)';
    step2Label.style.letterSpacing = '1px';
    step2Label.style.marginBottom = '4px';
    warningDiv.append(step2Label);

    let step2Desc = ce('div');
    step2Desc.id = 'step2Desc';
    step2Desc.textContent = 'Download or clone this project so you have the folder on your computer.';
    step2Desc.style.fontSize = '13px';
    step2Desc.style.color = 'rgb(170, 170, 170)';
    step2Desc.style.lineHeight = '1.7';
    step2Desc.style.marginBottom = '8px';
    step2Desc.style.maxWidth = '560px';
    warningDiv.append(step2Desc);

    let step2Link = ce('a');
    step2Link.id = 'step2Link';
    step2Link.textContent = '→ CATopalian NWJS TRUE AI on GitHub';
    step2Link.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_NWJS_TRUE_AI';
    step2Link.target = '_blank';
    step2Link.style.fontSize = '12px';
    step2Link.style.color = 'rgb(78, 204, 163)';
    step2Link.style.display = 'block';
    step2Link.style.marginBottom = '20px';
    warningDiv.append(step2Link);

    //-//

    let step3Label = ce('div');
    step3Label.id = 'step3Label';
    step3Label.textContent = 'Step 3 - Drag and Drop (Easiest)';
    step3Label.style.fontSize = '12px';
    step3Label.style.fontWeight = 'bold';
    step3Label.style.color = 'rgb(255, 224, 102)';
    step3Label.style.letterSpacing = '1px';
    step3Label.style.marginBottom = '4px';
    warningDiv.append(step3Label);

    let step3Desc = ce('div');
    step3Desc.id = 'step3Desc';
    step3Desc.textContent = 'Drag the entire project folder onto nw.exe (Windows) or nw.app (Mac). The vessel opens immediately.';
    step3Desc.style.fontSize = '13px';
    step3Desc.style.color = 'rgb(170, 170, 170)';
    step3Desc.style.lineHeight = '1.7';
    step3Desc.style.marginBottom = '20px';
    step3Desc.style.maxWidth = '560px';
    warningDiv.append(step3Desc);

    //-//

    let step4Label = ce('div');
    step4Label.id = 'step4Label';
    step4Label.textContent = 'Step 3 - Command Line (Alternative)';
    step4Label.style.fontSize = '12px';
    step4Label.style.fontWeight = 'bold';
    step4Label.style.color = 'rgb(255, 224, 102)';
    step4Label.style.letterSpacing = '1px';
    step4Label.style.marginBottom = '4px';
    warningDiv.append(step4Label);

    let step4Desc = ce('div');
    step4Desc.id = 'step4Desc';
    step4Desc.textContent = 'Open a terminal, navigate into the project folder, and run:';
    step4Desc.style.fontSize = '13px';
    step4Desc.style.color = 'rgb(170, 170, 170)';
    step4Desc.style.lineHeight = '1.7';
    step4Desc.style.marginBottom = '8px';
    step4Desc.style.maxWidth = '560px';
    warningDiv.append(step4Desc);

    let codeBlock = ce('div');
    codeBlock.id = 'codeBlock';
    codeBlock.textContent = 'nw .';
    codeBlock.style.fontFamily = 'Courier New';
    codeBlock.style.fontSize = '13px';
    codeBlock.style.color = 'rgb(78, 204, 163)';
    codeBlock.style.background = 'rgb(26, 26, 26)';
    codeBlock.style.padding = '10px 16px';
    codeBlock.style.borderRadius = '4px';
    codeBlock.style.display = 'inline-block';
    codeBlock.style.marginBottom = '30px';
    warningDiv.append(codeBlock);

    //-//

    let footer = ce('div');
    footer.id = 'warningFooter';
    footer.textContent = '© 2000–2026 Christopher Andrew Topalian - All Rights Reserved - Dedicated to God the Father.';
    footer.style.fontSize = '11px';
    footer.style.color = 'rgb(68, 68, 68)';
    footer.style.lineHeight = '1.8';
    footer.style.maxWidth = '560px';
    footer.style.marginTop = '10px';
    warningDiv.append(footer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

