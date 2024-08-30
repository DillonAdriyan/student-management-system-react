import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GradeManagement() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Grade Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Select Course</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
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
            <Button>Load Grades</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Grade Sheet</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
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
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>1001</TableCell>
                <TableCell>
                  <Input defaultValue="85" type="number" />
                </TableCell>
                <TableCell>
                  <Input defaultValue="90" type="number" />
                </TableCell>
                <TableCell>
                  <Input defaultValue="88" type="number" />
                </TableCell>
                <TableCell>A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>1002</TableCell>
                <TableCell>
                  <Input defaultValue="78" type="number" />
                </TableCell>
                <TableCell>
                  <Input defaultValue="82" type="number" />
                </TableCell>
                <TableCell>
                  <Input defaultValue="80" type="number" />
                </TableCell>
                <TableCell>B</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>1003</TableCell>
                <TableCell>
                  <Input defaultValue="92" type="number" />
                </TableCell>
                <TableCell>
                  <Input defaultValue="95" type="number" />
                </TableCell>
                <TableCell>
                  <Input defaultValue="90" type="number" />
                </TableCell>
                <TableCell>A+</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button>Save Grades</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}