import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const questionData = [
  {
    id: "1",
    question: "Indexes of Subarray Sum",
    difficulty: "Medium",
    companies: ["Amazon", "Facebook", "+5 more"],
    tags: ["array"],
  },
  {
    id: "2",
    question: "Find Maximum Subarray Sum",
    difficulty: "Hard",
    companies: ["Microsoft", "Apple"],
    tags: ["Greedy"],
  },
  {
    id: "3",
    question: "Print Hello World",
    difficulty: "Easy",
    companies: ["JP Morgan"],
    tags: ["basic"],
  },
  {
    id: "4",
    question: "Merge Two Sorted Lists",
    difficulty: "Medium",
    companies: ["Google", "Amazon", "+10 more"],
    tags: ["sorting"],
  },
  {
    id: "5",
    question: "Binary Tree to DLL",
    difficulty: "Hard",
    companies: ["JP Morgan", "Accolite"],
    tags: ["data structure"],
  },
];

function DsaPage() {
  const [time, setTime] = useState(
    localStorage.getItem("time") ? parseInt(localStorage.getItem("time"), 10) : 30
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    JSON.parse(localStorage.getItem("currentQuestion")) || questionData[0]
  );

  // Solved question logic
  const solvedQuestionIds = ["1", "3", "5"]; // Use string IDs
  const solvedQuestions = questionData.filter((question) =>
    solvedQuestionIds.includes(question.id)
  );
  const [solvedIndex, setSolvedIndex] = useState(0);

  // Function to pick a random question
  const pickRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionData.length);
    const selectedQuestion = questionData[randomIndex];
    setCurrentQuestion(selectedQuestion);
    localStorage.setItem("currentQuestion", JSON.stringify(selectedQuestion));
  };

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          pickRandomQuestion(); // Change the question
          return 30; // Reset the timer to 30 seconds
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("time", time.toString());
  }, [time]);

  // Function to handle showing the next solved question
  const handleNextSolvedQuestion = () => {
    setSolvedIndex((prevIndex) => (prevIndex + 1) % solvedQuestions.length);
  };

  const seconds = time % 60;

  return (
    <div className="height width rounded-md centerDiv flex justify-between items-start p-10 overflow-x-auto">
      {/* Left Side (Questions) */}
      <div className="w-[55%]  ">
        {/* Header */}
        <div className="h-10 w-[110%] bg-blue-text flex items-center gap-8 p-4 mb-4 rounded-lg font-semibold">
          <h3 className="text-white">S.No</h3>
          <h3 className="text-white">Title</h3>
          <h3 className="ml-[295px] text-white">Tags</h3>
          <h3 className="text-white">Difficulty</h3>
        </div>
        {questionData.map((question, index) => (
          <div
            key={question.id}
            className="bg-white p-6 mb-4 rounded-lg shadow-lg flex justify-between items-center"
            style={{ height: "100px", width: "110%" }}
          >
            <div className="w-[50%] flex flex-col justify-between">
              <h3 className="font-bold text-lg">
                {index + 1}. {question.question}
              </h3>
              <div className="flex gap-4 ml-3">
                {question.companies.map((company, idx) => (
                  <h4 key={idx} className="text-gray-500 font-semibold text-sm">
                    {company}
                  </h4>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              {question.tags.map((tag, idx) => (
                <h3 key={idx} className="text-black font-semibold text-lg">{tag}</h3>
              ))}
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex gap-8">
                <h5 className="font-semibold">{question.difficulty}</h5>
                <button className="bg-light-blue text-blue-text font-semibold py-1 px-4 rounded-lg shadow-md hover:bg-blue-text hover:text-white transition duration-300">
                  Solve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side (Problem of the Day and Solved Questions) */}
      <div className="w[45%] flex flex-col gap-5">
        {/* Problem of the Day */}
        <div className="bg-slate-200 p-6 rounded-xl shadow-lg" style={{ height: "240px", width: "400px" }}>
          <p className="bg-light-blue text-blue-text font-bold py-2 px-3 rounded-md text-center mb-3 mt-[-10px] text-lg">
            Problem of the Day
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">{currentQuestion.question}</h2>
            <div className="flex gap-4">
              {currentQuestion.companies.map((company, idx) => (
                <h4 key={idx} className="text-gray-500 font-semibold text-sm">{company}</h4>
              ))}
            </div>
            <div className="flex gap-6 items-center">
              <h4 className="font-bold">{seconds < 10 ? `0${seconds}` : seconds} seconds</h4>
              <button className="bg-light-blue text-blue-text py-2 px-4 rounded-lg shadow-md hover:bg-blue-text hover:text-white font-semibold transition duration-300">
                Solve Problem
              </button>
            </div>
          </div>
        </div>
                  {/* Session Section */}
        <div className="bg-slate-200 rounded-xl shadow-lg flex p-4" style={{ height: "180px", width: "400px" }}>
          <div className="flex-1 flex items-center p-5">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-lg font-semibold">Session</h3>
              <ProgressBar progress={70} />
            </div>
          </div>

          {/* Difficulty Section */}
          <div className="flex-1 flex flex-col justify-center items-start gap-3 font-semibold  text-xl  ">
            <div className="flex gap-5 w-full justify-between ">
              <h3 className="text-blue-600">Easy</h3>
              <h3>12/20</h3>
            </div>
            <div className="flex gap-5 w-full justify-between ">
              <h3 className="text-pink-600">Medium</h3>
              <h3>12/20</h3>
            </div>
            <div className="flex gap-5 w-full justify-between">
              <h3 className="text-sky-600">Hard</h3>
              <h3>12/20</h3>
            </div>
          </div>
        </div>    
        {/* Revise Your Solved Section */}
        <div className="bg-slate-200 p-6 rounded-xl shadow-lg" style={{ height: "200px", width: "400px" }}>
          <p className="bg-light-blue text-blue-text font-bold py-2 px-3 rounded-md text-center mb-3 text-lg">
            Revise Your Solved
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">{solvedQuestions[solvedIndex].question}</h2>
            <div className="flex gap-4">
              {solvedQuestions[solvedIndex].companies.map((company, idx) => (
                <h4 key={idx} className="text-gray-500 font-semibold text-sm">{company}</h4>
              ))}
            </div>
            <div className="flex gap-6 items-center">
              <button className="bg-light-blue text-blue-text py-2 px-4 rounded-lg shadow-md hover:bg-blue-text hover:text-white font-semibold transition duration-300">
                Solve Problem
              </button>
              <button
                className="bg-light-blue text-blue-text py-2 px-4 rounded-lg shadow-md hover:bg-blue-text hover:text-white font-semibold transition duration-300"
                onClick={handleNextSolvedQuestion}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        
        </div>
      </div>

  );
}

export default DsaPage;
