import { useState, useEffect } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import HtmlSection from './components/HtmlSection'
import CssSection from './components/CssSection'
import JavaScriptSection from './components/JavaScriptSection'
import SshSection from './components/SshSection'
import ReactSection from './components/ReactSection'
import BootstrapSection from './components/BootstrapSection'
import TailwindSection from './components/TailwindSection'
import ShadcnSection from './components/ShadcnSection'
import UxDesignSection from './components/UxDesignSection'
import AccessibilitySection from './components/AccessibilitySection'
import FigmaSection from './components/FigmaSection'
import CursorSection from './components/CursorSection'
import FirebaseSection from './components/FirebaseSection'
import AnimatedElement from './components/AnimatedElement'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Card, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const scrollPosition = window.scrollY
      // Set isScrolled to true when we scroll past 100px
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // List of all topics covered in the semester
  const topics = [
    { id: 'html', name: 'HTML' },
    { id: 'css', name: 'CSS' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'ssh', name: 'SSH & SCP' },
    { id: 'react', name: 'React Components' },
    { id: 'bootstrap', name: 'Bootstrap' },
    { id: 'tailwind', name: 'Tailwind CSS' },
    { id: 'shadcn', name: 'ShadCN/UI' },
    { id: 'ux', name: 'UX Design (Krug)' },
    { id: 'accessibility', name: 'Accessibility' },
    { id: 'figma', name: 'Figma' },
    { id: 'cursor', name: 'Cursor' },
    { id: 'firebase', name: 'Google Firebase' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col w-full">
      {/* Header - Sticky Navigation */}
      <header className="sticky top-0 z-50 py-4 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800 shadow-lg w-full">
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">Tommo White</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <button 
                  className="text-sm font-medium px-3 py-2 rounded-md hover:text-orange-400 hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveSection('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="text-sm font-medium px-3 py-2 rounded-md hover:text-orange-400 hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveSection('projects')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  className="text-sm font-medium px-3 py-2 rounded-md hover:text-orange-400 hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveSection('reflections')}
                >
                  Reflections
                </button>
              </li>
              <li>
                <a 
                  href="/~tommobat/portfolio/reflection.pdf" 
                  target="_blank" 
                  className="text-sm px-4 py-2 rounded-md bg-orange-600 hover:bg-amber-600 hover:shadow-glow hover:-translate-y-0.5 text-white transition-all duration-300"
                >
                  Download Reflection
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full">
          {/* Home Section */}
          {activeSection === 'home' && (
            <div className="max-w-6xl mx-auto px-4">
              {/* Hero Section with Gradient Background */}
              <div className="relative min-h-[80vh] flex items-center justify-center mb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900 z-0"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmYjkyM2MxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 z-0"></div>
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                  <AnimatedElement animation="fadeIn" duration={0.4}>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
                        Tommo's Web Development Portfolio
                      </span>
                    </h2>
                  </AnimatedElement>
                  <AnimatedElement animation="slideUp" delay={0.1} duration={0.4}>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                      Showcasing my journey through web development technologies and frameworks
                    </p>
                  </AnimatedElement>
                  <AnimatedElement animation="zoomIn" delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-5 mb-10">
                      <Button 
                        className="px-6 py-3 text-md text-white font-medium shadow-glow border border-orange-700/50 hover:-translate-y-1 transition-all duration-300 bg-gray-900/80"
                        onClick={() => document.getElementById('frontend-section')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Explore Portfolio
                      </Button>
                    </div>
                  </AnimatedElement>
                  
                    {/* Scroll indicator */}
                    <AnimatedElement animation="fadeIn" delay={0.3} duration={0.6}>
                        <div className="absolute top-90 left-1/2 transform -translate-x-1/2 animate-bounce">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                        <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
                      </svg>
                      </div>
                    </AnimatedElement>
                </div>
              </div>
              
                {/* Compact fixed navigation buttons that animate to the top-right after scrolling past the hero section */}
                <div 
                  className={`fixed top-[5.5rem] right-4 z-50 flex flex-col gap-2 p-2 bg-gray-800/80 rounded-lg shadow-lg transition-all duration-300 transform ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                  }`}
                >
                  <Button 
                  className="text-sm font-medium px-4 py-2 shadow-md hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-orange-600 to-amber-500 text-white rounded-md"
                  onClick={() => document.getElementById('frontend-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                  Frontend
                  </Button>
                  <Button 
                  className="text-sm font-medium px-4 py-2 shadow-md hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-orange-500 to-amber-400 text-white rounded-md"
                  onClick={() => document.getElementById('design-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                  Design
                  </Button>
                  <Button 
                  className="text-sm font-medium px-4 py-2 shadow-md hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-amber-500 to-orange-400 text-white rounded-md"
                  onClick={() => document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                  Tools
                  </Button>
                </div>

              
              
              {/* Frontend Section */}
              <div id="frontend-section" className="mb-24">
                <AnimatedElement animation="fadeIn">
                  <div className="flex items-center mb-10">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-grow"></div>
                    <h3 className="text-3xl font-bold mx-6 text-white">Frontend Technologies</h3>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-grow"></div>
                  </div>
                </AnimatedElement>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {topics
                    .filter(topic => ['html', 'css', 'javascript', 'react', 'bootstrap', 'tailwind', 'shadcn'].includes(topic.id))
                    .map((topic, index) => (
                      <AnimatedElement key={topic.id} animation="slideUp" delay={0.1 * index}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="cursor-pointer border border-orange-500 bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:shadow-glow hover:scale-105 transition-transform duration-500 overflow-hidden group">
                              <CardHeader className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <CardTitle className="text-xl text-white relative z-10 group-hover:text-orange-400 transition-colors duration-300">
                                {topic.name}
                              </CardTitle>
                              </CardHeader>
                              
                              <CardFooter>
                                <Button variant="ghost" className="group-hover:text-orange-400 transition-colors duration-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                  </svg>
                                </Button>
                              </CardFooter>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gray-900 border border-gray-800">
                            <DialogHeader>
                              <DialogTitle className="text-2xl text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">{topic.name}</DialogTitle>
                              <DialogDescription className="text-gray-400">
                                My portfolio work with {topic.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              {topic.id === 'html' && <HtmlSection />}
                              {topic.id === 'css' && <CssSection />}
                              {topic.id === 'javascript' && <JavaScriptSection />}
                              {topic.id === 'react' && <ReactSection />}
                              {topic.id === 'bootstrap' && <BootstrapSection />}
                              {topic.id === 'tailwind' && <TailwindSection />}
                              {topic.id === 'shadcn' && <ShadcnSection />}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </AnimatedElement>
                    ))}
                </div>
              </div>
              
              {/* Design Section */}
              <div id="design-section" className="mb-24">
                <AnimatedElement animation="fadeIn">
                  <div className="flex items-center mb-10">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-grow"></div>
                    <h3 className="text-3xl font-bold mx-6 text-white">Design & User Experience</h3>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-grow"></div>
                  </div>
                </AnimatedElement>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {topics
                    .filter(topic => ['ux', 'accessibility', 'figma'].includes(topic.id))
                    .map((topic, index) => (
                      <AnimatedElement key={topic.id} animation="slideUp" delay={0.1 * index}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="cursor-pointer border border-orange-500 bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:shadow-glow hover:scale-105 transition-transform duration-500 overflow-hidden group">
                              <CardHeader className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <CardTitle className="text-xl text-white relative z-10 group-hover:text-orange-400 transition-colors duration-300">
                                {topic.name}
                              </CardTitle>
                              </CardHeader>
                              
                              <CardFooter>
                                <Button variant="ghost" className="group-hover:text-orange-400 transition-colors duration-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                  </svg>
                                </Button>
                              </CardFooter>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gray-900 border border-gray-800">
                            <DialogHeader>
                              <DialogTitle className="text-2xl text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">{topic.name}</DialogTitle>
                              <DialogDescription className="text-gray-400">
                                My portfolio work with {topic.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              {topic.id === 'ux' && <UxDesignSection />}
                              {topic.id === 'accessibility' && <AccessibilitySection />}
                              {topic.id === 'figma' && <FigmaSection />}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </AnimatedElement>
                    ))}
                </div>
              </div>
              
              {/* Tools Section */}
              <div id="tools-section" className="mb-16">
                <AnimatedElement animation="fadeIn">
                  <div className="flex items-center mb-10">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-grow"></div>
                    <h3 className="text-3xl font-bold mx-6 text-white">Development Tools & Services</h3>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-grow"></div>
                  </div>
                </AnimatedElement>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {topics
                    .filter(topic => ['ssh', 'cursor', 'firebase'].includes(topic.id))
                    .map((topic, index) => (
                      <AnimatedElement key={topic.id} animation="slideUp" delay={0.1 * index}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="cursor-pointer border border-orange-500 bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:shadow-glow hover:scale-105 transition-transform duration-500 overflow-hidden group">
                              <CardHeader className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <CardTitle className="text-xl text-white relative z-10 group-hover:text-orange-400 transition-colors duration-300">
                                {topic.name}
                              </CardTitle>
                              </CardHeader>
                              
                              <CardFooter>
                                <Button variant="ghost" className="group-hover:text-orange-400 transition-colors duration-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                  </svg>
                                </Button>
                              </CardFooter>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gray-900 border border-gray-800">
                            <DialogHeader>
                              <DialogTitle className="text-2xl text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">{topic.name}</DialogTitle>
                              <DialogDescription className="text-gray-400">
                                My portfolio work with {topic.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              {topic.id === 'ssh' && <SshSection />}
                              {topic.id === 'cursor' && <CursorSection />}
                              {topic.id === 'firebase' && <FirebaseSection />}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </AnimatedElement>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects & Reflections Sections */}
          {activeSection === 'projects' && (
            <div className="max-w-4xl mx-auto">
              <AnimatedElement animation="fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">Projects</h2>
                  <p className="text-xl text-gray-400">
                    Showcasing my key web development projects from this semester
                  </p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slideUp" delay={0.2}>
                <div className="bg-gray-800/70 border border-gray-700 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-300">La Cage Bar Website</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="text-gray-300 mb-4">
                        A modern, responsive website for La Cage, a local bar in Lewiston, Maine. Created with React, Tailwind CSS, and ShadCN/UI components.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">Tailwind CSS</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">ShadCN/UI</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">TypeScript</span>
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href="https://tommo.bates-catapult.net/cage_website_demo/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded bg-orange-600 hover:bg-amber-600 hover:shadow-glow hover:-translate-y-1 text-white transition-all duration-300"
                        >
                          View Live Site
                        </a>
                        <a 
                          href="#" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 hover:shadow-glow hover:-translate-y-1 text-white transition-all duration-300 flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          GitHub
                        </a>
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <h4 className="font-medium mb-2 text-white">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Business information display</li>
                        <li>Interactive event calendar</li>
                        <li>Weekly hours schedule</li>
                        <li>Digital menu with categories</li>
                        <li>Social media integration</li>
                        <li>Responsive mobile design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slideUp" delay={0.3}>
                <div className="bg-gray-800/70 border border-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-orange-300">DCS Major Worksheet Prototype</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="text-gray-300 mb-4">
                        An interactive guide to the new Digital and Computational Studies major at Bates College. Features a comprehensive course catalog and interactive major requirements worksheet.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">TailwindCSS</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">TypeScript</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded">AI-assisted</span>
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href="https://tommo.bates-catapult.net/majorProto2/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded bg-orange-600 hover:bg-amber-600 hover:shadow-glow hover:-translate-y-1 text-white transition-all duration-300"
                        >
                          View Live Site
                        </a>
                        <a 
                          href="https://github.com/blawson-bates/dcs325_w2025_final_delta.git" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 hover:shadow-glow hover:-translate-y-1 text-white transition-all duration-300 flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          GitHub
                        </a>
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <h4 className="font-medium mb-2 text-white">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Interactive course selection</li>
                        <li>Major requirements tracking</li>
                        <li>Dynamic data visualization</li>
                        <li>Real-time requirement validation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          )}

          {activeSection === 'reflections' && (
            <div className="max-w-4xl mx-auto">
              <AnimatedElement animation="fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">Reflections</h2>
                  <p className="text-xl text-gray-400">
                    My thoughts and learnings from this semester in web development
                  </p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slideUp" delay={0.2}>
                <div className="bg-gray-800/70 border border-gray-700 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-300">Course Reflections</h3>
                  <p className="text-gray-400 mb-4">
                    For detailed reflections on my experience throughout the semester, including answers to the specific prompts, please download the PDF document.
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="/~tommobat/portfolio/reflection.txt" 
                      target="_blank" 
                      className="px-4 py-2 rounded bg-orange-600 hover:bg-amber-600 hover:shadow-glow hover:-translate-y-1 text-white transition-all duration-300"
                    >
                      Download Reflection
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-700 text-center text-gray-400 mt-12 w-full">
        <AnimatedElement animation="fadeIn">
          <div className="w-full px-4">
            <p>© {new Date().getFullYear()} Web Development Portfolio | Created with React + Vite + Tailwind CSS v4</p>
            <div className="flex justify-center gap-4 mt-4">
              <img src={reactLogo} className="h-6" alt="React logo" />
            </div>
            <div className="mt-4">
              <button 
                className="text-orange-500 hover:underline transition-colors"
                onClick={() => setActiveSection('home')}
              >
                Back to Home
              </button>
            </div>
          </div>
        </AnimatedElement>
      </footer>
    </div>
  )
}

export default App;
