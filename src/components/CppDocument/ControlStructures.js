import React from 'react'

function ControlStructures() {
  return (
    <div className="p-6 min-h-screen">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Control Structures
        </h1>
      {/* Control Structures Section */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        
        <p className="text-gray-800 mb-4">
          Control structures direct the flow of a program. Examples include:
        </p>
        <div className="flex flex-wrap gap-4 text-gray-800">
          <div className="flex-1">
            <h3 className="font-semibold">If Statement</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`if (condition) {\n  // code\n}`}
            </pre>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Switch Statement</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`switch (expression) {\n  case value1:\n    // code\n    break;\n  case value2:\n    // code\n    break;\n}`}
            </pre>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Ternary Operator</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`condition ? trueExpression : falseExpression;`}
            </pre>
          </div>
        </div>
      </div>

      {/* Loops Section */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loops</h2>
        <p className="text-gray-800 mb-4">
          Loops are used to repeat code until a condition is met. Examples include:
        </p>
        <div className="flex flex-wrap gap-4 text-gray-800">
          <div className="flex-1">
            <h3 className="font-semibold">For Loop</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`for (int i = 0; i < 5; i++) {\n  std::cout << i << " "; \n}`}
            </pre>
            <p className="text-gray-700 mt-2">Example: Printing numbers from 0 to 4.</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">While Loop</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`int i = 0;\nwhile (i < 5) {\n  std::cout << i << " ";\n  i++;\n}`}
            </pre>
            <p className="text-gray-700 mt-2">Example: Printing numbers from 0 to 4 using while loop.</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Do-While Loop</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`int i = 0;\ndo {\n  std::cout << i << " ";\n  i++;\n} while (i < 5);`}
            </pre>
            <p className="text-gray-700 mt-2">Example: Printing numbers from 0 to 4 using do-while loop.</p>
          </div>
        </div>
      </div>

      {/* Table Multiplication Example */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loop Example: Multiplication Table</h2>
        <pre className="bg-gray-900 text-white p-4 rounded text-left">
          {`for (int i = 1; i <= 10; i++) {\n  for (int j = 1; j <= 10; j++) {\n    std::cout << i * j << "\\t";\n  }\n  std::cout << "\\n";\n}`}
        </pre>
        <p className="text-gray-700 mt-2">
          This nested loop prints a multiplication table from 1 to 10.
        </p>
      </div>

      {/* Functions Section */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Functions</h2>
        <p className="text-gray-800 mb-4">
          Functions in C++ are used to encapsulate code into reusable blocks. There are different types of functions:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-800">
          <div className="flex-2">
            <h3 className="font-semibold">Function with Arguments and Return Type</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`int add(int a, int b) {\n  return a + b;\n}`}
            </pre>
            <p className="text-gray-700 mt-2">This function takes two integers and returns their sum.</p>
          </div>
          <div className="flex-2">
            <h3 className="font-semibold">Function with Arguments and No Return Type</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`void printMessage(string message) {\n  std::cout << message;\n}`}
            </pre>
            <p className="text-gray-700 mt-2">This function takes a string and prints the message.</p>
          </div>
          <div className="flex-2">
            <h3 className="font-semibold">Function with No Arguments and Return Type</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`int getValue() {\n  return 42;\n}`}
            </pre>
            <p className="text-gray-700 mt-2">This function returns the constant value 42.</p>
          </div>
          <div className="flex-2">
            <h3 className="font-semibold">Function with No Arguments and No Return Type</h3>
            <pre className="bg-gray-900 text-white p-2 rounded">
              {`void display() {\n  std::cout << "Hello";\n}`}
            </pre>
            <p className="text-gray-700 mt-2">This function prints "Hello" with no return value.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlStructures;
