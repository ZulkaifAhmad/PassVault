export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-10">
      
      <div className="max-w-4xl mx-auto bg-white   rounded-2xl p-6 sm:p-10">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
          About Password Manager
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          Password Manager is a secure and modern web application that helps users
          store, manage, and organize their passwords in one safe place. It is designed
          with simplicity, usability, and security in mind so that users can access their
          credentials anytime without remembering them manually.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Key Features
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
            <li>Securely store multiple website credentials</li>
            <li>Show and hide passwords with one click</li>
            <li>Add new password entries easily using a simple form</li>
            <li>Delete unwanted passwords anytime</li>
            <li>Clean and responsive user interface</li>
            <li>Fast and lightweight performance</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Technologies Used
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
            <li>Next.js (React-based full-stack framework)</li>
            <li>React Hook Form for form validation and handling</li>
            <li>Clerk Authentication for secure login system</li>
            <li>Tailwind CSS for modern and responsive styling</li>
            <li>Lucide React Icons for clean UI icons</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Security Approach
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            This application uses authentication to ensure that only the authorized user
            can access their saved passwords. Data is stored securely using user-specific
            metadata, and sensitive information is hidden by default for better privacy.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Purpose of This Project
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The main goal of this project is to simplify password management for users.
            Instead of remembering multiple passwords, users can store them in one place
            and access them quickly whenever needed.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center border-t pt-6">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2026 Password Manager - PassVault. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}