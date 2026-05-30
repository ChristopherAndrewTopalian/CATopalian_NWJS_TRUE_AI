// think.js

function think(a, b)
{
    let currentThought = [
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
    node_017_tau_con_mi_ci(a, b),
    node_018_rp_lc_xnor_xor(a, b),
    node_019_tau_con_cni_mni(a, b),
    node_020_lp_rc_xor_xnor(a, b),
    node_021_tau_con_and_nor(a, b),
    node_022_ci_cni_nor_and(a, b),
    node_023_ci_mni_nor_and(a, b),
    node_024_nor_nand_rp_lp(a, b),
    node_025_nor_nand_rp_rc(a, b),
    node_026_nand_nor_xnor_xor(a, b),
    node_027_nor_nand_lp_lc(a, b),
    node_028_nor_nand_lc_rc(a, b),
    node_029_ci_mni_or_nand(a, b),
    node_030_mi_mni_or_nand(a, b),
    node_031_tau_con_or_nand(a, b),
    node_032_ci_cni_or_nand(a, b),
    node_033_mi_cni_or_nand(a, b),
    node_034_and_or_rc_lc(a, b),
    node_035_and_or_rp_rc(a, b),
    node_036_and_or_xor_xnor(a, b),
    node_037_and_or_lp_lc(a, b),
    node_038_lp_rp_and_or(a, b),
    node_039_mi_cni_and_nor(a, b),
    node_040_mi_mni_and_nor(a, b),
    node_041_tau_con_lp_rp(a, b),
    node_042_ci_cni_rp_lp(a, b),
    node_043_nor_or_ci_mni_rp_lp(a, b),
    node_044_ci_mni_rp_rc(a, b),
    node_045_ci_mni_xnor_xor(a, b),
    node_046_ci_mni_lc_lp(a, b),
    node_047_and_nand_ci_mni_lc_rc(a, b),
    node_048_mi_mni_lc_rc(a, b),
    node_049_tau_con_lc_rc(a, b),
    node_050_ci_cni_rc_lc(a, b),
    node_051_nor_or_mi_cni_lc_rc(a, b),
    node_052_mi_cni_rc_rp(a, b),
    node_053_mi_cni_xor_xnor(a, b),
    node_054_mi_cni_lp_lc(a, b),
    node_055_and_nand_mi_cni_lp_rp(a, b),
    node_056_mi_mni_lp_rp(a, b),
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

