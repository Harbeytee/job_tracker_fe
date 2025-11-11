import { QuestionsDatabase } from "../types/interfaces";

// Sample question database
export const questionsDB: QuestionsDatabase = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correct: 0,
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<head>", "<h6>", "<heading>", "<h1>"],
      correct: 3,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<newline>"],
      correct: 1,
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["title", "src", "alt", "longdesc"],
      correct: 2,
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        "<a url='http://example.com'>",
        "<a href='http://example.com'>",
        "<link>http://example.com</link>",
        "<hyperlink>http://example.com</hyperlink>",
      ],
      correct: 1,
    },
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      correct: 1,
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "bg-color"],
      correct: 2,
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: [".demo", "#demo", "*demo", "demo"],
      correct: 1,
    },
    {
      question: "Which property is used to change the text color?",
      options: ["text-color", "color", "font-color", "text"],
      correct: 1,
    },
    {
      question: "How do you make text bold in CSS?",
      options: ["font-weight: bold", "text: bold", "font: bold", "style: bold"],
      correct: 0,
    },
  ],
  javascript: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      correct: 3,
    },
    {
      question: "What is the correct syntax for a function in JavaScript?",
      options: [
        "function myFunc()",
        "function:myFunc()",
        "def myFunc()",
        "func myFunc()",
      ],
      correct: 0,
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: ["if i = 5", "if (i == 5)", "if i == 5 then", "if i = 5 then"],
      correct: 1,
    },
    {
      question: "What is the correct way to write an array?",
      options: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      ],
      correct: 2,
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()",
        "Call.myFunction()",
      ],
      correct: 1,
    },
  ],
  react: [
    {
      question: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A database",
        "A programming language",
        "A CSS framework",
      ],
      correct: 0,
    },
    {
      question: "Which hook is used for state management?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correct: 1,
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Extension",
        "Java XML",
      ],
      correct: 0,
    },
    {
      question: "How do you pass data to a child component?",
      options: [
        "Through props",
        "Through state",
        "Through context",
        "Through events",
      ],
      correct: 0,
    },
    {
      question: "What is the virtual DOM?",
      options: [
        "A programming concept",
        "A database",
        "A lightweight copy of the real DOM",
        "A JavaScript framework",
      ],
      correct: 2,
    },
  ],
  typescript: [
    {
      question: "What is TypeScript?",
      options: [
        "A superset of JavaScript",
        "A database language",
        "A CSS preprocessor",
        "A JavaScript framework",
      ],
      correct: 0,
    },
    {
      question: "Which symbol is used to define a type?",
      options: [":", "=", "=>", "::"],
      correct: 0,
    },
    {
      question: "What is an interface in TypeScript?",
      options: [
        "A function",
        "A class",
        "A structure that defines the syntax",
        "A variable",
      ],
      correct: 2,
    },
    {
      question: "How do you declare a string type variable?",
      options: [
        "let name = string",
        "let name: string",
        "string name",
        "var string name",
      ],
      correct: 1,
    },
    {
      question: "What is type inference?",
      options: [
        "Manually defining types",
        "Automatic type detection",
        "Type conversion",
        "Type checking",
      ],
      correct: 1,
    },
  ],
};
