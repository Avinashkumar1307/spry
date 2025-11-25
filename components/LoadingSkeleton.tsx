export function TaskCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse">
      <div className="h-2 bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-20"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export function SummaryCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-600 p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="h-4 bg-gray-400 dark:bg-gray-500 rounded w-24 mb-2"></div>
            <div className="h-12 bg-gray-400 dark:bg-gray-500 rounded w-16 mb-1"></div>
            <div className="h-3 bg-gray-400 dark:bg-gray-500 rounded w-20"></div>
          </div>
          <div className="w-8 h-8 bg-gray-400 dark:bg-gray-500 rounded"></div>
        </div>
        <div className="h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}
