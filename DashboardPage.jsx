import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
  ShieldCheck,
  FileSearch,
  ScanFace,
  QrCode,
  Fingerprint,
} from "lucide-react";
import ResultCard from "../components/ResultCard";
import RiskScore from "../components/RiskScore";

function DashboardPage() {
  const results = [
    {
      title: "OCR Extraction",
      description: "Identity information extracted from document",
      status: "Verified",
    },
    {
      title: "QR Validation",
      description: "QR code authenticity check",
      status: "Verified",
    },
    {
      title: "Forgery Detection",
      description: "Document tampering analysis",
      status: "Warning",
    },
    {
      title: "Face Verification",
      description: "Face matching and liveness verification",
      status: "Verified",
    },
    {
      title: "Identity Consistency",
      description: "Cross-checking identity information",
      status: "Verified",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 border-b border-slate-800 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-cyan-400">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                DocShield AI
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Verification Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              AI-powered identity document verification results
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            <AlertTriangle size={17} />
            Review Required
          </div>
        </div>

        {/* Overall Status */}
        <div className="mb-7 overflow-hidden rounded-2xl border border-yellow-500/20 bg-slate-900 shadow-xl">
          <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
                <AlertTriangle
                  className="text-yellow-400"
                  size={28}
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white md:text-xl">
                  Verification Requires Attention
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  One or more verification checks require further investigation.
                </p>
              </div>
            </div>

            <div className="text-sm text-slate-500">
              5 checks completed
            </div>
          </div>
        </div>

        {/* Verification Results */}
        <div className="mb-7">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white">
              Verification Checks
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Individual analysis results from DocShield AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <ResultCard
                key={result.title}
                title={result.title}
                description={result.description}
                status={result.status}
              />
            ))}

            <RiskScore score={72} />
          </div>
        </div>

        {/* Verification Summary */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Verification Summary
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Overall screening status and risk assessment
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Passed */}
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-green-500/10">
                <CheckCircle className="text-green-400" size={23} />
              </div>

              <p className="text-3xl font-bold text-white">
                4
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Checks Passed
              </p>

              <div className="mt-4 h-1.5 rounded-full bg-slate-800">
                <div className="h-1.5 w-[80%] rounded-full bg-green-500" />
              </div>
            </div>

            {/* Warning */}
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-500/10">
                <AlertTriangle className="text-yellow-400" size={23} />
              </div>

              <p className="text-3xl font-bold text-white">
                1
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Warning
              </p>

              <div className="mt-4 h-1.5 rounded-full bg-slate-800">
                <div className="h-1.5 w-[20%] rounded-full bg-yellow-500" />
              </div>
            </div>

            {/* Risk */}
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10">
                <Clock className="text-cyan-400" size={23} />
              </div>

              <p className="text-3xl font-bold text-white">
                72
                <span className="ml-1 text-base font-normal text-slate-500">
                  /100
                </span>
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Risk Score
              </p>

              <div className="mt-4 h-1.5 rounded-full bg-slate-800">
                <div className="h-1.5 w-[72%] rounded-full bg-cyan-500" />
              </div>
            </div>

          </div>

          {/* Report Button */}
          <div className="mt-7 flex justify-end border-t border-slate-800 pt-6">
            <Link
              to="/report"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              <FileSearch size={19} />
              View Investigation Report
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardPage;