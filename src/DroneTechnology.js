import React from "react";
import { Link } from "react-router-dom";
import "./DroneTechnology.css"; // ✅ import scoped CSS

export default function DroneTechnology() {
  return (
    <div className="drone-technology-page container py-12 text-white">
      {/* Back Button */}
      <Link to="/" className="btn btn--ghost mb-8">← Back to Courses</Link>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">Drone Technology</h1>

      {/* Duration & Audience */}
      <p className="text-gray-300 mb-2"><strong>Duration:</strong> 3 Days</p>
      <p className="text-gray-300 mb-6"><strong>Audience:</strong> Grades 6–12</p>

      {/* Description */}
      <p className="mb-6">
        Explore the world of drones — from flight mechanics to autonomous navigation.
        Students will learn to integrate sensors, program controllers, and use
        computer vision for real-world drone applications.
      </p>

      {/* Topics Covered */}
      <h2 className="text-2xl font-semibold mb-2">Topics Covered</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-300">
        <li><strong>Drone Basics:</strong> Types, safety guidelines, and flight principles.</li>
        <li><strong>Hardware & Sensors:</strong> Motors, propellers, GPS, IMU, and cameras.</li>
        <li><strong>Controllers:</strong> Flight controllers and manual vs. autonomous navigation.</li>
        <li><strong>Programming:</strong> Writing simple drone flight programs.</li>
        <li><strong>Computer Vision:</strong> Object detection and obstacle avoidance.</li>
      </ul>

      {/* Hands-On Projects */}
      <h2 className="text-2xl font-semibold mb-2">Hands-On Experience</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>Building and configuring a basic drone system.</li>
        <li>Integrating sensors for flight stability and telemetry.</li>
        <li>Programming simple autonomous flight paths.</li>
        <li>Testing computer vision models for object tracking.</li>
      </ul>
    </div>
  );
}
