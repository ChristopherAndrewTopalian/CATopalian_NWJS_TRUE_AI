// fibn.js

function fibn(array, name)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].name.toLowerCase() === name.toLowerCase())
        {
            return array[i];
        }
    }
    return null;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

