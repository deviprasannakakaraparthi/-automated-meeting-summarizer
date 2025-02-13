import React from "react";

function SummaryResult({ summaryData }) {
  return (
    <div className="mt-6 p-4 bg-gray-700 rounded-lg w-96">
      <h2 className="text-lg font-bold">Transcript:</h2>
      <p className="text-sm">{summaryData.transcript}</p>
      <h2 className="text-lg font-bold mt-4">Summary:</h2>
      <p className="text-sm">{summaryData.summary}</p>
    </div>
  );
}

export default SummaryResult;

