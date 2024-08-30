import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, BookOpen, GraduationCap, LayoutDashboard, LogOut, PieChart, UserCheck, Users } from "lucide-react"

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
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
            <Link
              className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              <LayoutDashboard className="mr-3 h-6 w-6" />
              Dashboard
            </Link>
            <Link
              className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              <Users className="mr-3 h-6 w-6" />
              Students
            </Link>
            <Link
              className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Courses
            </Link>
            <Link
              className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              <UserCheck className="mr-3 h-6 w-6" />
              Attendance
            </Link>
            <Link
              className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              <GraduationCap className="mr-3 h-6 w-6" />
              Grades
            </Link>
            <Link
              className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              <PieChart className="mr-3 h-6 w-6" />
              Reports
            </Link>
          </nav>
          <div className="mt-auto p-4">
            <Button className="w-full" variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm">
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
              <Input className="mr-2 w-64" placeholder="Search..." type="search" />
              <Button size="icon" variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </Button>
              <Button size="icon" variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {/* Your page content will go here */}
        </main>
      </div>
    </div>
  )
}