// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-800">About Us</h2>
      <div className="text-lg text-gray-700 space-y-4">
        <p>
          Hi, I'm <span className="font-semibold text-green-700">Aryan</span> — a passionate <span className="font-semibold">Frontend Developer</span> based in <span className="font-semibold">Gurugram</span>.
        </p>
        <p>
          I'm currently pursuing my Bachelor's degree at <span className="font-semibold">NorthCap University</span>, where I'm sharpening my skills in modern web technologies like React, Tailwind CSS, and more.
        </p>
        <p>
          This project is a reflection of my love for both coding and nature 🌿. I built this plant-based web app to blend design, functionality, and the beauty of greenery.
        </p>
        <p>
          Thanks for visiting — feel free to explore and connect!
        </p>
      </div>
    </div>
  );
};

export default About;
