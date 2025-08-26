import React from "react";
import { Link } from "react-router-dom";
import "./IotRobotics.css"; // Import the scoped CSS

export default function IotRobotics() {
  return (
    <div className="iot-robotics-page container py-12 text-white">
      {/* Back Button */}
      <Link to="/" className="btn btn--ghost mb-8">← Back to Courses</Link>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">IoT & Robotics</h1>

      {/* Duration & Audience */}
      <p className="text-gray-300 mb-2"><strong>Duration:</strong> 3 Days</p>
      <p className="text-gray-300 mb-6"><strong>Audience:</strong> Grades 6–12</p>

      {/* Description */}
      <p className="mb-6">
        Dive into the world of smart devices and robotics. Students will learn to build IoT-enabled devices, automate homes, and create interactive dashboards to monitor and control hardware remotely.
      </p>

      {/* Topics Covered */}
      <h2 className="text-2xl font-semibold mb-2">Topics Covered</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-300">
        <li>
          <strong>ESP32 & Sensors:</strong> Introduction to microcontrollers, integrating sensors, and collecting real-time data.
        </li>
        <li>
          <strong>Home & Device Automation:</strong> Automating devices and appliances using IoT workflows.
        </li>
        <li>
          <strong>Robotics Fundamentals:</strong> Basic robotics concepts, motor control, and building simple robotic devices.
        </li>
        <li>
          <strong>Cloud Dashboards & Telemetry:</strong> Visualizing sensor data, monitoring devices, and setting automated triggers.
        </li>
        <li>
          <strong>IoT Protocols:</strong> Overview of MQTT, HTTP, and WebSocket protocols for device-cloud communication.
        </li>
      </ul>

      {/* Hands-On Projects */}
      <h2 className="text-2xl font-semibold mb-2">Hands-On Experience</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>Building and programming IoT-enabled devices and sensors.</li>
        <li>Creating interactive dashboards to monitor and control hardware remotely.</li>
        <li>Experimenting with basic robotics devices and motorized systems.</li>
        <li>Applying IoT protocols and cloud connectivity for real-time data handling.</li>
      </ul>
    </div>
  );
}
