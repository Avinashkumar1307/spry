export type TaskStatus = "Pending" | "In Progress" | "Completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
}

export interface TaskFilters {
  status: TaskStatus | "All";
  sortBy: "dueDate" | "createdAt";
  sortOrder: "asc" | "desc";
}
