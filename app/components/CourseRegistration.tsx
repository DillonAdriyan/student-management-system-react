import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CourseRegistration() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Course Registration</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Introduction to Computer Science</CardTitle>
            <CardDescription>CS101 - Prof. Alan Turing</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Learn the fundament
als of computer science and programming.</p>
            <p className="mt-2 text-sm text-muted-foreground">Prerequisites: None</p>
            <p className="text-sm text-muted-foreground">Available Seats: 15</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Calculus I</CardTitle>
            <CardDescription>MATH201 - Prof. Isaac Newton</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Explore the concepts of limits, derivatives, and integrals.</p>
            <p className="mt-2 text-sm text-muted-foreground">Prerequisites: Algebra II</p>
            <p className="text-sm text-muted-foreground">Available Seats: 8</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Introduction to Psychology</CardTitle>
            <CardDescription>PSY101 - Prof. Sigmund Freud</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Discover the basics of human behavior and mental processes.</p>
            <p className="mt-2 text-sm text-muted-foreground">Prerequisites: None</p>
            <p className="text-sm text-muted-foreground">Available Seats: 20</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register</Button>
          </CardFooter>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Search for Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="course">Course Name</Label>
                <Input id="course" placeholder="Enter course name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset</Button>
          <Button>Search</Button>
        </CardFooter>
      </Card>
    </div>
  )
}