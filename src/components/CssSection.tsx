import React from 'react';
import TopicSection from './TopicSection';

const CssSection: React.FC = () => {
  return (
    <TopicSection
      title="CSS"
      description="CSS is a stylesheet defining how HTML content is represented. HTML is the ingredients, CSS is the recipe for the dish. It allows developers to specify fonts, colors, spacing, positioning. It allows HTML to be content and CSS to be design. CSS is essential for making pages appealing and friendly for the user."
    >
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">CSS Techniques Demonstration</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-900 p-4 rounded text-white">
              <h4 className="text-orange-300 mb-2">Flexbox Layout</h4>
              <div className="bg-gray-800 p-3 flex justify-between items-center gap-2">
                <div className="bg-primary-500 h-10 w-20 rounded flex items-center justify-center text-white">Box 1</div>
                <div className="bg-primary-600 h-14 w-20 rounded flex items-center justify-center text-white">Box 2</div>
                <div className="bg-primary-500 h-10 w-20 rounded flex items-center justify-center text-white">Box 3</div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-4 rounded text-white">
              <h4 className="text-orange-300 mb-2">CSS Grid Layout</h4>
              <div className="bg-gray-800 p-3 grid grid-cols-3 gap-2">
                <div className="bg-primary-500 h-10 rounded flex items-center justify-center text-white">1</div>
                <div className="bg-primary-600 h-10 rounded flex items-center justify-center text-white">2</div>
                <div className="bg-primary-500 h-10 rounded flex items-center justify-center text-white">3</div>
                <div className="bg-primary-600 h-10 rounded flex items-center justify-center text-white">4</div>
                <div className="bg-primary-500 h-10 rounded flex items-center justify-center text-white">5</div>
                <div className="bg-primary-600 h-10 rounded flex items-center justify-center text-white">6</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded overflow-x-auto text-white">
            <pre className="text-sm text-gray-100">
              <code className="text-white">{`//CSS examples
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

// Flexbox
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

//CSS grid
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

//CSS variables
:root {
  --primary-color: #646cff;
  --secondary-color: #535bf2;
}

//CSS Animation
.fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </TopicSection>
  );
};

export default CssSection;
