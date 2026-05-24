// randomInputs.js

function randomInputs()
{
    inputTimer001 = setInterval(function()
    {
        A = Math.round(Math.random());
        ge('inputA').innerHTML = A;

        B = Math.round(Math.random());
        ge('inputB').innerHTML = B;
    }, 1000);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting