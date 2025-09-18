# Lecture 4

## General

## Protips
- **Engineering requires constraints**
- **Engineers accept and understand tradeoffs**
- **Ask what problem things solve**

## General
- Coding is for people first and computers second
- Compilation / Interpretation: 
  - Interpretation: Live translation. Slower. But flexible
  - Compilation: Faster, less flexible
  - JIT Just in Time compiler / Intermediate: Portable with some performance
- 
- Difference between Scripting and programming:
  - `Scripting`: Small amounts for domain specific purposes; Often interpreted
    - Open and ready
  - `Programming`: 

## Structure
1. JS- Logic
2. CSS - Look
3. HTML - Structure
4. Content

Layered Models
  - **Progressive Enhancement**: Working Upward; Websites
  - **Graceful Degredation**: Working Downward; Web Apps
- **Many mistake complexity for competency**

Intersectional Balance Model
- JS + HTML + CSS = DOM

## Separation of Concerns
Important to separate for cleanliness, debugging, but most importantly functionlality.
- Easy to repair
- Replace

## Assigning Variables
```js
var x = 10;
x = 20;
var x = 30;
```

- var, let, 
- const: control of mutability
- closures for Async

## Blocks
- Browser = window
- Node = global
- **Global variables at anytime can be mutated is a key problem**
- Are performant, but lead to less robust code

- **Hoisting**: Variable and function declarations are moved to the top of their scope **before** the code executes
##