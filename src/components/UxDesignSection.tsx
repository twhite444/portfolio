import React from 'react';
import TopicSection from './TopicSection';

const UxDesignSection: React.FC = () => {
  return (
    <TopicSection
      title="Design for User Experience (Krug)"
      description="Applying Steve Krug's principles to create intuitive and user-friendly websites."
    >      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">Steve Krug's UX Design Principles</h3>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-4">
              Design with the user in mind means making a website intuitive, efficient, and pleasant to use.
              Krug's book, "Don't Make Me Think," gives foundational principles emphasizing that users 
              shouldn't have to think when they use your site. Everything should be obvious and 
              self-explanatory. As you develop a website these ideas should be in your mind: making pages 
              self-evident, designing for scanning instead of reading, creating clear visual hierarchies (h1, h2, h3, etc.),
              maintaining consistency, and not taxing the user.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900 p-5 rounded text-white">
              <h4 className="text-orange-300 text-lg mb-3">Don't Make Me Think</h4>
              <p className="text-gray-300 mb-3">
                Websites should be self-evident. When a user looks at a webpage, they should be able to understand what it is and how to use it without expending any effort thinking about it.
              </p>              <div className="bg-gray-800 p-3 rounded text-white">
                <h5 className="font-medium mb-2 text-white">Example Application:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1 text-white">
                  <li>Clear, descriptive button labels instead of clever ones</li>
                  <li>Consistent navigation patterns across the site</li>
                  <li>Using established design conventions that users already understand</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 p-5 rounded text-white">
              <h4 className="text-orange-300 text-lg mb-3">Users Scan, They Don't Read</h4>
              <p className="text-gray-300 mb-3">
                Users don't read pages, they scan them for information that matches their task or interest. Design should account for this scanning behavior.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400">
                  <li>Using clear visual hierarchies to organize content</li>
                  <li>Breaking content into digestible chunks</li>
                  <li>Using headings, bullet points, and highlighted text</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 p-5 rounded">
              <h4 className="text-primary-500 text-lg mb-3">Clear Visual Hierarchies</h4>
              <p className="text-gray-300 mb-3">
                Proper visual hierarchy helps users understand the relationship between elements and their relative importance without conscious effort.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400">
                  <li>Using appropriate heading levels for content organization</li>
                  <li>Ensuring related items are visually grouped</li>
                  <li>Making important elements visually distinct</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 p-5 rounded">
              <h4 className="text-primary-500 text-lg mb-3">Minimize Cognitive Load</h4>
              <p className="text-gray-300 mb-3">
                Don't tax users with unnecessary decisions or information. Reduce noise and eliminate unnecessary elements from the interface.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400">
                  <li>Eliminating unnecessary text and decorative elements</li>
                  <li>Reducing form fields to only what's absolutely necessary</li>
                  <li>Using progressive disclosure to reveal information as needed (you have to click through to what you want)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-5 rounded mb-6">
            <h4 className="text-orange-300 text-lg mb-3">Header Design Examples</h4>
            <p className="text-gray-300 mb-4">
              Headers are crucial for guiding users through content. According to Krug's principles, 
              effective headers should be instantly scannable and convey hierarchy.
            </p>
            
            <div className="bg-gray-800 p-4 rounded mb-4">
              <h5 className="font-medium mb-2 text-red-400">Bad Header Example 1:</h5>
              <div className="bg-gray-900 p-3 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-white">{`<!-- Confusing header with unclear hierarchy -->
<div>
  <span class="text-lg">WELCOME TO OUR WEBSITE!</span>
  <p class="my-company">My Company Name</p>  <!-- No semantic meaning -->
  <div class="links-container">
    <a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/contact">Contact</a>
  </div>
</div>`}</code>
                </pre>
                <p className="text-sm text-gray-400 mt-2">
                  Problems: No semantic HTML (missing header tags), unclear hierarchy, 
                  poor navigation pattern with text separators, excessive styling.
                </p>
              </div>
              
              <h5 className="font-medium mb-2 text-red-400 mt-4">Bad Header Example 2:</h5>
              <div className="bg-gray-900 p-3 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-white">{`<!-- Unclear header with poor organization -->
<header>
  <img src="logo.png" alt="Logo"> 
  <h1>Welcome</h1>  <!-- Generic, uninformative heading -->
  <h3>Navigation</h3>  <!-- Breaking heading hierarchy (h2 missing) -->
  <nav>
    <ul>
      <li><a href="#" class="fancy-link">Click here to start your journey</a></li>
      <li><a href="#" class="fancy-link">Learn about what we do</a></li>
      <li><a href="#" class="fancy-link">Get in touch with our team</a></li>
    </ul>
  </nav>
</header>`}</code>
                </pre>
                <p className="text-sm text-gray-400 mt-2">
                  Problems: Vague headings, skipped heading level (h2), verbose link text,
                  no clear content organization or purpose.
                </p>
              </div>
              
              <h5 className="font-medium mb-2 text-green-400 mt-4">Good Header Example:</h5>
              <div className="bg-gray-900 p-3 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-white">{`<!-- Clear, structured header with proper hierarchy -->
<header class="site-header">
  <div class="logo-container">
    <img src="logo.png" alt="Acme Inc. Logo">
  </div>
  <h1>Acme Inc. Customer Support</h1>  <!-- Clear purpose -->
  <nav aria-label="Main Navigation">
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/support">Support</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/account" class="btn btn-primary">My Account</a></li>
    </ul>
  </nav>
</header>`}</code>
                </pre>
                <p className="text-sm text-gray-400 mt-2">
                  Strengths: Clear purpose with descriptive heading, proper semantic HTML,
                  consistent navigation pattern, clear visual distinction for call-to-action,
                  accessible with aria-label.
                </p>
              </div>
            </div>
          </div>
          
          
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Site Analysis Using Krug's Principles</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-primary-500 text-lg mb-2">Website Evaluation</h4>
              <p className="mb-3">For my course project, I conducted an analysis of several websites using Krug's principles:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">Navigation Analysis:</span> Evaluated how easily users could find key information and complete common tasks
                </li>
                <li>
                  <span className="font-medium">Visual Hierarchy:</span> Assessed how effectively content was organized and prioritized
                </li>
                <li>
                  <span className="font-medium">Clarity Test:</span> Checked if a new user could understand the site's purpose within seconds
                </li>
                <li>
                  <span className="font-medium">Mobile Usability:</span> Examined how the design adapted to smaller screens without sacrificing usability
                </li>
              </ul>
            </div>
            
            
          </div>
        </div>
        
        
      </div>
    </TopicSection>
  );
};

export default UxDesignSection;
