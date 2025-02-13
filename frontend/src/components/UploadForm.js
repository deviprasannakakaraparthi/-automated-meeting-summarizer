import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

function UploadForm({ setSummaryData }) {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://your-ec2-ip:5000/upload", formData);
      setSummaryData(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }, [setSummaryData]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="border-2 border-dashed p-6 rounded-lg w-96 text-center cursor-pointer bg-gray-800">
      <div {...getRootProps()} className="p-6">
        <input {...getInputProps()} />
        <p>Drag & Drop an audio file here, or click to upload.</p>
      </div>
    </div>
  );
}

export default UploadForm;

