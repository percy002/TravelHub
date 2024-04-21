"use client";

import { Accordion } from "flowbite-react";

const AccordionCustomTheme = {  
  content: {
    base: "p-2 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
    base: "flex w-full items-center justify-between p-2 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg",
    
  },
};

interface AskedQuestion {
  question: string;
  answer: string;
}

interface Props {
  askedQuestion: AskedQuestion[];
}
export default function AccordionFB({ askedQuestion }: Props) {
  const accordionPanels = askedQuestion.map((question, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title>
        {question.question}
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500">
          {question.answer}
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  ));
  return <Accordion theme={AccordionCustomTheme}>{accordionPanels}</Accordion>;
}
