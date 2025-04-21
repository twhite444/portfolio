import React from 'react';
import TopicSection from './TopicSection';

const CursorSection: React.FC = () => {
  return (
    <TopicSection
      title="Cursor"
      description="Working with AI-powered coding tools for web development."
    >
      <div className="space-y-6">
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Featured Project: DCS Major Prototype</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gray-900 p-4 rounded">
              <h4 className="text-primary-500 mb-2">DCS Major Worksheet Prototype</h4>
              <p className="text-sm text-gray-400 mb-3">
                A comprehensive prototype developed as a guide to the new Digital and Computational Studies major at Bates College. 
                This project includes an interactive major worksheet and complete course catalog.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-800 text-xs px-2 py-1 rounded">Cursor AI</span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded">Copilot with VScode Insiders</span>

              </div>              <div className="flex gap-4">
                <a 
                  href="https://tommo.bates-catapult.net/major_worksheet_prototype/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary-500 hover:text-primary-400 transition-colors"
                >
                  Visit Project →
                </a>
                <a 
                  href="https://github.com/blawson-bates/dcs325_w2025_final_delta.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-primary-500 hover:text-primary-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
                    </div>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">AI Development Workflow</h3>
          
          <div className="space-y-5">
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="font-medium mb-2">1. Problem Definition & Planning</h4>
              <p className="text-sm text-gray-400">
                Started by clearly defining requirements, asking questions, and breaking down complex tasks into smaller sub-problems before involving AI.
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="font-medium mb-2">2. Collaborative Solution Design (ask mode)</h4>
              <p className="text-sm text-gray-400">
                Used AI to explore multiple solution approaches before I actually implemented them </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="font-medium mb-2">3. Iterative Implementation (agent mode)</h4>
              <p className="text-sm text-gray-400">
                Iteratively refined code with AI assistance, providing feedback on generated code to improve results.
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="font-medium mb-2">4. Manual Review & Testing</h4>
              <p className="text-sm text-gray-400">
                Always manually reviewed AI-generated code.
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="font-medium mb-2">5. Learning & Skill Development</h4>
              <p className="text-sm text-gray-400">
                Used AI explanations to understand complex concepts so I could build a deeper knowledge over time. There was a defintely a lot of errors made by the AI, so I also learnt how to prompt it better to get best results, least errors.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Reflections on AI-Assisted Development</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded">
                <h4 className="font-medium mb-2">Strengths</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400">
                  <li>Greatly accelerated routine coding tasks</li>
                  <li>Facilitated learning new frameworks and libraries</li>
                  <li>Helped debug complex issues</li>
                  <li>Improved code quality through suggestions</li>
                  <li>Enabled exploration of alternative implementations</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-4 rounded">
                <h4 className="font-medium mb-2">Limitations</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400">
                  <li>Sometimes generated plausible but incorrect code</li>
                  <li>Required specific prompting techniques for best results</li>
                  <li>Need to be specific about versions of tailwind</li>
                  <li>Occasional syntax errors</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="font-medium mb-2">Key Learnings</h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400">
                <li>AI tools are most effective when used as collaborative partners, not replacements for human expertise</li>
                <li>Understanding the principles behind the code is essential for effective use of AI coding tools (had cases where cursor would rewrite whole files when all I needed to do was add one bracket)</li>
                <li>Clear, specific prompts yield better results than vague requests</li>
                <li>AI is best for accelerating implementation, not making critical architectural decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TopicSection>
  );
};

export default CursorSection;
