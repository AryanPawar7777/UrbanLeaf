// src/pages/Faq.jsx
import React from 'react';

const faqs = [
  {
    question: "How often should I water my indoor plants?",
    answer: "Most indoor plants need to be watered once a week. Always check the soil moisture first."
  },
  {
    question: "Which plants purify indoor air?",
    answer: "Snake plant, Spider plant, and Peace lily are great air purifiers for homes."
  },
  {
    question: "Do plants need direct sunlight?",
    answer: "Not all! Some thrive in indirect light. Research your specific plant’s needs."
  },
  {
    question: "What is the best soil for potted plants?",
    answer: "Use a well-draining potting mix that retains moisture but doesn't stay soggy."
  }
];

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-green-700">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
