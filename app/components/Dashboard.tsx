import { useState } from "react"
import { Bar, Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { ArrowDownIcon, ArrowUpIcon, BookOpen, GraduationCap, UserCheck, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

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
      icon: UserCheck,
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
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
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
          "rgba(34, 197, 94, 0.6)",
          "rgba(59, 130, 246, 0.6)",
          "rgba(250, 204, 21, 0.6)",
          "rgba(249, 115, 22, 0.6)",
          "rgba(239, 68, 68, 0.6)",
        ],
        borderColor: [
          "rgb(34, 197, 94)",
          "rgb(59, 130, 246)",
          "rgb(250, 204, 21)",
          "rgb(249, 115, 22)",
          "rgb(239, 68, 68)",
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
        borderColor: "rgb(34, 197, 94)",
        tension: 0.1,
        fill: false,
      },
    ],
  }

  return (
    <div className="space-y-4 p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="This Week">This Week</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.changeType === "positive" ? (
                  <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500 inline" />
                ) : (
                  <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500 inline" />
                )}
                <span
                  className={stat.changeType === "positive" ? "text-green-500" : "text-red-500"}
                >
                  {stat.change}
                </span>{" "}
                from last {selectedPeriod.toLowerCase()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Student Enrollment</CardTitle>
            <CardDescription>New student enrollments over time</CardDescription>
          </CardHeader>
          <CardContent>
            <Bar
              data={enrollmentData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>Overall grade distribution for all courses</CardDescription>
          </CardHeader>
          <CardContent>
            <Bar
              data={gradeDistributionData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Attendance Trends</CardTitle>
            <CardDescription>Daily attendance rates for the current week</CardDescription>
          </CardHeader>
          <CardContent>
            <Line
              data={attendanceData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="students" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="students" className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Users className="h-4 w-4" />
                  <span>View All Students</span>
                </div>
                <div className="flex items-center space-x-4">
                  <UserCheck className="h-4 w-4" />
                  <span>Mark Attendance</span>
                </div>
              </TabsContent>
              <TabsContent value="courses" className="space-y-4">
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-4 w-4" />
                  <span>View All Courses</span>
                </div>
                <div className="flex items-center space-x-4">
                  <GraduationCap className="h-4 w-4" />
                  <span>Grade Assignments</span>
                </div>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <div className="flex items-center space-x-4">
                  <BarChart className="h-4 w-4" />
                  <span>Generate Reports</span>
                </div>
                <div className="flex items-center space-x-4">
                  <LineChart className="h-4 w-4" />
                  <span>View Analytics</span>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}