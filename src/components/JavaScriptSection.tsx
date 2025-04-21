//example of a JavaScript section in a React component
import React, { useState, useEffect, useRef } from 'react';
import TopicSection from './TopicSection';

const JavaScriptSection: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const boxRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };
  
  // Mouse Cursor Game Logic
  useEffect(() => {
    const box = boxRef.current;
    const circle = circleRef.current;
    const toggle = toggleRef.current;
    const container = containerRef.current;
    
    if (!box || !circle || !toggle || !container) return;
    
    // Setup circle
    circle.style.pointerEvents = 'none';
    
    // Color changing functionality
    const colors = ["dodgerblue", "green", "purple", "orange", "red"];
    let colorIndex = 0;
    
    const handleBoxClick = () => {
      colorIndex = (colorIndex + 1) % colors.length;
      box.style.backgroundColor = colors[colorIndex];
    };
    
    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Adjust coordinates to be relative to the container
      const x = event.clientX - rect.left - 12.5;
      const y = event.clientY - rect.top - 12.5;
      
      // Keep circle within container bounds
      const boundedX = Math.max(0, Math.min(x, rect.width - 25));
      const boundedY = Math.max(0, Math.min(y, rect.height - 25));
      
      circle.style.left = `${boundedX}px`;
      circle.style.top = `${boundedY}px`;
    };
    
    // Toggle switch functionality
    const handleToggleChange = () => {
      if (toggle.checked) {
        // Track mouse in entire container
        container.addEventListener('mousemove', handleMouseMove);
        box.removeEventListener('mousemove', handleMouseMove);
      } else {
        // Track mouse only over box
        box.addEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
    
    // Initialize event listeners
    box.addEventListener('click', handleBoxClick);
    box.addEventListener('mousemove', handleMouseMove);
    toggle.addEventListener('change', handleToggleChange);
    
    // Center circle initially
    circle.style.left = `${(container.clientWidth / 2) - 12.5}px`;
    circle.style.top = `${(container.clientHeight / 2) - 12.5}px`;
    
    // Cleanup
    return () => {
      box.removeEventListener('click', handleBoxClick);
      box.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousemove', handleMouseMove);
      toggle.removeEventListener('change', handleToggleChange);
    };
  }, []);
  
  return (
    <TopicSection
      title="JavaScript"
      description={`While HTML and CSS provide content and static design, Javascript adds interactivity and 
dynamic behavior like animations. It allows a page to respond to user interactions (eg. clicks, 
keys, scrolling), update content, or animate. If information isn’t hardcoded in the html, javascript 
can pull and update from other places. It can listen to users and respond based on actions. For 
example, if I, the user, scroll halfway down the page, the header might become sticky and 
animate. 

The programming language that brings interactivity to the web.`}
    >
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3">Interactive JavaScript Demo</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Counter demo */}
            <div className="bg-gray-900 p-4 rounded text-white">
              <h4 className="text-orange-300 mb-2">Counter Example</h4>
              <div className="flex items-center gap-4 mt-4">
                <button 
                  onClick={() => setCounter(counter - 1)}
                  className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  -
                </button>
                <span className="text-xl font-bold">{counter}</span>
                <button 
                  onClick={() => setCounter(counter + 1)}
                  className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Todo list demo */}
            <div className="bg-gray-900 p-4 rounded text-white">
              <h4 className="text-orange-300 mb-2">Todo List Example</h4>
                <div className="flex gap-2 mb-3">                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded"
                  placeholder="Add new item"
                />
                <button 
                  onClick={handleAddItem}
                  className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
                >
                  Add
                </button>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-white">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                </ul>
              {items.length === 0 && (
                <p className="text-sm text-white-500">No items yet. Add one above!</p>
              )}
            </div>
          </div>          {/* Interactive Mouse cursor game */}
          <div className="mt-6 bg-gray-900 p-6 rounded-lg text-white">
            <h4 className="text-orange-300 mb-4">Mouse Cursor Game - Interactive Demo</h4>
            <div className="flex flex-col items-center">              <div 
                ref={containerRef}
                className="relative w-full h-[200px] bg-gray-800 rounded-lg flex justify-center items-center mb-4 text-white" 
                style={{overflow: 'hidden'}}>
                <div 
                  ref={boxRef}
                  className="w-[100px] h-[100px] bg-blue-500 cursor-pointer"
                  style={{backgroundColor: 'dodgerblue'}}
                ></div>
                <div 
                  ref={circleRef}
                  className="w-[25px] h-[25px] rounded-full bg-red-500 absolute pointer-events-none"
                  style={{left: '50%', top: '50%'}}
                ></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm">Box only</span>
                <label className="relative inline-block w-[60px] h-[34px]">
                  <input ref={toggleRef} type="checkbox" className="opacity-0 w-0 h-0" />
                  <span className="absolute cursor-pointer inset-0 bg-gray-500 rounded-full transition-all duration-300 before:content-[''] before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white before:rounded-full before:transition-all"></span>
                </label>
                <span className="text-gray-300 text-sm">Entire container</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-900 p-4 rounded overflow-x-auto text-white">
            <pre className="text-sm text-gray-100">
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My epic cat mouse game of cursor and circle</title>
    <style>
      .wrapper {
        display: grid;
        place-items: center;
        height: 100vh;
      }

      .box {
        background-color: dodgerblue;
        width: 200px;
        height: 200px;
        cursor: pointer;
      }

      .circle {
        border-radius: 50%;
        background-color: red;
        width: 50px;
        height: 50px;
        position: fixed;
      }

      .switch {
        display: inline-block;
        position: relative;
        width: 60px;
        height: 34px;
        margin: 20px auto;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
      }

      .slider:before {
        content: "";
        height: 26px;
        width: 26px;
        background-color: white;
        position: absolute;
        left: 4px;
        bottom: 4px;
        transition: .4s;
      }

      input:checked + .slider {
        background-color: #2196F3;
      }

      input:checked + .slider:before {
        transform: translateX(26px);
      }

      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    </style>
  </head>

  <body>
    <div class="wrapper">
      <div id="the_box" class="box"></div>
      <div id="the_circle" class="circle"></div>
    </div>

    <label class="switch">
      <input type="checkbox" id="toggle_switch" />
      <span class="slider round"></span>
    </label>

    <script>
      const box = document.getElementById("the_box");
      const circle = document.getElementById("the_circle");
      const toggleSwitch = document.getElementById("toggle_switch");

      const colors = ["red", "green", "purple", "orange", "dodgerblue"];
      let colorIndex = 0;

      box.addEventListener("click", () => {
        colorIndex = (colorIndex + 1) % colors.length; 
        box.style.backgroundColor = colors[colorIndex];
      });
      circle.style.pointerEvents = "none";

      const handleMouseMove = (event) => {
        circle.style.left = \`\${event.clientX - 25}px\`;
        circle.style.top = \`\${event.clientY - 25}px\`;
      };

      toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
          document.addEventListener("mousemove", handleMouseMove);
          box.removeEventListener("mousemove", handleMouseMove);
        } else {
          box.addEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mousemove", handleMouseMove);
        }
      });

      box.addEventListener("mousemove", handleMouseMove);
    </script>
  </body>
</html>
`}</code>
            </pre>
          </div>
        </div>
          
      </div>
    </TopicSection>
  );
};

export default JavaScriptSection;
