import type { Metadata } from "next";
import "./globals.css";
import { TaskProvider } from "@/context/TaskContext";
import { ToastProvider } from "@/context/ToastContext";

export const metadata: Metadata = {
  title: "Task Management Dashboard",
  description: "A modern task management dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ToastProvider>
          <TaskProvider>
            {children}
          </TaskProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
