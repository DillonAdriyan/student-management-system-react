import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Clock } from "lucide-react"; // Import icons from Lucide or any other icon library
export default function AttendanceTracking() {
  return (
    <div className="space-y-6 px-4 lg:px-0">
      <h2 className="text-3xl font-bold text-center">Attendance Tracking</h2>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Select Course and Date</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="course">Course</Label>
                <Select>
                  <SelectTrigger id="course">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent className="bg-white p-2">
                    <SelectItem value="cs101">CS101 - Intro to Computer Science</SelectItem>
                    <SelectItem value="math201">MATH201 - Calculus I</SelectItem>
                    <SelectItem value="psy101">PSY101 - Intro to Psychology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" className="focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <Button className="w-full md:w-auto text-white bg-blue-600 hover:bg-blue-700">Load Attendance</Button>
          </form>
        </CardContent>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Attendance Record</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Student Name</TableHead>
                <TableHead className="text-left">Student ID</TableHead>
                <TableHead className="text-left">Status</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>

<TableBody>
  <TableRow className="odd:bg-white even:bg-gray-100">
    <TableCell>John Doe</TableCell>
    <TableCell>1001</TableCell>
    <TableCell className="flex items-center space-x-2">
      <CheckCircle className="text-green-500" /> {/* Icon for Present */}
      <span className="text-green-600 font-semibold">Present</span>
    </TableCell>
    <TableCell>
      <Select>
        <SelectTrigger id="status-1001">
          <SelectValue placeholder="Change status" />
        </SelectTrigger>
        <SelectContent className="bg-white p-2 space-y-1">
          <SelectItem value="present">Present</SelectItem>
          <SelectItem value="absent">Absent</SelectItem>
          <SelectItem value="late">Late</SelectItem>
        </SelectContent>
      </Select>
    </TableCell>
  </TableRow>
  <TableRow className="odd:bg-white even:bg-gray-100">
    <TableCell>Jane Smith</TableCell>
    <TableCell>1002</TableCell>
    <TableCell className="flex items-center space-x-2">
      <XCircle className="text-red-500" /> {/* Icon for Absent */}
      <span className="text-red-600 font-semibold">Absent</span>
    </TableCell>
    <TableCell>
      <Select>
        <SelectTrigger id="status-1002">
          <SelectValue placeholder="Change status" />
        </SelectTrigger>
        <SelectContent className="bg-white p-2 space-y-1">
          <SelectItem value="present">Present</SelectItem>
          <SelectItem value="absent">Absent</SelectItem>
          <SelectItem value="late">Late</SelectItem>
        </SelectContent>
      </Select>
    </TableCell>
  </TableRow>
  <TableRow className="odd:bg-white even:bg-gray-100">
    <TableCell>Bob Johnson</TableCell>
    <TableCell>1003</TableCell>
    <TableCell className="flex items-center space-x-2">
      <Clock className="text-yellow-500" /> {/* Icon for Late */}
      <span className="text-yellow-600 font-semibold">Late</span>
    </TableCell>
    <TableCell>
      <Select>
        <SelectTrigger id="status-1003">
          <SelectValue placeholder="Change status" />
        </SelectTrigger>
        <SelectContent className="bg-white p-2 space-y-1">
          <SelectItem value="present">Present</SelectItem>
          <SelectItem value="absent">Absent</SelectItem>
          <SelectItem value="late">Late</SelectItem>
        </SelectContent>
      </Select>
    </TableCell>
  </TableRow>
</TableBody>

            
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
