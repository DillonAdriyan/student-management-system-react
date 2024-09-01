"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function CourseRegistration() {
  const courses = [
    {
      title: "Introduction to Computer Science",
      description: "CS101 - Prof. Alan Turing",
      details: "Learn the fundamentals of computer science and programming.",
      prerequisites: "None",
      seats: 15,
      image: "/images/cs101.jpg",
      uploadDate: "August 25, 2024",
      startDate: "September 1, 2024",
    },
    {
      title: "Calculus I",
      description: "MATH201 - Prof. Isaac Newton",
      details: "Explore the concepts of limits, derivatives, and integrals.",
      prerequisites: "Algebra II",
      seats: 8,
      image: "/images/calculus.jpg",
      uploadDate: "August 20, 2024",
      startDate: "September 5, 2024",
    },
    {
      title: "Introduction to Psychology",
      description: "PSY101 - Prof. Sigmund Freud",
      details: "Discover the basics of human behavior and mental processes.",
      prerequisites: "None",
      seats: 20,
      image: "/images/psychology.jpg",
      uploadDate: "August 22, 2024",
      startDate: "September 7, 2024",
    },
    // Tambahkan kursus lainnya sesuai kebutuhan
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-center">Course Registration</h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
          <Card className="relative h-[64vh] shadow-md mx-2 flex flex-col justify-between md:h-[46vh] lg:h-[32vh]">
  <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-t-md bg-slate-300" />
  <div className="flex-grow px-4">
    <CardHeader className="mb-2 p-2 w-52">
      <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
      <CardDescription className="mt-1 text-sm text-muted-foreground">{course.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-1 p-2">
      <p>{course.details}</p>
      <p className="text-sm text-muted-foreground">Prerequisites: {course.prerequisites}</p>
      <p className="text-sm text-muted-foreground">Available Seats: {course.seats}</p>
      <p className="text-xs text-muted-foreground">Uploaded on: {course.uploadDate}</p>
      <p className="text-xs text-muted-foreground">Course starts on: {course.startDate}</p>
    </CardContent>
  </div>
  <CardFooter className="p-4">
    <Button className="w-full text-white hover:bg-secondary">Register</Button>
  </CardFooter>
</Card>


          </SwiperSlide>
        ))}
      </Swiper>

      <Card className="md:w-3/5 lg:w-1/3 mx-auto">
        <CardHeader>
          <CardTitle>Search for Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="course">Course Name</Label>
                <Input className="pl-2" id="course" placeholder="Enter course name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="department">Department</Label><Select>
  <SelectTrigger id="department">
    <SelectValue placeholder="Select department" />
  </SelectTrigger>
  <SelectContent className="p-2 bg-white">
    <SelectItem value="cs" className="flex items-center space-x-2">
      <span className="w-4 h-4 mr-2">
        {/* Icon centang akan muncul di sini secara otomatis */}
      </span>
      <span>Computer Science</span>
    </SelectItem>
    <SelectItem value="math" className="flex items-center space-x-2">
      <span className="w-4 h-4 mr-2"></span>
      <span>Mathematics</span>
    </SelectItem>
    <SelectItem value="physics" className="flex items-center space-x-2">
      <span className="w-4 h-4 mr-2"></span>
      <span>Physics</span>
    </SelectItem>
    <SelectItem value="biology" className="flex items-center space-x-2">
      <span className="w-4 h-4 mr-2"></span>
      <span>Biology</span>
    </SelectItem>
  </SelectContent>
</Select>

                
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset</Button>
          <Button className="text-white">Search</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
