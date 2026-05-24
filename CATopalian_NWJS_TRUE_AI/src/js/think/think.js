// think.js

function think(a, b)
{
    currentThought = [
        tau(a, b),
        con(a, b),
        xor(a, b),
        xnor(a, b),
        and(a, b),
        nand(a, b),
        or(a, b),
        nor(a, b),
        mi(a, b),
        mni(a, b),
        ci(a, b),
        cni(a, b),
        lp(a, b),
        lc(a, b),
        rp(a, b),
        rc(a, b),
    ];

    // add currentThought to thoughts array
    thoughts.push(currentThought);

    return thoughts[thoughts.length - 1];
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

