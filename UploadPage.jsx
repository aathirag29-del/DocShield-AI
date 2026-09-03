import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  FileText,
  Image,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Play,
} from "lucide-react";

function UploadPage() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalysing, setIsAnalysing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    // Image preview
    if (file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      document.getElementById("document-upload").click();
      return;
    }

    setIsAnalysing(true);

    // Demo loading only.
    // Later backend API can be connected here.
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                <ShieldCheck size={17} />
                AI-Powered Identity Intelligence
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                Secure Identity.
                <span className="block text-cyan-400">
                  Detect Fraud.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                DocShield AI helps investigators verify identity documents,
                detect tampering, validate QR data and analyze identity
                consistency.
              </p>

              {/* Upload Button */}
              <div className="mt-8">
                <input
                  id="document-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <button
                  onClick={handleUpload}
                  disabled={isAnalysing}
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isAnalysing ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Analysing...
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      Upload Document
                    </>
                  )}
                </button>
              </div>

              {/* Selected File */}
              {selectedFile && (
                <div className="mt-5 max-w-xl rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <FileText className="text-blue-400" size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-white">
                        {selectedFile.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {(selectedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>

                    <CheckCircle
                      className="shrink-0 text-green-400"
                      size={20}
                    />
                  </div>

                  {/* Submit & Analyse */}
                  <button
                    onClick={handleUpload}
                    disabled={isAnalysing}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isAnalysing ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
                        Analysing Document...
                      </>
                    ) : (
                      <>
                        Submit & Analyse
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Document Preview */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-white">
                    Document Preview
                  </h2>
                  <p className="text-sm text-slate-500">
                    Preview your selected document
                  </p>
                </div>

                <Image className="text-cyan-400" size={22} />
              </div>

              <div className="flex min-h-[330px] items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-700 bg-slate-950">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Selected document preview"
                    className="max-h-[330px] w-full object-contain"
                  />
                ) : selectedFile ? (
                  <div className="text-center">
                    <FileText
                      className="mx-auto mb-3 text-blue-400"
                      size={55}
                    />
                    <p className="font-medium text-slate-200">
                      {selectedFile.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      PDF preview will be available after backend integration.
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload
                      className="mx-auto mb-4 text-slate-600"
                      size={55}
                    />
                    <p className="font-medium text-slate-400">
                      No document selected
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Upload an identity document to preview it here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="features" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Why Choose DocShield AI?
            </h2>
            <p className="mt-3 text-slate-500">
              Intelligent verification for modern identity screening
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <ShieldCheck className="mb-4 text-cyan-400" size={28} />
              <h3 className="font-semibold text-white">
                Multi-Layer Verification
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Multiple verification checks work together to identify
                suspicious identity documents.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <FileText className="mb-4 text-blue-400" size={28} />
              <h3 className="font-semibold text-white">
                Document Intelligence
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Extract and analyze important identity information from
                uploaded documents.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <CheckCircle className="mb-4 text-green-400" size={28} />
              <h3 className="font-semibold text-white">
                Explainable Results
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Verification results are presented clearly for investigator
                review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              How It Works
            </h2>
            <p className="mt-3 text-slate-500">
              Simple workflow for identity investigation
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["01", "Upload", "Upload the identity document."],
              ["02", "Extract", "Extract identity information."],
              ["03", "Verify", "Run multiple verification checks."],
              ["04", "Investigate", "Review risk and findings."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <span className="text-sm font-bold text-cyan-400">
                  {number}
                </span>
                <h3 className="mt-3 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTED DOCUMENTS */}
      <section
        id="supported-docs"
        className="border-t border-slate-800 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Supported Documents
          </h2>
          <p className="mt-3 text-slate-500">
            Common identity documents can be screened through DocShield AI.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Passport", "National ID", "Driving Licence"].map((doc) => (
              <div
                key={doc}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
              >
                <FileText
                  className="mx-auto mb-4 text-blue-400"
                  size={30}
                />
                <h3 className="font-semibold text-white">{doc}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white">
            About DocShield AI
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            DocShield AI is an identity intelligence and document screening
            system designed to assist investigators in detecting suspicious
            documents and identity inconsistencies.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UploadPage;