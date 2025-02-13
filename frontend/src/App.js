import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import SummaryResult from "./components/SummaryResult";

function App() {
  const [summaryData, setSummaryData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Automated Meeting Summarizer</h1>
      <UploadForm setSummaryData={setSummaryData} />
      {summaryData && <SummaryResult summaryData={summaryData} />}
    </div>
  );
}

export default App;

