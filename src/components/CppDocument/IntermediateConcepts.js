import React from 'react';

function IntermediateConcepts() {
  return (
      <div className="p-6 min-h-screen">

        {/* Intermediate Concepts Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Intermediate Concepts</h2>

        {/* Arrays Section */}
        <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Arrays</h3>
            <p className="text-gray-800 mb-4">
                An array is a collection of elements of the same data type stored at contiguous memory locations.
                Arrays are used to store multiple values in a single variable.
            </p>

            {/* Array Declaration and Initialization */}
            <div className="mb-4">
                <h4 className="font-semibold text-lg text-gray-800">Declaration, Initialization, and Size</h4>
                <pre className="bg-gray-900 text-white p-2 rounded mb-2">
                    {`int numbers[5]; // Declares an array of size 5\nint numbers[] = {1, 2, 3, 4, 5}; // Initializes the array`}
                </pre>
                <p className="text-gray-800 mb-4">
                    You can declare an array by specifying the type, the name of the array, and the size. Initialization can be done at the time of declaration. The size of an array is fixed once declared, and you can calculate its size using:
                </p>
                <pre className="bg-gray-900 text-white p-2 rounded mb-2">
                    {`int size = sizeof(numbers) / sizeof(numbers[0]); // Calculates the size of the array`}
                </pre>
            </div>

            {/* Accessing, Manipulating, and Inputting Array Elements */}
            <div className="mb-4">
                <h4 className="font-semibold text-lg text-gray-800">Accessing, Manipulating, and Taking Input</h4>
                <pre className="bg-gray-900 text-white p-2 rounded mb-2">
                    {`numbers[0] = 10; // Assigns 10 to the first element\nint value = numbers[2]; // Accesses the 3rd element\n\n// Take input from user\nfor (int i = 0; i < 5; i++) {\n  std::cin >> numbers[i];\n}\n\n// Print all elements\nfor (int i = 0; i < 5; i++) {\n  std::cout << numbers[i] << " ";\n}`}
                </pre>
                <p className="text-gray-800">
                    Array elements are accessed using their index, with the first element starting at index 0. Arrays can be manipulated and accessed using loops, and input can be taken from the user using loops.
                </p>
            </div>
        </div>

        {/* Strings Section */}
        <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Strings</h3>
            <p className="text-gray-800 mb-4">
                In C++, strings are handled using the <code>std::string</code> class from the Standard Library. It provides a wide range of functions to manipulate and work with strings easily.
            </p>

            {/* Basic String Operations */}
            <div className="mb-4">
                <h4 className="font-semibold text-lg text-gray-800">Basic String Operations and Size</h4>
                <pre className="bg-gray-900 text-white p-2 rounded mb-2">
                    {`std::string name = "John";\nstd::string greeting = "Hello " + name;\nstd::cout << greeting; // Prints: Hello John\n\n// Get string length\nint length = name.length();`}
                </pre>
                <p className="text-gray-800 mb-4">
                    Strings can be concatenated using the <code>+</code> operator. The length of a string can be easily obtained using the <code>length()</code> function, which gives the number of characters in the string.
                </p>
            </div>

            {/* String Manipulation Functions */}
            <div className="mb-4">
                <h4 className="font-semibold text-lg text-gray-800">String Manipulation Functions and Input</h4>
                <pre className="bg-gray-900 text-white p-2 rounded mb-2">
                    {`std::string phrase = "C++ Programming";\nchar firstChar = phrase[0]; // Accesses the first character\nphrase.append(" is fun!"); // Appends to the string\n\n// Take input from user\nstd::string userInput;\nstd::cin >> userInput;`}
                </pre>
                <p className="text-gray-800">
                    The <code>append()</code> function adds more content to the string, while individual characters can be accessed using their index. You can also take input from the user using <code>std::cin</code> for strings.
                </p>
            </div>
        </div>
    </div>
  );
}

export default IntermediateConcepts;
