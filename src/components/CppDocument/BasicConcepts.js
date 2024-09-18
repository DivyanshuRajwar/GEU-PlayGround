import React from 'react';

function BasicConcepts() {
  return (
    <div className="p-6 min-h-screen">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
        Basic Concepts of C++
      </h1>

      {/* Syntax and Structure Section */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center ">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Syntax and Structure
        </h2>
        <p className="text-gray-800 mb-4">
          C++ has a structured syntax which defines the rules for writing code. A typical C++ program follows this structure:
        </p>
        <div className="flex flex-wrap gap-4 text-gray-800">
          <div className="flex-1">
            <h3 className="font-semibold">Headers</h3>
            <p className="bg-gray-900 text-white p-2 rounded">#include &lt;iostream&gt;</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Function Definitions</h3>
            <p className="bg-gray-900 text-white p-2 rounded">int main() { }</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Statements and Expressions</h3>
            <p className="bg-gray-900 text-white p-2 rounded">std::cout &lt;&lt; "Hello, World!";</p>
          </div>
        </div>
      </div>

      {/* Data Types Section */}
      <div className="transparent-card  rounded shadow-md mb-6 text-center ">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Data Types
        </h2>
        <p className="text-gray-800 mb-4">
          C++ offers various data types to store different kinds of values:
        </p>
        <div className="flex flex-wrap gap-4 text-gray-800">
          <div className="flex-1">
            <h3 className="font-semibold">Primitive Data Types</h3>
            <ul className="list-disc list-inside text-left pl-[150px]  ">
              <li><strong>int: </strong>4 bytes</li>
              <li><strong>char: </strong>1 byte  </li>
              <li><strong>float: </strong>4 bytes</li>
              <li><strong>double: </strong> 8 bytes</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Non-Primitive Data Types</h3>
            <ul className="list-disc list-inside">
              <li><strong>arrays</strong></li>
              <li><strong>strings</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Variables Section */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Variables
        </h2>
        <p className="text-gray-800 mb-4">
          Variables are used to store data values. In C++, they must be declared before use. They also have scope and lifetime, which define where and for how long they can be accessed. Variable naming follows these rules:
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4 text-left pl-[300px]  ">
          <li><strong>Declaration:</strong> int num;</li>
          <li><strong>Initialization:</strong> int num = 5;</li>
        </ul>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Naming Rules:
        </h2>
          <ul className="list-disc list-inside text-gray-800 text-left pl-[150px]">
            <li>Variable names must start with a letter (a-z, A-Z) or an underscore (_).</li>
            <li>Variable names can contain letters, digits (0-9), and underscores.</li>
            <li>Variable names are case-sensitive (e.g., "var" and "Var" are different).</li>
          </ul>
        
      </div>

      {/* Operators Section */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Operators
        </h2>
        <p className="text-gray-800 mb-4">
          Operators are symbols used to perform operations on variables and values. C++ supports different types of operators, including:
        </p>
        <div className="flex flex-wrap gap-4 text-gray-800">
          <div className="flex-1">
            <h3 className="font-semibold">Arithmetic Operators</h3>
            <p className="bg-gray-900 text-white p-2 rounded">+ , - , * , /</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Relational Operators</h3>
            <p className="bg-gray-900 text-white p-2 rounded">== , &lt; , &gt;</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Logical Operators</h3>
            <p className="bg-gray-900 text-white p-2 rounded">&& , || , !</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Examples</h3>
            <p className="bg-gray-900 text-white p-2 rounded">int a = 5; int b = 10; bool result = (a &lt; b);</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default BasicConcepts;
