import React from 'react';
import TopicSection from './TopicSection';

const FigmaSection: React.FC = () => {
  return (
    <TopicSection
      title="Figma"
      description="A collaborative interface design tool used for UI/UX design, prototyping, and design systems."
    >      
      <div className="space-y-6">
        {/* Figma Prototype PDF Preview and Download */}
        <div className="bg-gray-800 p-6 rounded-lg text-white mb-6">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">My Figma Prototype</h3>
          <div className="mb-4">
            <div className="border-2 border-gray-700 rounded-lg overflow-hidden">
              <iframe 
                src="/~tommobat/portfolio/figma_DCS_prototype.pdf" 
                className="w-full h-[400px]" 
                title="Figma Prototype PDF"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center">
            <a 
              href="/~tommobat/portfolio/figma_DCS_prototype.pdf" 
              target="_blank" 
              className="px-4 py-2 rounded bg-orange-600 hover:bg-amber-600 hover:shadow-glow hover:-translate-y-1 text-white transition-all duration-300"
            >
              Download Figma Prototype
            </a>
          </div>
        </div>
        
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-orange-300 font-semibold mb-3">Design Sprints with Figma</h3>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              During the semester, we used Figma for collaborative design sprints that helped shape our final web projects:
            </p>
            
            <div className="bg-gray-900 p-4 rounded mb-4">
                <h4 className="text-lg text-white font-medium mb-2">Sprint Process</h4>
                <p className="text-gray-300 mb-2">
                A five-day process involving design, prototyping, and testing with customers:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>
                  <span className="font-medium">Day 1:</span> Start from end, set long-term goal, map the challenge
                  </li>
                  <li>
                  <span className="font-medium">Day 2:</span> Sketch, emphasizing critical thinking over artistry
                  </li>
                  <li>
                  <span className="font-medium">Day 3:</span> Critique sketches and choose one, then storyboard
                  </li>
                  <li>
                  <span className="font-medium">Day 4:</span> Prototype the storyboard
                  </li>
                  <li>
                  <span className="font-medium">Day 5:</span> Interview stakeholders &amp; learn from their interactions w/ prototype
                  </li>
                </ul>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-lg text-white font-medium mb-2">Design Sprint Outcomes</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Try out things before wasting time coding</li>
                <li>See usability issues easily</li>
                <li>Easier consensus between team</li>
                <li>Reduced development time since you resolve design decisions early</li>
              </ul>
            </div>
          </div>
        </div>
        
        
          </div>
        </TopicSection>
        );
      };

      export default FigmaSection;
