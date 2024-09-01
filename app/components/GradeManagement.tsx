"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function GradeManagement() {
  const students = [
    { id: 1001, name: "John Doe", midterm: 85, final: 90, projects: 88 },
    { id: 1002, name: "Jane Smith", midterm: 78, final: 82, projects: 80 },
    { id: 1003, name: "Bob Johnson", midterm: 92, final: 95, projects: 90 },
    // Tambahkan data siswa lainnya
  ];

  function updateGrade(id, field, value) {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, [field]: value } : student
    );
    // Update state atau handle perubahan di sini
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Grade Management</h2>
      <Card className="shadow-md rounded-lg">
        <CardHeader className="bg-blue-500 text-white p-4 rounded-t-lg">
          <CardTitle className="text-xl">Select Course</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-1.5 max-w-md">
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="instructor">Instructor</Label>
                <Input id="instructor" placeholder="Enter instructor name" />
              </div>
            </div>
            <Button className="w-full md:w-auto bg-blue-500 text-white hover:bg-blue-600">
              Load Grades
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg">
        <CardHeader className="bg-green-500 text-white p-4 rounded-t-lg">
          <CardTitle className="text-xl">Grade Sheet</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Student ID</TableHead>
                <TableHead>Midterm</TableHead>
                <TableHead>Final</TableHead>
                <TableHead>Projects</TableHead>
                <TableHead>Overall Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => {
                const overallGrade = (student.midterm + student.final + student.projects) / 3;
                let letterGrade = "";

                if (overallGrade >= 96) letterGrade = "A+";
                else if (overallGrade >= 90) letterGrade = "A-";
                else if (overallGrade >= 80) letterGrade = "B+";
                else if (overallGrade >= 76) letterGrade = "B-";
                else letterGrade = "C";

                return (
                  <TableRow key={student.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>
                      <Input
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                        defaultValue={student.midterm}
                        type="number"
                        onChange={(e) => updateGrade(student.id, "midterm", e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                        defaultValue={student.final}
                        type="number"
                        onChange={(e) => updateGrade(student.id, "final", e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                        defaultValue={student.projects}
                        type="number"
                        onChange={(e) => updateGrade(student.id, "projects", e.target.value)}
                      />
                    </TableCell>
                    <TableCell>{letterGrade}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button className="bg-green-500 text-white hover:bg-green-600">
              Save Grades
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
