export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto  p-8 rounded-xl ">
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          About Password Manager
        </h1>

        <p className="text-gray-600 mb-6">
          This Password Manager is a simple and secure web application that helps users
          store and manage their passwords in one place. It is built using modern web
          technologies to provide a clean and easy user experience.
        </p>

        <h2 className="text-xl font-medium text-gray-800 mb-3">
          Key Features
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>Store multiple website passwords safely</li>
          <li>Show and hide passwords when needed</li>
          <li>Add and delete password entries easily</li>
          <li>Simple and clean user interface</li>
        </ul>

        <h2 className="text-xl font-medium text-gray-800 mb-3">
          Technologies Used
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>Next.js (React Framework)</li>
          <li>React Hook Form for form handling</li>
          <li>Clerk for authentication</li>
          <li>Tailwind CSS for styling</li>
        </ul>

        <h2 className="text-xl font-medium text-gray-800 mb-3">
          Purpose
        </h2>

        <p className="text-gray-600 mb-6">
          The main purpose of this project is to help users manage their passwords
          securely and efficiently without remembering each password manually.
        </p>

        <p className="text-gray-400 text-sm text-center">
          © 2026 Password Manager - PassVault . All rights reserved.
        </p>

      </div>
    </div>
  );
}