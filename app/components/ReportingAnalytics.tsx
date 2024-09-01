"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ChartData,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ReportingAnalytics() {
// State untuk data Line chart
  const [enrollmentData, setEnrollmentData] = useState<ChartData<'line'>>({
    labels: [] as string[],
    datasets: [],
});


  const [gradeDistributionData, setGradeDistributionData] = 
    useState<ChartData<'bar'>>({
    labels: [] as string[],
    datasets: [],
  });

  useEffect(() => {
  setEnrollmentData({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Enrollments",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        fill: false, // Properti tambahan untuk Line chart
      },
    ],
  });

  // Perubahan data untuk Bar chart di sini tidak diperlukan



    // Simulasi data grade distribution
    setGradeDistributionData({
      labels: ["A+", "A-", "B+", "B-", "C"],
      datasets: [
        {
          label: "Grades",
          data: [15, 25, 35, 20, 5],
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    });
  }, []); 

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Reporting and Analytics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Cards untuk Student Transcript, Attendance Summary, dan Grade Distribution */}
        <Card className="shadow-md rounded-lg">
          <CardHeader className="bg-blue-500 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Student Transcript</CardTitle>
            <CardDescription className="text-gray-50">Generate individual student transcripts</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="student">Student</Label>
                <Select>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="bob">Bob Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">Generate Transcript</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-lg">
          <CardHeader className="bg-green-500 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Attendance Summary</CardTitle>
            <CardDescription className="text-gray-50">Generate attendance reports for courses</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="course">Course</Label>
                <Select>
                  <SelectTrigger id="course">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="cs101">CS101 - Intro to Computer Science</SelectItem>
                    <SelectItem value="math201">MATH201 - Calculus I</SelectItem>
                    <SelectItem value="psy101">PSY101 - Intro to Psychology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-500 text-white hover:bg-green-600">Generate Report</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-lg">
          <CardHeader className="bg-purple-500 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Grade Distribution</CardTitle>
            <CardDescription className="text-gray-50">View grade distribution for courses</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="course-grade">Course</Label>
                <Select>
                  <SelectTrigger id="course-grade">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="cs101">CS101 - Intro to Computer Science</SelectItem>
                    <SelectItem value="math201">MATH201 - Calculus I</SelectItem>
                    <SelectItem value="psy101">PSY101 - Intro to Psychology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 text-white hover:bg-purple-600">View Distribution</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full max-w-full">
        <div className="grid gap-4 space-y-4 md:grid-cols-2">
          <Card className="shadow-md rounded-lg">
            <CardHeader className="bg-yellow-500 text-white p-4 rounded-t-lg">
              <CardTitle className="text-xl">Enrollment Trends</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Line data={enrollmentData} />
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-lg">
            <CardHeader className="bg-red-500 text-white p-4 rounded-t-lg">
              <CardTitle className="text-xl">Grade Distribution</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Bar data={gradeDistributionData} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
  }

