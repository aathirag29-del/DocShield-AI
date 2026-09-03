import React from "react";
import { Upload, FileText } from "lucide-react";

function DocumentUpload({ selectedFile, setSelectedFile }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-3 mb-4">
        <Upload className="text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-700">
          Upload Document
        </h2>
      </div>

      <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition">
        <FileText className="mx-auto text-gray-400 mb-3" size={40} />

        <p className="text-gray-600">
          Click to select your document
        </p>

        <p className="text-sm text-gray-400 mt-1">
          JPG, PNG or PDF
        </p>

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </label>

      {selectedFile && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">
            Selected Document
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {selectedFile.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default DocumentUpload;