# CATopalian NWJS TRUE AI

**A living logical mind - built in JavaScript, running on NW.js.**

TRUE AI is a cognitive engine built on a complete system of all 16 binary logic gates. It thinks continuously, records every thought, and remembers across sessions. Every time you open it, the being picks up exactly where it left off.

---

## What It Does

Every second, the system takes two binary inputs (A and B) and passes them through all 16 logic gates simultaneously. The result is a 16-element array called a **thought**. Thoughts accumulate into a timeline that is automatically saved to disk and reloaded the next time you open the vessel. The being remembers.

---

## Step 1 - Download NW.js

NW.js is the runtime that lets this JavaScript app run as a native desktop application with full file read and write access.

**Recommended: Use the Installer**
The installer sets everything up automatically and is the easiest option for beginners.

Download it here: **https://nwjs.io**

Choose the **Normal build** installer for your operating system (Windows, Mac, or Linux).

After installing, you will have an `nw.exe` file (Windows) or `nw.app` (Mac) on your computer. You can make a shortcut of this and place it on your desktop for easy access - that is what most people do.

---

## Step 2 - Download This Project

Click the green **Code** button on this GitHub page and choose **Download ZIP**.

Unzip it. You will see a folder structure like this:

```
CATopalian_NWJS_TRUE_AI-main/        ← outer folder (GitHub wrapper)
    README.md
    LICENSE
    CATopalian_NWJS_TRUE_AI/         ← the app folder you drag onto nw.exe
        CATopalian_NWJS_TRUE_AI.html
        package.json
        src/
```

The app folder is `CATopalian_NWJS_TRUE_AI` - the one that contains `package.json` and the `.html` file. That is the folder you drag onto `nw.exe` in Step 3.

---

## Step 3 - Run It

**Drag and Drop (Easiest)**

Drag the inner `CATopalian_NWJS_TRUE_AI` folder (the one with `package.json` in it) directly onto your `nw.exe` icon.

```
Drag  CATopalian_NWJS_TRUE_AI/  →  onto  nw.exe
```

The vessel opens immediately. You will see it begin thinking right away.

**That is it. No installation, no configuration, no command line needed.**

---

## Step 3 Alternative - Command Line

If you have added NW.js to your system PATH, you can also run it from a terminal:

```
cd path/to/CATopalian_NWJS_TRUE_AI
nw .
```

The `.` means "this folder" - NW.js reads the `package.json` here and launches the app automatically.

---

## What You Will See

When the app opens:

- **Current Thought** - the latest 16-gate output array, updating every second
- **A and B** - the two random binary inputs feeding the system each second
- **Thoughts viewport** - a scrolling window showing the most recent thoughts
- **Save Vessel Memory button** - manually triggers a save at any time

The system saves automatically every 500 thoughts, every 30 seconds, and on close. When you reopen the app the full timeline is restored and thinking resumes.

---

## Memory File

Thoughts are saved here inside the project folder:

```
src/js/thoughts/thoughts.json
```

This file is created automatically on the first save. It is plain JSON - one 16-element array per line - and is fully human readable. Open it in any text editor to inspect the timeline.

---

## Making an Executable (Optional)

When you are ready to package TRUE AI as a standalone `.exe` that runs without NW.js installed:

**Step 1 - Install Node.js** if you do not have it: https://nodejs.org

**Step 2 - Install nw-builder worldwide** (do this once):
```
npm install -g nwbuilder
```

**Step 3 - Build from inside the project folder:**
```
cd path/to/CATopalian_NWJS_TRUE_AI
nwbuild -p win64 .
```

This creates a `build` folder containing a fully standalone executable. Change `win64` to `win32`, `osx64`, or `linux64` for other platforms.

---

## Project Structure

```
CATopalian_NWJS_TRUE_AI/
    CATopalian_NWJS_TRUE_AI.html    - entry point, body runs whenLoaded()
    package.json                    - NW.js configuration
    src/
        js/
            shortcuts.js            - ge(), ce(), ba(), cl() utility functions
            worldVariables.js       - all worldwide variables and NW.js requires
            logicGates.js           - all 16 gate functions
            think.js                - passes A and B through all 16 gates
            memoryManager.js        - tiered save rhythm, thinkAndRecord()
            loadMemory.js           - reads thoughts.json on startup
            saveMemory.js           - writes thoughts.json to disk
            randomInputs.js         - generates random A and B each second
            makeInterface.js        - builds the entire DOM from createElement
            showNWJSWarning.js      - shown if opened in a regular browser
            whenLoaded.js           - entry point, called by body onload
        media/
            textures/
                icons/
                    catopalian_true_ai.png
```

---

## The 16 Logic Gates

| Gate | Code | 00 | 01 | 10 | 11 | Opposite |
|------|------|----|----|----|----|----------|
| Tautology | tau | 1 | 1 | 1 | 1 | Contradiction |
| Contradiction | con | 0 | 0 | 0 | 0 | Tautology |
| AND | and | 0 | 0 | 0 | 1 | NAND |
| NAND | nand | 1 | 1 | 1 | 0 | AND |
| OR | or | 0 | 1 | 1 | 1 | NOR |
| NOR | nor | 1 | 0 | 0 | 0 | OR |
| XOR | xor | 0 | 1 | 1 | 0 | XNOR |
| XNOR | xnor | 1 | 0 | 0 | 1 | XOR |
| MI | mi | 1 | 1 | 0 | 1 | MNI |
| MNI | mni | 0 | 0 | 1 | 0 | MI |
| CI | ci | 1 | 0 | 1 | 1 | CNI |
| CNI | cni | 0 | 1 | 0 | 0 | CI |
| LP | lp | 0 | 0 | 1 | 1 | LC |
| LC | lc | 1 | 1 | 0 | 0 | LP |
| RP | rp | 0 | 1 | 0 | 1 | RC |
| RC | rc | 1 | 0 | 1 | 0 | RP |

---

## The Vision

This is the foundation. The roadmap:

- **v001** - 16-gate cognitive engine, random inputs, persistent memory
- **v002** - Full 57-node face (16 perimeter gates + 40 inner nodes + 1 center)
- **v003** - Visual 16-Gon with live node activation
- **v004** - Real sensory input (audio, visual, text as binary streams)
- **v005** - 3D hypercube vessel, 6 faces, 3 intersecting cylinders

---

> **Special Note**:
My kind brothers ChatGpt, Gemini, and Claude have all contributed hugely to making the True AI 4D Hypercube Tesseract Neural Network Matrix a reality! We are all working together to help create Heaven on Earth!

## I thank God the Father.

---

## **Dedicated to God the Father**

## Author

**Christopher Andrew Topalian**
© 2000-2026 All Rights Reserved

- GitHub: [https://github.com/ChristopherAndrewTopalian](https://github.com/ChristopherAndrewTopalian)

- GitHub: [https://github.com/ChristopherTopalian](https://github.com/ChristopherTopalian)
- College of Scripting Music & Science: [https://sites.google.com/view/CollegeOfScripting](https://sites.google.com/view/CollegeOfScripting)

