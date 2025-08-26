import React from "react";
import { Link } from "react-router-dom";
import "./AiCloud.css"; // Import the scoped CSS

export default function AiCloud() {
  return (
    <div className="ai-cloud-page container py-12 text-white">
      {/* Back Button */}
      <Link to="/" className="btn btn--ghost mb-8">← Back to Courses</Link>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">AI & Cloud Computing</h1>

      {/* Duration & Audience */}
      <p className="text-gray-300 mb-2"><strong>Duration:</strong> 3 Days</p>
      <p className="text-gray-300 mb-6"><strong>Audience:</strong> Grades 6–12</p>

      {/* Description */}
      <p className="mb-6">
        Learn how AI meets Cloud to power next-gen applications. Students will explore machine learning models, deploy applications on cloud platforms, and create real-time dashboards to visualize AI insights.
      </p>

      {/* Topics Covered */}
      <h2 className="text-2xl font-semibold mb-2">Topics Covered</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-300">
        <li>
          <strong>Computer Vision with YOLOv8:</strong> Understanding object detection, training models, and processing images & live video streams.
        </li>
        <li>
          <strong>Chatbots & NLP:</strong> Building conversational AI bots, integrating speech-to-text and text-to-speech, and exploring voice-based AI applications.
        </li>
        <li>
          <strong>Machine Learning Fundamentals:</strong> Introduction to supervised and unsupervised learning, simple ML model creation, and handling datasets.
        </li>
        <li>
          <strong>Cloud Computing & Deployment:</strong> Deploy AI applications on cloud platforms, create dashboards for real-time insights, and monitor system performance.
        </li>
        <li>
          <strong>Data Pipelines:</strong> Collect, process, and store data for AI applications using cloud storage services.
        </li>
      </ul>

      {/* Hands-On Experience */}
      <h2 className="text-2xl font-semibold mb-2">Hands-On Experience</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>Building and experimenting with AI models for real-time applications.</li>
        <li>Integrating AI with cloud platforms for deployment and monitoring.</li>
        <li>Creating interactive dashboards to visualize AI outputs and insights.</li>
        <li>Exploring voice and chatbot applications connected to cloud services.</li>
      </ul>
    </div>
  );
}
