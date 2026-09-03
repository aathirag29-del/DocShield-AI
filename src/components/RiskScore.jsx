import React from "react";

function RiskScore() {
  const score = 72;

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-700">
        Overall Risk Score
      </h2>

      <div className="mt-6 text-center">
        <div className="text-5xl font-bold text-gray-800">
          {score}
          <span className="text-2xl text-gray-400">/100</span>
        </div>

        <p className="mt-3 text-gray-500">
          Risk assessment pending backend verification
        </p>

        <div className="mt-5 w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default RiskScore;