import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";

function ResultCard({
  title,
  description,
  status = "Pending",
}) {
  const getStatusStyle = () => {
    if (status === "Verified") {
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        icon: <CheckCircle size={20} />,
      };
    }

    if (status === "Warning") {
      return {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        icon: <AlertTriangle size={20} />,
      };
    }

    return {
      bg: "bg-gray-100",
      text: "text-gray-600",
      icon: <Clock size={20} />,
    };
  };

  const statusStyle = getStatusStyle();

  return (
    <div className="bg-white rounded-xl shadow p-6">

      {/* Card Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700">
          {title}
        </h2>

        <div className={statusStyle.text}>
          {statusStyle.icon}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 mt-3">
        {description}
      </p>

      {/* Status */}
      <span
        className={`inline-flex items-center mt-5 px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg} ${statusStyle.text}`}
      >
        {status}
      </span>

    </div>
  );
}

export default ResultCard;