import React from 'react'

function OOPConcepts() {
  return (
    <div className="p-6 min-h-screen">
      
    {/* Object-Oriented Programming Section */}
    <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Object-Oriented Programming (OOP)</h3>
      <p className="text-gray-800 mb-4">
        Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and functions that manipulate the data. OOP is known for its principles such as Encapsulation, Inheritance, and Polymorphism.
      </p>

      {/* Basic OOP Concepts */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-800">Basic OOP Concepts</h4>
        <pre className="bg-gray-900 text-white p-2 rounded mb-2">
          {`class Car {\n  public:\n    std::string brand;\n    int year;\n    Car(std::string b, int y) : brand(b), year(y) {}\n    void display() {\n      std::cout << "Brand: " << brand << ", Year: " << year << std::endl;\n    }\n};\n\nCar myCar("Toyota", 2020);\nmyCar.display();`}
        </pre>
        <p className="text-gray-800">
          In this example, we define a class <code>Car</code> with attributes like <code>brand</code> and <code>year</code>. The <code>display()</code> method prints the car's details. OOP encourages bundling data and behavior together in classes.
        </p>
      </div>

      {/* OOP Principles */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-800">OOP Principles</h4>
        <p className="text-gray-800 mb-4">
          - **Encapsulation**: Wrapping data (variables) and functions (methods) together inside a class.<br />
          - **Inheritance**: A class can inherit properties and methods from another class.<br />
          - **Polymorphism**: A function or method can have multiple implementations.
        </p>
        <pre className="bg-gray-900 text-white p-2 rounded mb-2">
          {`class SportsCar : public Car {\n  public:\n    int maxSpeed;\n    SportsCar(std::string b, int y, int s) : Car(b, y), maxSpeed(s) {}\n    void display() {\n      std::cout << "Brand: " << brand << ", Year: " << year << ", Max Speed: " << maxSpeed << std::endl;\n    }\n};\n\nSportsCar mySportsCar("Ferrari", 2022, 220);\nmySportsCar.display();`}
        </pre>
        <p className="text-gray-800">
          Here, the <code>SportsCar</code> class inherits from <code>Car</code>, showing the concept of inheritance, while overriding the <code>display()</code> method demonstrates polymorphism.
        </p>
      </div>
    </div>

  </div>
  )
}

export default OOPConcepts
