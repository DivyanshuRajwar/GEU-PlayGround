export default function GettingStarted() {
    return (
      <div className="relative p-6  min-h-screen">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Getting Started with C++
        </h1>
  
        {/* Setting Up the Development Environment Section */}
        <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Setting Up the Development Environment
            </h2>
            <p className="text-gray-800 mb-4">
                To begin writing C++ code, you need to set up your development environment. This involves installing a C++ compiler and choosing an IDE (Integrated Development Environment). Below are the steps to set up a popular C++ compiler, MinGW, and configuring environment variables.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Step 1: Download and Install MinGW
            </h3>
            <p className="text-gray-800 mb-4">
                MinGW (Minimalist GNU for Windows) is a widely-used C++ compiler. To install MinGW:
            </p>
            <ul className="list-decimal list-inside text-gray-800 mb-4">
                <li>Go to the official MinGW website and download the MinGW installation manager.</li>
                <li>Once downloaded, run the installer and follow the prompts to install.</li>
                <li>During installation, select the packages for C++ (g++) and C (gcc) compilers.</li>
                <li>After installation, MinGW will be installed in your <code>C:\MinGW</code> directory (or the directory you specified).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Step 2: Add MinGW to Environment Variables
            </h3>
            <p className="text-gray-800 mb-4">
                After installing MinGW, you need to add it to your system's environment variables to use it from the command line:
            </p>
            <ul className="list-decimal list-inside text-gray-800 mb-4">
                <li>
                Open the <strong>Start</strong> menu, search for "Environment Variables", and select "Edit the system environment variables".
                </li>
                <li>
                In the System Properties window, click the <strong>Environment Variables</strong> button.
                </li>
                <li>
                Under "System variables", scroll down and select the <strong>Path</strong> variable, then click <strong>Edit</strong>.
                </li>
                <li>
                Click <strong>New</strong> and add the path to the MinGW <code>bin</code> folder, usually <code>C:\MinGW\bin</code>.
                </li>
                <li>Click <strong>OK</strong> to save the changes and close all windows.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Step 3: Verify Installation
            </h3>
            <p className="text-gray-800 mb-4">
                After setting up the environment variables, verify that MinGW is installed correctly by opening the Command Prompt and typing:
            </p>
            <pre className="bg-gray-900 p-4 rounded text-white">
                <code>g++ --version</code>
            </pre>
            <p className="text-gray-800 mb-4">
                If the installation was successful, you should see the version of the g++ compiler displayed.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Step 4: Choose an IDE
            </h3>
            <p className="text-gray-800 mb-4">
                Once you have installed MinGW, you can choose an IDE to write and manage your C++ code. Some popular options include:
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-4 text-left pl-[350px]">
                <li>VS Code(recommended)</li>
                <li>Code::Blocks</li>
                <li>Visual Studio</li>
            </ul>
        </div>

  
        {/* Writing Your First Program Section */}
        <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Writing Your First Program
          </h2>
          <p className="text-gray-800 mb-4">
            Let's start by writing a simple "Hello World" program in C++. This program demonstrates the basic syntax and structure of a C++ program.
          </p>
          <pre className="bg-gray-900 p-4 rounded text-white">
            <code className="text-left">
              {
`#include <iostream>
int main() {
            cout << "Hello, World!";
return 0;
}`
  }
            </code>
          </pre>
          <p className="text-gray-800 mt-4">
            This program includes the `iostream` library, which allows input and output operations. It uses the `main()` function, which is the entry point for the program, and outputs the text "Hello, World!" to the console.
          </p>
        </div>
      </div>
    );
  }
  