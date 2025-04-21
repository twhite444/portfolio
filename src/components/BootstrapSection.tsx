import React from 'react';
import TopicSection from './TopicSection';

const BootstrapSection: React.FC = () => {
  return (
    <TopicSection
      title="Bootstrap"
      description="A popular CSS framework for building responsive, mobile-first websites. Bootstrap takes the idea of react components but just predesigns them for you so you can use them without having to worry about creating or styling them yourself. It offers some CSS framework but also javascript components like navigation bars and buttons. By using these components, they will already be mobile friendly and accessible. It greatly speeds up development too."
    >
      <div className="space-y-6 text-white">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Bootstrap Components Demonstration</h3>
          
          {/* Bootstrap grid system example */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">Bootstrap Grid System</h4>
            <div className="bg-gray-900 p-4 rounded">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 md:col-span-4 bg-gray-700 p-3 rounded text-center text-white">Column 1</div>
                <div className="col-span-12 md:col-span-4 bg-gray-700 p-3 rounded text-center text-white">Column 2</div>
                <div className="col-span-12 md:col-span-4 bg-gray-700 p-3 rounded text-center text-white">Column 3</div>
              </div>
            </div>
          </div>
          
          {/* Bootstrap components examples */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">Bootstrap Components</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card component */}
              <div className="bg-gray-900 rounded overflow-hidden">
                <div className="bg-gray-700 p-3">
                  <h5 className="font-medium text-orange-300">Bootstrap Card</h5>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 mb-3">This is an example of a Bootstrap card component styled with Tailwind.</p>
                  <div className="flex justify-end">
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded text-sm">Learn More</button>
                  </div>
                </div>
              </div>
              
              {/* Alert component */}
              <div className="bg-green-900/30 border-l-4 border-green-500 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-300">
                      Bootstrap Alert: Successfully completed the action!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-4 rounded overflow-x-auto">
            <pre className="text-sm text-gray-100">
              <code className="text-white">{`<!-- Bootstrap Grid System Example -->
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>

<!-- Bootstrap Card Example -->
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text for the card.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Bootstrap Alert Example -->
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>

<!-- Bootstrap Nav Example -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>

<!-- Using Bootstrap with React -->
import { Button, Card, Alert } from 'react-bootstrap';

function BootstrapExample() {
  return (
    <>
      <Button variant="primary">Click Me</Button>
      <Alert variant="success">This is a success alert!</Alert>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Card content goes here</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Bootstrap Benefits & Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Extensive component library for quick development</li>
            <li>Mobile-first responsive grid system</li>
            <li>Consistent styling and behavior across browsers (including mobile)</li>
            <li>Built-in JavaScript components and utilities</li>
            <li>Integrates well with React via react-bootstrap library</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Project Applications</h3>
          <p className="mb-3 text-gray-300"> In my projects this semester, I leveraged Bootstrap for:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Creating responsive layouts that work seamlessly across devices</li>
            <li>Implementing navigation components like navbars and sidebars</li>
            <li>Utilizing pre-built components to speed up development</li>
          </ul>
        </div>
      </div>
    </TopicSection>
  );
};

export default BootstrapSection;
