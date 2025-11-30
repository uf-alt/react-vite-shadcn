**Product Requirements Document (PRD): Minimalist Calculator**

---

### 1. Overview

This PRD defines the requirements for a **minimalist calculator web app** built using **ShadCN/UI components**. The application will focus on clean design, essential and advanced arithmetic functionality, and smooth user interaction. It will be intended for desktop browsers (Google Chrome only), with no mobile or cross-browser support required.

---

### 2. Requirements

#### 2.1 Functional Requirements

1. **Basic Operations:** The calculator should support addition (+), subtraction (−), multiplication (×), and division (÷).
2. **Scientific Operations:** Include square root (√), power (^), percentage (%), and parentheses for grouped expressions.
3. **Numeric Input:** Allow users to input numbers (0–9) via clickable buttons and keyboard input.
4. **Display:** A top section to show the current input and calculated result.
5. **Clear Button:** A button to reset all input and results.
6. **Equals Button:** Executes the current operation and displays the result.
7. **Decimal Support:** Allow input of decimal numbers.
8. **Keyboard Shortcuts:** Support numeric keys, operators (+, -, *, /), Enter for equals, and Backspace for clear last input.
9. **Calculation History:** Display a scrollable history panel of recent calculations with timestamps.
10. **Light/Dark Mode Toggle:** Allow switching between light and dark themes via a toggle button.

#### 2.2 Non-Functional Requirements

1. **Design:**

   * Interface should use ShadCN/UI components for consistency and aesthetic minimalism.
   * Layout should be centered and responsive only in width (no mobile optimization required).
   * The color palette should include light and dark modes with smooth transition.
   * Smooth transitions for hover, click, and active states using Tailwind CSS animations.

2. **Performance:**

   * Calculator must respond instantly to user input.
   * All operations must execute client-side without backend calls.

3. **Maintainability:**

   * Code should be modular and organized (components separated logically).
   * Use semantic HTML and accessible ARIA attributes.

4. **File Structure:**

   * Project root for .html files
   * `css/` for .css files
   * `js/` for .js files

---

### 3. Wireframe Sketches

#### Calculator Layout

```
 -------------------------------
|          Display Area          |
|--------------------------------|
| History ▼ |  √ |  ^ |  % |  ÷ |
|  7  |  8  |  9  |  ×  |  (   |
|  4  |  5  |  6  |  -  |  )   |
|  1  |  2  |  3  |  +  |  =   |
|  0  |  .  |  C  |  ⌫  | Mode |
 -------------------------------
```

---

### 4. Acceptance Criteria

* User can perform basic and scientific calculations accurately.
* UI elements use ShadCN/UI components with Tailwind styling.
* Display updates in real-time as inputs are entered.
* Keyboard shortcuts function as expected.
* Calculation history is viewable and scrollable.
* Light/dark mode toggling is smooth and preserved during a session.
* Application functions correctly in Google Chrome on desktop.