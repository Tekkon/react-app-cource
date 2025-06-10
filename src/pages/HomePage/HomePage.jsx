import cls from "./HomePage.module.css";

import { QuestionCard } from "../../components/QuestionCard";

const cards = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    description: "React allows developers to create large web applications that can change data, without reloading the page.",
    resources: ["https://reactjs.org/docs/getting-started.html", "https://reactjs.org/tutorial/tutorial.html"],
    level: 1,
    completed: false,
    editDate: "10.06.2025, 18:36",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
    description:
      "JSX allows you to write HTML elements and components in a JavaScript file, making it easier to create React components.",
    resources: ["https://reactjs.org/docs/introducing-jsx.html", "https://reactjs.org/docs/jsx-in-depth.html"],
    level: 1,
    completed: false,
    editDate: "10.06.2025, 18:36",
  },
  {
    id: 3,
    question: "What is TypeScript?",
    answer: "TypeScript is a superset of JavaScript that adds static typing to the language.",
    description: "TypeScript helps catch errors at compile time, making it easier to maintain large codebases.",
    resources: ["https://www.typescriptlang.org/docs/", "https://www.typescriptlang.org/docs/handbook/intro.html"],
    level: 1,
    completed: false,
    editDate: "10.06.2025, 18:36",
  },
];

export const HomePage = () => {
  return (
    <>
      {cards.map((card, index) => {
        return <QuestionCard key={index} card={card} />;
      })}
    </>
  );
};
