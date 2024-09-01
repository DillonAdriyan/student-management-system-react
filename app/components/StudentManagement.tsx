"use client";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Plus, Search, Trash } from "lucide-react"

export default function StudentManagement() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", course: "Computer Science" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Mathematics" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", course: "Physics" },
  ]);

  return (
    <div className="space-y-6 p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <h2 className="text-2xl md:text-3xl font-bold">Student Management</h2>
        <Button className="flex items-center justify-center gap-2 text-white bg-primary hover:bg-primary-dark transition-colors duration-200 h-10 w-full md:w-44 text-sm font-semibold rounded-lg shadow-lg">
          <Plus className="h-5 w-5" />
          Add Student
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
        <Input className="w-full md:max-w-sm" placeholder="Search students..." type="search" />
        <Button size="icon" variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table className="w-full min-w-max">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Course</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="icon" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
