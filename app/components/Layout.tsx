"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  PieChart,
  UserCheck,
  Users,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

// Import your page components from app/components
import Dashboard from "@/app/components/Dashboard";
import Students from "@/app/components/StudentManagement";
import Courses from "@/app/components/CourseRegistration";
import Attendance from "@/app/components/AttendanceTracking";
import Grades from "@/app/components/GradeManagement";
import Reports from "@/app/components/ReportingAnalytics";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState("Dashboard"); // Set default ke Dashboard
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: "Dashboard", icon: LayoutDashboard, label: "Dashboard", component: <Dashboard /> },
    { id: "Students", icon: Users, label: "Students", component: <Students /> },
    { id: "Courses", icon: BookOpen, label: "Courses", component: <Courses /> },
    { id: "Attendance", icon: UserCheck, label: "Attendance", component: <Attendance /> },
    { id: "Grades", icon: GraduationCap, label: "Grades", component: <Grades /> },
    { id: "Reports", icon: PieChart, label: "Reports", component: <Reports /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 py-6">
            <span className="text-2xl font-semibold">SMS</span>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  activePage === item.id ? "bg-gray-100" : ""
                }`}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <Button className="w-full flex align-start" variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
          <div className="flex items-center justify-between px-4 py-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
            <div className="flex items-center">
              <Input className="mx-2 w-64 px-2" placeholder="Search..." type="search" />
              <Button size="icon" variant="ghost">
                {/* Icons */}
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-24 pt-24">
          {navItems.find((item) => item.id === activePage)?.component || children}
        </main>
        
        {/* Footer */}
        <footer className="bg-neutral-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">About SMS</h3>
                <p className="text-neutral-200 text-sm">
                  Student Management System is a comprehensive solution for educational institutions to manage their students, courses, and academic processes efficiently.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button onClick={() => setActivePage(item.id)}
                className={`relative w-fit block after:block after:-mt-2 after:content-[''] after:absolute after:h-[4px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                  activePage === item.id ? "" : ""
                }`}>
                        <span className="z-20 relative">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-neutral-200 text-sm">
                  123 Education Street<br />
                  Knowledge City, KN 12345<br />
                  Phone: (123) 456-7890<br />
                  Email: info@sms.edu
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-neutral-700 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-neutral-200 text-sm">&copy; 2023 Student Management System. All rights reserved.</p>
              <div className="mt-4 sm:mt-0">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors flex items-center">
                  <Github size={18} className="mr-2" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
