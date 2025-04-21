import React from 'react';
import TopicSection from './TopicSection';

const TailwindSection: React.FC = () => {
  return (
    <TopicSection
      title="Tailwind CSS"
      description={`Tailwind is like a huge CSS stylesheet that you don’t have to write and you can use it directly in 
your HTML. It gives you full control over styling without actually having to write a CSS file. It 
does mean more classes in your code but it is consistent and speedy. It does allow a lot of 
customization and you can even add your own custom utility classes. It is also really handy for 
mobile configuration as it has presets of things like sizes for different size screens.

A utility-first CSS framework for rapidly building custom user interfaces.`}
    >
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">Tailwind CSS Usage Examples</h3>
          
          {/* Custom Utility Class */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">1. Custom Utility Class</h4>
            <div className="bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// filepath: /home/twhite4/odb/web_dev/tailwind_2/tailwind_2/src/index.css
@layer utilities {
  .highlight {
    @apply bg-highlight text-highlight-foreground p-2 rounded-md;
  }
}`}</code>
              </pre>
            </div>
          </div>
          
          {/* Custom Component Class */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">2. Custom Component Class</h4>
            <div className="bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// filepath: /home/twhite4/odb/web_dev/tailwind_2/tailwind_2/src/index.css
@layer components {
  .custom-box {
    @apply bg-primary text-primary-foreground p-4 rounded-lg shadow-md;
  }
}`}</code>
              </pre>
            </div>
          </div>
          
          {/* Custom Button Styling */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">3. Custom Button Styling</h4>
            <div className="bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// filepath: /home/twhite4/odb/web_dev/tailwind_2/tailwind_2/src/index.css
.btn {
  @apply bg-accent text-accent-foreground font-bold py-2 px-4 min-w-[8rem] rounded-lg;
}

.btn:hover {
  @apply bg-highlight text-highlight-foreground;
}`}</code>
              </pre>
            </div>
          </div>
          
          {/* HTML Usage Example */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">4. HTML Usage Example</h4>
            <div className="bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// filepath: /home/twhite4/odb/web_dev/tailwind_2/tailwind_2/index.html
<details class="custom-box">
  <summary class="font-bold cursor-pointer">Details</summary>
  <div>Some content inside details</div>
</details>`}</code>
              </pre>
            </div>
          </div>

          {/* React Component Usage */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">5. React Component Usage</h4>
            <div className="bg-gray-900 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// filepath: /home/twhite4/odb/web_dev/tailwind_2/tailwind_2/src/App.tsx
<div className="highlight">
  Highlighted Text with Custom Utility Class
</div>
<button className="btn">Custom Button</button>`}</code>
              </pre>
            </div>
          </div>
        </div>
          <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Key Concepts Demonstrated</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Direct utility classes</li>
            <li>Custom component classes</li>
            <li>Custom utilities</li>
            <li>Hover states</li>
            <li>Spacing utilities (mt-2, mt-4)</li>
            <li>Typography utilities (font-bold)</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Keeping Up with Tailwind v4 Beta</h3>
          <p className="mb-4">Tailwind v4 is very different from v3! Here's what I had to learn when updating my projects:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-orange-300 mb-2">CSS-First Configuration</h4>
                <p className="text-sm">
                Configuration moved to CSS. simplified the file.
                </p>
              <div className="bg-gray-800 p-3 rounded overflow-x-auto mt-2">
                <pre className="text-xs">
                  <code>{`@import "tailwindcss";

@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 1920px;
  --color-avocado-500: oklch(0.84 0.18 117.33);
}`}</code>
                </pre>
              </div>
            </div>
            
            
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-orange-300 mb-2">Package & Import Changes</h4>
              <p className="text-sm">
                Had to update all my imports and dependencies:
              </p>
              <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                <li>New imports: <code>@import "tailwindcss"</code> instead of all the @tailwind directives</li>
                <li>New packages: <code>@tailwindcss/postcss</code>, <code>@tailwindcss/cli</code>, <code>@tailwindcss/vite</code></li>
                <li>Don't need postcss-import or autoprefixer anymore which is nice</li>
              </ul>
            </div>
            
            <p className="text-sm italic mt-2">
              Honestly updating was kinda stressful but the new features are worth it!
            </p>
          </div>
        </div>
      </div>
    </TopicSection>
  );
};

export default TailwindSection;
