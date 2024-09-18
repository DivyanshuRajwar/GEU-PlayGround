import React from 'react'

function ExceptionHandlingConcepts() {
  return (
    <div className="p-6 min-h-screen">

      {/* Exception Handling Section */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Exception Handling</h3>
        <p className="text-gray-800 mb-4">
          Exception Handling in C++ allows you to handle errors or exceptions that occur during program execution. This helps prevent the program from crashing unexpectedly.
        </p>

        {/* Try, Catch, and Throw */}
        <div className="mb-4">
          <h4 className="font-semibold text-lg text-gray-800">Try, Catch, and Throw</h4>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`try {\n  int num = 10;\n  if (num == 10) {\n    throw "Number is 10!";\n  }\n} catch (const char* msg) {\n  std::cerr << "Caught exception: " << msg << std::endl;\n}`}
          </pre>
          <p className="text-gray-800">
            In this example, we use <code>throw</code> to raise an exception when a condition is met. The <code>catch</code> block handles the exception by printing a message.
          </p>
        </div>

        {/* Standard Exceptions */}
        <div className="mb-4">
          <h4 className="font-semibold text-lg text-gray-800">Standard Exceptions</h4>
          <p className="text-gray-800 mb-4">
            C++ provides standard exception classes such as <code>std::exception</code>, <code>std::out_of_range</code>, and <code>std::invalid_argument</code>.
          </p>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <iostream>\n#include <stdexcept>\n\ntry {\n  throw std::out_of_range("Index out of range!");\n} catch (const std::out_of_range& e) {\n  std::cerr << "Caught exception: " << e.what() << std::endl;\n}`}
          </pre>
          <p className="text-gray-800">
            Here, we throw an <code>std::out_of_range</code> exception and handle it using the <code>what()</code> method to print the error message.
          </p>
        </div>
      </div>

    </div>
  )
}

export default ExceptionHandlingConcepts
