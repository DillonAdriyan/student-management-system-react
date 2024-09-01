"use client"

import { useState } from "react"
import { Bar, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { ArrowDownIcon, ArrowUpIcon, BarChart, BookOpen, GraduationCap, LineChart, UserCheck2, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week")

  const stats = [
    {
      title: "Total Students",
      value: "3,721",
      icon: Users,
      change: "+2.5%",
      changeType: "positive",
    },
    {
      title: "Total Courses",
      value: "142",
      icon: BookOpen,
      change: "+3.2%",
      changeType: "positive",
    },
    {
      title: "Average Attendance",
      value: "92%",
      icon: UserCheck2,
      change: "-0.5%",
      changeType: "negative",
    },
    {
      title: "Average Grade",
      value: "B+",
      icon: GraduationCap,
      change: "+0.3",
      changeType: "positive",
    },
  ]

  const enrollmentData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Enrollments",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(34, 202, 236, 0.5)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 1,
      },
    ],
  }

  const gradeDistributionData = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
      {
        label: "Grade Distribution",
        data: [30, 40, 20, 7, 3],
        backgroundColor: [
          "rgba(34, 202, 236, 0.6)",
          "rgba(72, 219, 251, 0.6)",
          "rgba(252, 214, 112, 0.6)",
          "rgba(234, 84, 85, 0.6)",
          "rgba(103, 58, 183, 0.6)",
        ],
        borderColor: [
          "rgba(34, 202, 236, 1)",
          "rgba(72, 219, 251, 1)",
          "rgba(252, 214, 112, 1)",
          "rgba(234, 84, 85, 1)",
          "rgba(103, 58, 183, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Attendance Rate",
        data: [95, 88, 92, 87, 94],
        borderColor: "rgba(34, 202, 236, 1)",
        tension: 0.4,
        fill: true,
        backgroundColor: "rgba(34, 202, 236, 0.2)",
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Dashboard</h2>
        <div className="w-full sm:w-auto">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-full sm:w-[180px] bg-gray-100 px-2">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-white p-2 shadow-md rounded-md">
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="This Week">This Week</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-xl p-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-white">
                {stat.changeType === "positive" ? (
                  <ArrowUpIcon className="mr-1 h-4 w-4 text-green-300 inline" />
                ) : (
                  <ArrowDownIcon className="mr-1 h-4 w-4 text-red-300 inline" />
                )}
                <span className={stat.changeType === "positive" ? "text-green-300" : "text-red-300"}>
                  {stat.change}
                </span>{" "}
                from last {selectedPeriod.toLowerCase()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4 bg-white shadow-lg rounded-xl p-4">
          <CardHeader>
            <CardTitle className="text-gray-800">Student Enrollment</CardTitle>
            <CardDescription className="text-gray-600">New student enrollments over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ height: "300px" }}>
              <Bar data={enrollmentData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3 bg-white shadow-lg rounded-xl p-4">
          <CardHeader>
            <CardTitle className="text-gray-800">Grade Distribution</CardTitle>
            <CardDescription className="text-gray-600">Overall grade distribution for all courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ height: "300px" }}>
              <Bar data={gradeDistributionData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-white shadow-lg rounded-xl p-4">
        <CardHeader>
          <CardTitle className="text-gray-800">Attendance Trends</CardTitle>
          <CardDescription className="text-gray-600">Daily attendance rates for the current week</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ height: "300px" }}>
            <Line data={attendanceData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
