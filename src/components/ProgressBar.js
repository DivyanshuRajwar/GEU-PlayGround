import React from 'react';

const ProgessBar = ({ progress }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-blue-500 transition-all duration-300 ease-out"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl fill-current text-gray-700"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default ProgessBar;
