import React from 'react';
import TopicSection from './TopicSection';

const FirebaseSection: React.FC = () => {
  return (
    <TopicSection
      title="Google Firebase"
      description="A comprehensive backend platform for building web and mobile applications."
    >
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <p>
            Firebase handles the backend of websites for developers. This includes storing data, and data inputted by users in a secure manner. Instead of having to write a whole server from scratch, Firebase does everything and is very robust. It is great for prototypes or small apps so that the focus can be on the features of the app, not on whether my server is secure and whether I need to build one.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">How to Add Firebase to a Project</h3>
          <div className="bg-gray-900 p-4 rounded overflow-x-auto">
            <pre className="text-sm text-gray-100">
              <code className="text-white">{`# Install Firebase in your project
npm install firebase

`}</code>
            </pre>
          </div>
          <p className="mt-3">
            After installing, you can import and use Firebase features like Firestore, Authentication, and Hosting in your code.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">Example: Importing Firebase in JavaScript</h3>
          <div className="bg-gray-900 p-4 rounded overflow-x-auto">
            <pre className="text-sm text-gray-100">
              <code className="text-white">{`// Import Firebase in your code
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  // ...other config
};

const app = initializeApp(firebaseConfig);
`}</code>
            </pre>
          </div>
        </div>
      </div>
    </TopicSection>
  );
};

export default FirebaseSection;
