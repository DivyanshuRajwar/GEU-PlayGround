import React from 'react'

function Introduction() {
  return (
    <div className="p-6 0 min-h-screen">
    {/* Main Heading */}
    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
      This is Documentation of C++
    </h1>

    {/* Introduction Section */}
    <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Introduction to C++
      </h2>
      <p className="text-gray-800 mb-4">
        C++ is a high-level programming language developed by Bjarne Stroustrup 
        as an extension of the C language. It is widely used in various 
        applications, including game development, systems programming, and 
        competitive programming.
      </p>
      <p className="text-gray-800">
        With its support for object-oriented programming (OOP), C++ allows for 
        building large-scale, maintainable applications. It also provides 
        features such as memory management, pointers, and templates, making 
        it both powerful and versatile.
      </p>
    </div>

    {/* What is C++ Section */}
    <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        What is C++?
      </h2>
      <p className="text-gray-800 mb-4">
        C++ is a general-purpose programming language created as an enhancement 
        of the C language. It combines the power and flexibility of C with 
        additional features such as classes and objects, which facilitate 
        object-oriented programming.
      </p>
      <p className="text-gray-800">
        C++ is often referred to as a "multi-paradigm" language, supporting 
        procedural, object-oriented, and generic programming paradigms. It is 
        widely used in software development for performance-critical 
        applications.
      </p>
    </div>

    {/* Why C++ Section */}
    <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Why C++?
      </h2>
      <p className="text-gray-800 mb-4">
        C++ is known for its efficiency and performance. It provides low-level 
        memory control, making it ideal for resource-constrained applications, 
        such as operating systems, embedded systems, and video games.
      </p>
      <p className="text-gray-800">
        Additionally, C++ supports a wide variety of programming techniques, 
        from low-level system programming to high-level abstraction. This 
        makes it a versatile language that can be used for developing a wide 
        range of software, from drivers to applications to large-scale systems.
      </p>
    </div>
    {/*  History and Versions  */}
    <div className="transparent-card p-4 rounded shadow-md flex flex-col text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            History and Versions
      </h2>
      <p className="text-gray-800 mb-4">
            C++ was developed by Bjarne Stroustrup in 1979 at Bell Labs. Initially 
            known as "C with Classes," it introduced object-oriented programming 
            features to the C language.
      </p>
      <p className="text-gray-800">
         Major versions of C++ include:
      </p>
      <ul className="list-disc list-inside text-gray-800 text-left pl-[350px]  ">
            <li>C++98 (1998)</li>
            <li>C++03 (2003)</li>
            <li>C++11 (2011)</li>
            <li>C++14 (2014)</li>
            <li>C++17 (2017)</li>
            <li>C++20 (2020)</li>
      </ul>
    </div>
    
  </div>
  )
}

export default Introduction
