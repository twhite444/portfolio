import React from 'react';
import TopicSection from './TopicSection';

const ShadcnSection: React.FC = () => {
  return (
    <TopicSection
      title="ShadCN/UI"
      description={`Shadcn is a component based toolkit much like react where you can install the components into 
your codebase. They are already accessible and they are fully customizable. It also uses 
tailwind so it integrates really well with tailwind styling. It makes it super easy to quickly add 
components where you only need to add what you use. Some of the components available are 
dropdowns, tables, calendars, etc.

A collection of reusable components built with Radix UI and Tailwind CSS.`}
    >
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">ShadCN/UI Components</h3>
          
          {/* ShadCN UI Button Examples */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">Button Components</h4>
            <div className="bg-gray-900 p-4 rounded text-white">
              <div className="flex flex-wrap gap-3">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors">
                  Primary
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors">
                  Secondary
                </button>
                <button className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors">
                  Outline
                </button>
                <button className="text-primary-500 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50">
                  Link
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors">
                  Destructive
                </button>
              </div>
            </div>
          </div>
            {/* ShadCN UI Card Components */}
          <div className="mb-6">
            <h4 className="text-orange-300 mb-2">Card Component</h4>
            <div className="bg-gray-900 p-4 rounded text-white">
              <div className="rounded-lg border border-gray-700 overflow-hidden">
                <div className="p-6">
                  <h5 className="text-lg font-medium mb-2 text-white">Card Title</h5>
                  <p className="text-gray-300 mb-4">This is a ShadCN/UI style card component with a title, description, and actions.</p>
                  <div className="flex justify-between">
                    <button className="text-primary-500 hover:underline">Learn more</button>
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Components */}
          <div className="mb-6">
            <h4 className="text-primary-500 mb-2">Form Components</h4>
            <div className="bg-gray-900 p-4 rounded">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-700 text-primary-500 focus:ring-primary-500"
                  />
                  <label htmlFor="terms" className="text-sm">I agree to the terms and conditions</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-4 rounded overflow-x-auto">
            <pre className="text-sm">
              <code>{`// Installing ShadCN/UI components
// 1. Using CLI
npx shadcn-ui@latest init

// 2. Adding specific components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog

// Example of using ShadCN/UI Button component
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}

// Example of using ShadCN/UI Card component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description shows here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content and information goes here.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}`}</code>
            </pre>
          </div>
        </div>
      

        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-orange-400 font-semibold mb-3">Featured Project: La Cage Website</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gray-900 p-4 rounded">
              <h4 className="text-primary-500 mb-2">Local Bar Website Implementation</h4>
                <p className="text-sm text-white mb-3">
                A responsive website built for La Cage, a local bar in Lewiston, Maine. This project highlights the use of ShadCN/UI components to create a clean and professional design.
                </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-700 text-xs px-3 py-1 rounded text-white font-semibold">React</span>
                <span className="bg-gray-700 text-xs px-3 py-1 rounded text-white font-semibold">Tailwind CSS</span>
                <span className="bg-gray-700 text-xs px-3 py-1 rounded text-white font-semibold">ShadCN/UI</span>
                <span className="bg-gray-700 text-xs px-3 py-1 rounded text-white font-semibold">TypeScript</span>
              </div>
                <div className="flex gap-4">
                <a 
                  href="https://tommo.bates-catapult.net/cage_website_demo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-400 transition-colors"
                >
                  Visit Project →
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub Repository
                </a>
                </div>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-primary-500 font-medium mb-2">ShadCN Components Used</h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-white">
                <li>Business-info component for contact details</li>
                <li>Weekly-info for showing operating hours</li>
                <li>Cards for menu items and specials</li>
                <li>Instagram feed integration component</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-orange-300 font-semibold mb-3">ShadCN/UI Key Features</h3>
          <ul className="text-white list-disc pl-5 space-y-2">
            <li>Fully customizable and themeable components</li>
            <li>Accessible by default, following ARIA best practices</li>
            <li>Copy-paste approach: components can be copied directly into your project</li>
            <li>No external CSS imports or complicated build setup</li>
            <li>Dark mode support and accessibility</li>
          </ul>
        </div>
      </div>
    </TopicSection>
  );
};

export default ShadcnSection;
