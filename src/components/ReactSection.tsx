import React, { useState } from 'react';
import TopicSection from './TopicSection';

// A simple demo counter component
const DemoCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border border-gray-700 rounded text-white">
      <h4 className="text-lg font-medium mb-2 text-orange-300">Counter Component</h4>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(prev => prev - 1)}
          className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors text-white"
        >
          -
        </button>
        <span className="text-xl font-bold text-white">{count}</span>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors text-white"
        >
          +
        </button>
      </div>
    </div>
  );
};

// A simple theme toggler component
const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`p-4 border border-gray-700 rounded ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h4 className={`text-lg font-medium mb-2 text-orange-300`}>
        Theme Toggler Component
      </h4>
      <p className={`mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Current theme: {isDark ? 'Dark' : 'Light'}
      </p>
      <button
        onClick={() => setIsDark(prev => !prev)}
        className={`px-3 py-1 rounded transition-colors ${
          isDark
            ? 'bg-gray-700 hover:bg-gray-600 text-white'
            : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

const reactDescription = `
Often in websites, things are repeatedly used. In HTML, if you want to change them you have to 
change them all. React offers a solution with component based architecture. It allows 
development of reusable and nestable components. This means you can develop each 
component separately and then bundle them together with something like vite to make your 
HTML website. React encourages modularity, every part of the website has its own file which 
makes it a lot easier to maintain. It allows production of a dynamic website but in a much more 
efficient manner.

React solves the problem of repeated code in websites by using a component-based architecture. Instead of editing every instance in HTML, you create reusable and nestable components. Each part of the website lives in its own file, making it modular and much easier to maintain. You can develop components separately and then bundle them together (with tools like Vite) to build your site. This approach allows you to create dynamic, efficient, and maintainable websites.
`;

const ReactSection: React.FC = () => {
  return (
    <TopicSection
      title="React (w/ components)"
      description={reactDescription}
    >
      <div className="space-y-6 text-white">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-orange-300">React Component Examples</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <DemoCounter />
            <ThemeToggler />
          </div>

          <div className="bg-gray-900 p-4 rounded overflow-x-auto">
            <pre className="text-sm">
              <code>{`// Example: Counter Component in React
import React, { useState } from 'react';

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialCount);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;

// Usage in a parent component
import Counter from './Counter';

const App = () => (
  <div>
    <h1>React Counter Example</h1>
    <Counter initialCount={5} step={2} />
  </div>
);

export default App;`}</code>
            </pre>
          </div>
        </div>
      </div>
    </TopicSection>
  );
};

export default ReactSection;
