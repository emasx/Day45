alert('New section!');
// 89


// High-level 
// Garbage-collection = is an algorithm inside the JavaScript engine, which automatically removes old, unused objects from the computer memory.
// Interpreted or just-in-time compiled
// Multi-paradigm = a paradigm is an approach and an overall mindset of structuring our code which will ultimately direct the coding style and technique in a project that uses a certain paradigm.
                  // 1. Procedural programming
                  // 2. Object-oriented programming (OOP)
                  // 3. Functional programming (FP)

// Prototype-based object-oriented = almost everything in JavaScript is an OBJECT except for PRIMITIVE VALUES (numbers, strings).
// First-class functions = functions are treated just as regular variables. We can pass functions into other functions and we can even return functions from functions.
// Dynamic = In JavaScript we don't assign data types to variables.Instead they only became known when the JS engine executes our code.
// Single-threaded
// Non-blocking event loop


//  90. The JavaScript Engine and Runtime

// A JS engine = is simply a computer program that executes JavaScript code.
// Any JS engine always contains a CALL STACK and a HEAP.
// The CALL STACK is where our code is actually executed using somethig called execution contexts.
// The HEAP is an unstructured memory pool which stores all the objects that our application needs.

// COMPILATION vs INTERPRETATION

 // In COMPILATION, the entire source code is converted into machine code at once,and this machine code is written into a portable file that can be executed on any computer.

 // INTERPRETER runs through the source code and executes it line by line.

// 91 Execution Contexts and The Call Stack

// What is an execution context? 
// An execution context = is an abstract concept. It is an environment in which a piece of JS is executed.

// Inside any execution context is a so-called VARIABLE ENVIRONMENT + SCOPE CHAIN + THIS KEYWORD.In this environment all our VARIABLES and FUNCTION DECLARATIONS are stored and there is also a special arguments object.
