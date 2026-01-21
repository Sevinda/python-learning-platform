/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Scissors, RotateCcw } from "lucide-react";

export function StringSlicerTool() {
  const [text, setText] = useState("PYTHON");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);
  const [step, setStep] = useState(1);

  const maxLength = text.length;

  // Calculate slice result
  const getSliceResult = () => {
    try {
      const arr = text.split("");
      const result: string[] = [];

      // Handle negative indices
      const actualStart = start < 0 ? Math.max(0, maxLength + start) : start;
      const actualEnd =
        end < 0 ? Math.max(0, maxLength + end) : Math.min(end, maxLength);

      if (step > 0) {
        for (let i = actualStart; i < actualEnd; i += step) {
          if (i >= 0 && i < maxLength) {
            result.push(arr[i]);
          }
        }
      } else if (step < 0) {
        for (let i = actualStart; i > actualEnd; i += step) {
          if (i >= 0 && i < maxLength) {
            result.push(arr[i]);
          }
        }
      }

      return result.join("");
    } catch {
      return "Invalid slice";
    }
  };

  const sliceResult = getSliceResult();

  // Determine which characters are selected
  const isCharSelected = (index: number) => {
    const actualStart = start < 0 ? Math.max(0, maxLength + start) : start;
    const actualEnd =
      end < 0 ? Math.max(0, maxLength + end) : Math.min(end, maxLength);

    if (step > 0) {
      return (
        index >= actualStart &&
        index < actualEnd &&
        (index - actualStart) % step === 0
      );
    } else if (step < 0) {
      return (
        index <= actualStart &&
        index > actualEnd &&
        (actualStart - index) % Math.abs(step) === 0
      );
    }
    return false;
  };

  const reset = () => {
    setText("PYTHON");
    setStart(0);
    setEnd(6);
    setStep(1);
  };

  const examples = [
    { name: "First 3", text: "PYTHON", start: 0, end: 3, step: 1 },
    { name: "Every 2nd", text: "PYTHON", start: 0, end: 6, step: 2 },
    { name: "Reverse", text: "PYTHON", start: 5, end: -1, step: -1 },
    { name: "Last 3", text: "PYTHON", start: -3, end: 6, step: 1 },
  ];

  return (
    <Card className="not-prose p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Scissors className="h-5 w-5" />
          String Slicer Tool
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Visualize Python string slicing with [start:end:step]
        </p>
      </div>

      {/* String Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          String to Slice
        </label>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value.toUpperCase())}
          placeholder="Enter text..."
          className="text-xl font-bold text-center"
          maxLength={20}
        />
      </div>

      {/* Character Display with Indices */}
      <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg">
        <div className="text-xs text-center mb-2 font-bold text-gray-500">
          Character Indices
        </div>

        {/* Positive indices */}
        <div className="flex justify-center gap-1 mb-1">
          {text.split("").map((_, index) => (
            <div
              key={`pos-${index}`}
              className="w-12 text-center text-xs font-mono text-blue-600 dark:text-blue-400"
            >
              {index}
            </div>
          ))}
        </div>

        {/* Characters */}
        <div className="flex justify-center gap-1 mb-1">
          {text.split("").map((char, index) => (
            <motion.div
              key={index}
              className={`w-12 h-12 flex items-center justify-center text-2xl font-bold rounded-lg border-2 transition-all ${
                isCharSelected(index)
                  ? "bg-gradient-to-br from-green-400 to-teal-400 text-white border-green-600 scale-110 shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}
              animate={isCharSelected(index) ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {char}
            </motion.div>
          ))}
        </div>

        {/* Negative indices */}
        <div className="flex justify-center gap-1">
          {text.split("").map((_, index) => (
            <div
              key={`neg-${index}`}
              className="w-12 text-center text-xs font-mono text-red-600 dark:text-red-400"
            >
              {index - text.length}
            </div>
          ))}
        </div>
      </div>

      {/* Slice Parameters */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Start</label>
          <Input
            type="number"
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
            className="text-center font-bold"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End</label>
          <Input
            type="number"
            value={end}
            onChange={(e) => setEnd(Number(e.target.value))}
            className="text-center font-bold"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Step</label>
          <Input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="text-center font-bold"
          />
        </div>
      </div>

      {/* Slice Notation Display */}
      <div className="mb-6 p-4 bg-gray-900 rounded-lg text-center">
        <div className="text-sm text-gray-400 mb-2">Slice Notation</div>
        <div className="text-2xl font-mono text-white">
          text[<span className="text-blue-400">{start}</span>:
          <span className="text-red-400">{end}</span>:
          <span className="text-green-400">{step}</span>]
        </div>
      </div>

      {/* Result */}
      <motion.div
        key={sliceResult}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-6 p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg text-center"
      >
        <div className="text-sm font-bold mb-2">Result</div>
        <div className="text-4xl font-bold font-mono">"{sliceResult}"</div>
      </motion.div>

      {/* Example Buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        {examples.map((ex) => (
          <Button
            key={ex.name}
            onClick={() => {
              setText(ex.text);
              setStart(ex.start);
              setEnd(ex.end);
              setStep(ex.step);
            }}
            variant="outline"
            size="sm"
          >
            {ex.name}
          </Button>
        ))}
        <Button onClick={reset} variant="outline" size="sm">
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </div>

      {/* Code Reference */}
      <div className="p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100">
        <div className="text-gray-500"># String slicing syntax:</div>
        <div>text = "{text}"</div>
        <div className="text-yellow-400">
          result = text[{start}:{end}:{step}]
        </div>
        <div>
          print(result) <span className="text-gray-500"># "{sliceResult}"</span>
        </div>
      </div>
    </Card>
  );
}
