"use client";

import { useTasks } from "@/context/TaskContext";
import { TaskStatus } from "@/types/task";

export default function TaskSummary() {
  const { tasks } = useTasks();

  const getStatusCount = (status: TaskStatus) => {
    return tasks.filter((task) => task.status === status).length;
  };

  const totalTasks = tasks.length;
  const pendingCount = getStatusCount("Pending");
  const inProgressCount = getStatusCount("In Progress");
  const completedCount = getStatusCount("Completed");

  const completionPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const summaryCards = [
    {
      title: "Total Tasks",
      count: totalTasks,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      progressColor: "bg-purple-200 dark:bg-purple-800",
      progressFillColor: "bg-purple-500",
      percentage: 100,
    },
    {
      title: "Pending",
      count: pendingCount,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-600",
      progressColor: "bg-yellow-200 dark:bg-yellow-800",
      progressFillColor: "bg-yellow-500",
      percentage: totalTasks > 0 ? Math.round((pendingCount / totalTasks) * 100) : 0,
    },
    {
      title: "In Progress",
      count: inProgressCount,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      progressColor: "bg-blue-200 dark:bg-blue-800",
      progressFillColor: "bg-blue-500",
      percentage: totalTasks > 0 ? Math.round((inProgressCount / totalTasks) * 100) : 0,
    },
    {
      title: "Completed",
      count: completedCount,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      progressColor: "bg-green-200 dark:bg-green-800",
      progressFillColor: "bg-green-500",
      percentage: completionPercentage,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {summaryCards.map((card, index) => (
        <div
          key={index}
          className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in border border-gray-100 dark:border-gray-700"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`bg-gradient-to-br ${card.color} p-6 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-white text-opacity-90 text-sm font-semibold mb-2 uppercase tracking-wide">
                    {card.title}
                  </p>
                  <p className="text-5xl font-bold mb-1">{card.count}</p>
                  <p className="text-white text-opacity-75 text-xs">
                    {card.percentage}% of total
                  </p>
                </div>
                <div className="opacity-90 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className={`${card.progressColor} rounded-full h-2 overflow-hidden`}>
                  <div
                    className={`${card.progressFillColor} h-full rounded-full animate-progress-fill transition-all duration-1000`}
                    style={{ width: `${card.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
