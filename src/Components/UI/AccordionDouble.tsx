"use client";

import AccordionFB from "./AccordionFB";
interface AskedQuestion {
  question: string;
  answer: string;
}
export default function AccordionDouble() {
  const askedQuestion: AskedQuestion[] = [
    {
      question: "What is the refund policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, sed lacinia nunc. Integer auctor, mauris nec ultricies ultricies, mi tellus aliquam metus, nec ultricies diam odio in orci",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, sed lacinia nunc. Integer auctor, mauris nec ultricies ultricies, mi tellus aliquam metus, nec ultricies diam odio in orci",
    },
  ];
  return (
    <div className="">
      <div className="h-[90vh] w-full grid grid-cols-2 gap-4 px-4 mt-1">
        <div className="col-span-1">
          <AccordionFB askedQuestion={askedQuestion} />
        </div>
        <div className="col-span-1">
          <AccordionFB askedQuestion={askedQuestion} />
        </div>
      </div>
    </div>
  );
}
