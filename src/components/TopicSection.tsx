import React from 'react';

interface TopicSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const TopicSection: React.FC<TopicSectionProps> = ({ title, description, children }) => {
  return (
    <section className="max-w-4xl mx-auto py-8">
      <div className="border-l-4 border-orange-500 pl-4 mb-6">
        <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <div className="mt-6">
        {children}
      </div>
    </section>
  );
};

export default TopicSection;
