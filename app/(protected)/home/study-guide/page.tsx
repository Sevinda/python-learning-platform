"use client";
import CustomCard from "@/components/custom/CustomCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const StudyGuide = () => {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 hover:bg-accent/50"
          onClick={() => router.back()}
        >
          ← Back
        </Button>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-cyan-400 via-primary to-accent bg-clip-text text-transparent">
          Study Guide
        </h1>
        <p className="text-muted-foreground text-lg">
          Master Python fundamentals with interactive lessons and practical
          examples
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CustomCard
          title="Basics Syntax & Structure"
          description="Learn the fundamental syntax and structure of Python programming language."
          href="/home/study-guide/basics-syntax-structure"
        />
        <CustomCard
          title="Variables & Data Types"
          description="Understand how to store and manipulate data using variables and different data types in Python."
          href="/home/study-guide/variables-data-types"
        />
        <CustomCard
          title="Type Conversion"
          description="Master converting between different data types and understand type casting in Python."
          href="/home/study-guide/type-conversion"
        />
        <CustomCard
          title="Input and Output"
          description="Learn how to display output with print() and get user input with input() functions."
          href="/home/study-guide/input-output"
        />
        <CustomCard
          title="Operators"
          description="Explore arithmetic, comparison, logical, and assignment operators in Python."
          href="/home/study-guide/operators"
        />
        <CustomCard
          title="Control Flow"
          description="Master if statements, loops, and control flow statements to direct program execution."
          href="/home/study-guide/control-flow"
        />
        <CustomCard
          title="Functions and Procedures"
          description="Create reusable code blocks with functions, parameters, and return values."
          href="/home/study-guide/functions-procedures"
        />
        <CustomCard
          title="Data Structures"
          description="Work with lists, understand indexing, slicing, and essential list methods."
          href="/home/study-guide/data-structures"
        />
        <CustomCard
          title="File Handling"
          description="Read from and write to files using Python's built-in file operations."
          href="/home/study-guide/file-handling"
        />
        <CustomCard
          title="Built-in Functions"
          description="Master Python's useful built-in functions for common programming tasks."
          href="/home/study-guide/built-in-functions"
        />
        <CustomCard
          title="Best Practices"
          description="Write clean, professional Python code following PEP 8 guidelines and best practices."
          href="/home/study-guide/best-practices"
        />
      </div>
    </div>
  );
};

export default StudyGuide;
