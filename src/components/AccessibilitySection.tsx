import React from 'react';
import TopicSection from './TopicSection';

const AccessibilitySection: React.FC = () => {
  return (
    <TopicSection
      title="Accessibility"
      description="Creating websites that can be used by everyone, including people with disabilities."
    >
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">Web Accessibility Fundamentals</h3>
          <div className="mb-6">
            <h4 className="text-orange-400 mb-2">WCAG Guidelines</h4>
            <p className="mb-4 text-white">
              The Web Content Accessibility Guidelines (WCAG):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded text-white">
                <h5 className="font-medium text-orange-300 mb-1">1. Perceivable</h5>
                <p className="text-sm text-white">
                  Information and user interface components must be presentable to users in ways they can actually see.
                </p>
                <ul className="list-disc pl-5 mt-2 text-xs text-white">
                  <li>Text alternatives for images</li>
                  <li>Content can be presented in different ways</li>
                  <li>Content is easy to see and hear</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded text-white">
                <h5 className="font-medium text-orange-300 mb-1">2. Operable</h5>
                <p className="text-sm text-white">
                  User interface components and navigation must be operable by all users.
                </p>
                <ul className="list-disc pl-5 mt-2 text-xs text-white">
                  <li>Users have enough time to read and use content</li>
                  <li>everything accessible by keyboard</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded text-white">
                <h5 className="font-medium text-orange-300 mb-1">3. Understandable</h5>
                <p className="text-sm text-white">
                  Information and operation of user interface must be understandable.
                </p>
                <ul className="list-disc pl-5 mt-2 text-xs text-white">
                  <li>Text is readable and understandable</li>
                  <li>Content appears and operates in predictable ways</li>
                  <li>Users are helped to avoid and correct mistakes</li>
                </ul>
              </div>
      
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
            <h4 className="text-orange-400 mb-2">Accessibility Code Examples</h4>
            <pre className="text-sm text-white">
{`<!-- Image with descriptive alt text for screen readers -->
// a screen reader can read this to give context to the image
<img src="chart.png" alt="Bar chart showing sales growth from 2020 to 2023" />

<!-- Using SVG with <title> for non-text alternative -->
// a screen reader can read this to give context to the image
<svg width="100" height="100" role="img" aria-labelledby="svgTitle">
  <title id="svgTitle">Pie chart showing 60% completed</title>
  <circle cx="50" cy="50" r="40" fill="#ccc" />
  <path d="M50 10 A40 40 0 1 1 90 50" fill="#4ade80" />
</svg>

<!-- Semantic HTML and keyboard navigation -->
//allows content to be tabbable without mouse
<nav>
  <ul>
    <li><a href="#main-content">Skip to main content</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
<main id="main-content" tabIndex="-1">
  <h2>About Accessibility</h2>
  <!-- content -->
</main>

<!-- Example of color and texture contrast -->
<button style="background: repeating-linear-gradient(45deg, #222, #222 10px, #fff 10px, #fff 20px); color: #000; border: 2px solid #000;">
  High Contrast Button
</button>


<!-- CSS for focus and visible contrast -->
a:focus, button:focus, input:focus {
  outline: 3px dashed #f59e42;
  outline-offset: 3px;
}
`}
            </pre>
          </div>
        </div>
      </div>
    </TopicSection>
  );
};

export default AccessibilitySection;
