import React from 'react';

function STLConcepts() {
  return (
    <div className="p-6 min-h-screen">

      {/* Introduction to STL */}
      <div className="transparent-card p-4 rounded shadow-md mb-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Standard Template Library (STL)</h3>
        <p className="text-gray-800 mb-4">
          The Standard Template Library (STL) is a powerful library in C++ that provides ready-to-use classes and functions to implement common data structures and algorithms. The STL is based on three key components: Containers, Iterators, and Algorithms. It allows developers to work with different types of data collections in a highly efficient and generic manner.
        </p>
      </div>

      {/* STL Containers Overview */}
      <div className="transparent-card p-4 rounded shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">STL Containers</h4>
        <p className="text-gray-800 mb-4">
          STL containers are used to store collections of data in different ways. The containers are classified into three major categories:
        </p>
        
        <ul className="text-left list-disc list-inside text-gray-800 mb-4">
          <li><strong>Sequence Containers:</strong> Arrays, Vectors, Deques, Lists, and Forward Lists. These store data in a linear fashion.</li>
          <li><strong>Container Adaptors:</strong> Stack, Queue, and Priority Queue. These provide restricted access to other containers.</li>
          <li><strong>Associative Containers:</strong> Set, Multiset, Map, and Multimap. These store data in a sorted fashion using keys.</li>
          <li><strong>Unordered Associative Containers:</strong> Unordered Set, Unordered Multiset, Unordered Map, and Unordered Multimap. These store data using hash tables for faster access.</li>
        </ul>
      </div>

      {/* Sequence Containers */}
      <div className="transparent-card p-4 rounded shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Sequence Containers</h4>
        <p className="text-gray-800 mb-4">
          Sequence containers store elements in a linear sequence. Common sequence containers are:
        </p>

        {/* Array */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">1. Array</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <array>\n#include <iostream>\n\nstd::array<int, 5> arr = {1, 2, 3, 4, 5};\nfor (int num : arr) {\n  std::cout << num << " ";\n}`}
          </pre>
          <p className="text-gray-800">
            An <code>array</code> is a fixed-size container that holds elements in a continuous block of memory.
          </p>
        </div>

        {/* Vector */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">2. Vector</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <vector>\n#include <iostream>\n\nstd::vector<int> vec = {1, 2, 3};\nvec.push_back(4);\nfor (int num : vec) {\n  std::cout << num << " ";\n}`}
          </pre>
          <p className="text-gray-800">
            A <code>vector</code> is a dynamic array that can resize itself automatically as elements are added.
          </p>
        </div>

        {/* Deque */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">3. Deque</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <deque>\n#include <iostream>\n\ndeque<int> dq = {10, 20};\ndq.push_front(5);\ndq.push_back(30);\nfor (int num : dq) {\n  std::cout << num << " ";\n}`}
          </pre>
          <p className="text-gray-800">
            A <code>deque</code> (double-ended queue) allows insertion and deletion from both the front and the back.
          </p>
        </div>
      </div>

      {/* Container Adaptors */}
      <div className="transparent-card p-4 rounded shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Container Adaptors</h4>
        <p className="text-gray-800 mb-4">
          Container adaptors provide restricted access to the underlying sequence containers like vectors or deques. Some common container adaptors are:
        </p>

        {/* Stack */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">1. Stack</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <stack>\n#include <iostream>\n\nstd::stack<int> stk;\nstk.push(1);\nstk.push(2);\nstd::cout << "Top: " << stk.top() << std::endl;\nstk.pop();`}
          </pre>
          <p className="text-gray-800">
            A <code>stack</code> is a LIFO (Last In First Out) data structure, where elements are inserted and removed from the same end.
          </p>
        </div>

        {/* Queue */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">2. Queue</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <queue>\n#include <iostream>\n\nstd::queue<int> que;\nque.push(1);\nque.push(2);\nstd::cout << "Front: " << que.front() << std::endl;\nque.pop();`}
          </pre>
          <p className="text-gray-800">
            A <code>queue</code> is a FIFO (First In First Out) data structure, where elements are inserted at the back and removed from the front.
          </p>
        </div>

        {/* Priority Queue */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">3. Priority Queue</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <queue>\n#include <iostream>\n\nstd::priority_queue<int> pq;\npq.push(10);\npq.push(30);\npq.push(20);\nstd::cout << "Top: " << pq.top() << std::endl;\npq.pop();`}
          </pre>
          <p className="text-gray-800">
            A <code>priority_queue</code> stores elements in such a way that the largest element is always at the top.
          </p>
        </div>
      </div>

      {/* Associative Containers */}
      <div className="transparent-card p-4 rounded shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Associative Containers</h4>
        <p className="text-gray-800 mb-4">
          Associative containers store elements formed by a combination of a key value and a mapped value, and they automatically arrange the data in sorted order.
        </p>

        {/* Set */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">1. Set</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <set>\n#include <iostream>\n\nstd::set<int> mySet = {5, 1, 3};\nmySet.insert(4);\nfor (int num : mySet) {\n  std::cout << num << " ";\n}`}
          </pre>
          <p className="text-gray-800">
            A <code>set</code> stores unique elements in a sorted order.
          </p>
        </div>

        {/* Map */}
        <div className="mb-4">
          <h5 className="font-semibold text-lg text-gray-800">2. Map</h5>
          <pre className="bg-gray-900 text-white p-2 rounded mb-2">
            {`#include <map>\n#include <iostream>\n\nstd::map<int, std::string> myMap;\nmyMap[1] = "One";\nmyMap[2] = "Two";\nstd::cout << "Key 1: " << myMap[1] << std::endl;`}
          </pre>
          <p className="text-gray-800">
            A <code>map</code> stores key-value pairs where each key is unique, and it automatically sorts the elements by the keys.
          </p>
        </div>
      </div>

    </div>
  );
}

export default STLConcepts;
