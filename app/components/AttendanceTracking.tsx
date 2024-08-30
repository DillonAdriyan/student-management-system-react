import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AttendanceTracking() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Attendance Tracking</h2>
      <Card>
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
                  <SelectContent position="popper">
                    <SelectItem value="cs101">CS101 - Intro to Computer Science</SelectItem>
                    <SelectItem value="math201">MATH201 - Calculus I</SelectItem>
                    <SelectItem value="psy101">PSY101 - Intro to Psychology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
            </div>
            <Button>Load Attendance</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Attendance Record</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Student ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>1001</TableCell>
                <TableCell>Present</TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger id="status-1001">
                      <SelectValue placeholder="Change status" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="present">Present</SelectItem>
                      <SelectItem value="absent">Absent</SelectItem>
                      <SelectItem value="late">Late</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>1002</TableCell>
                <TableCell>Absent</TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger id="status-1002">
                      <SelectValue placeholder="Change status" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="present">Present</SelectItem>
                      <SelectItem value="absent">Absent</SelectItem>
                      <SelectItem value="late">Late</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>1003</TableCell>
                <TableCell>Late</TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger id="status-1003">
                      <SelectValue placeholder="Change status" />
                    </SelectTrigger>
                    <SelectContent position="popper">
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
  )
}