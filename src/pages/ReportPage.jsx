import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Download,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

function ReportPage() {
  const results = [
    {
      name: "OCR Extraction",
      status: "Verified",
      type: "success",
    },
    {
      name: "QR Validation",
      status: "Verified",
      type: "success",
    },
    {
      name: "Forgery Detection",
      status: "Warning",
      type: "warning",
    },
    {
      name: "Face Verification",
      status: "Verified",
      type: "success",
    },
    {
      name: "Identity Consistency",
      status: "Verified",
      type: "success",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-7 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">
                <FileText
                  className="text-blue-400"
                  size={29}
                />
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2 text-cyan-400">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    DocShield AI
                  </span>
                </div>

                <h1 className="text-2xl font-bold text-white md:text-3xl">
                  Investigation Report
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                  Identity verification and screening summary
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-700"
              >
                <ArrowLeft size={18} />
                Home
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                <Download size={19} />
                Download Report
              </button>
            </div>

          </div>
        </div>

        {/* Risk Overview */}
        <div className="mb-7 grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Verification Status */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <p className="text-sm text-slate-500">
              Overall Verification
            </p>

            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
                <AlertTriangle
                  className="text-yellow-400"
                  size={25}
                />
              </div>

              <div>
                <p className="text-xl font-bold text-white">
                  Review Required
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  One warning detected
                </p>
              </div>
            </div>
          </div>

          {/* Risk Score */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <p className="text-sm text-slate-500">
              Overall Risk Score
            </p>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-4xl font-bold text-white">
                72
                <span className="text-lg font-normal text-slate-500">
                  /100
                </span>
              </p>

              <div className="flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-2 text-sm font-semibold text-yellow-400">
                <AlertTriangle size={18} />
                High Risk
              </div>
            </div>

            <div className="mt-5 h-2 w-full rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-yellow-500"
                style={{ width: "72%" }}
              />
            </div>

            <p className="mt-2 text-right text-xs text-slate-500">
              Risk level: 72%
            </p>
          </div>

        </div>

        {/* Verification Results */}
        <div className="mb-7 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Verification Results
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Detailed results from all verification modules
            </p>
          </div>

          <div className="space-y-3">

            {results.map((result) => (
              <div
                key={result.name}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 transition hover:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      result.type === "success"
                        ? "bg-green-500/10"
                        : "bg-yellow-500/10"
                    }`}
                  >
                    {result.type === "success" ? (
                      <CheckCircle
                        className="text-green-400"
                        size={19}
                      />
                    ) : (
                      <AlertTriangle
                        className="text-yellow-400"
                        size={19}
                      />
                    )}
                  </div>

                  <span className="font-medium text-slate-200">
                    {result.name}
                  </span>
                </div>

                {result.type === "success" ? (
                  <span className="rounded-full bg-green-500/10 px-3 py-1.5 text-sm font-semibold text-green-400">
                    Verified
                  </span>
                ) : (
                  <span className="rounded-full bg-yellow-500/10 px-3 py-1.5 text-sm font-semibold text-yellow-400">
                    Warning
                  </span>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Investigation Findings */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              Investigation Findings
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Important observations requiring investigator attention
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                <AlertTriangle
                  className="text-yellow-400"
                  size={22}
                />
              </div>

              <div>
                <h3 className="font-semibold text-yellow-300">
                  Potential Document Anomaly
                </h3>

                <p className="mt-2 text-sm leading-6 text-yellow-200/70">
                  The forgery detection module has identified
                  a potential anomaly in the uploaded document.
                  Further investigation is recommended.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="py-7 text-center">
          <p className="text-xs text-slate-600">
            DocShield AI • Identity Intelligence & Verification System
          </p>
        </div>

      </div>
    </div>
  );
}

export default ReportPage;