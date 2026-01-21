/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";

export function IfElseFlowchart() {
  const [score, setScore] = useState<number>(75);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const runAnimation = async () => {
    setIsAnimating(true);
    setCurrentPath("start");
    setResult(null);

    // Animate through the flowchart
    await new Promise((resolve) => setTimeout(resolve, 800));
    setCurrentPath("condition");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Determine path based on score
    if (score >= 90) {
      setCurrentPath("path-a");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResult("A ⭐ - Amazing!");
    } else if (score >= 80) {
      setCurrentPath("path-b");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResult("B 👍 - Great job!");
    } else if (score >= 70) {
      setCurrentPath("path-c");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResult("C 👌 - Not bad!");
    } else if (score >= 60) {
      setCurrentPath("path-d");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResult("D 🤔 - You passed... barely");
    } else {
      setCurrentPath("path-f");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResult("F 😭 - Study time!");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAnimating(false);
  };

  const reset = () => {
    setCurrentPath(null);
    setResult(null);
  };

  const isActive = (path: string) => currentPath === path;
  const isPassed = (path: string) => {
    if (!currentPath) return false;
    const paths = [
      "start",
      "condition",
      "path-a",
      "path-b",
      "path-c",
      "path-d",
      "path-f",
    ];
    const currentIndex = paths.indexOf(currentPath);
    const pathIndex = paths.indexOf(path);
    return pathIndex <= currentIndex;
  };

  return (
    <Card className="not-prose p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          🔀 If-Elif-Else Flowchart
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Watch how your score flows through the decision tree!
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-6 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Enter Score (0-100)
          </label>
          <Input
            type="number"
            min="0"
            max="100"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            disabled={isAnimating}
            className="text-lg font-bold"
          />
        </div>
        <Button
          onClick={runAnimation}
          disabled={isAnimating}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Play className="h-4 w-4 mr-2" />
          Watch Flow
        </Button>
        <Button onClick={reset} variant="outline" disabled={isAnimating}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Flowchart */}
      <div className="relative py-8">
        {/* Start */}
        <motion.div
          className={`mx-auto w-40 p-3 rounded-lg text-center font-bold mb-4 ${
            isActive("start")
              ? "bg-blue-500 text-white ring-4 ring-blue-300"
              : isPassed("start")
                ? "bg-blue-400 text-white"
                : "bg-gray-200 dark:bg-gray-700"
          }`}
          animate={isActive("start") ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          START
          {isActive("start") && (
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </motion.div>

        {/* Arrow down */}
        <svg className="mx-auto mb-4" width="2" height="30">
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2="30"
            stroke={isPassed("condition") ? "#3b82f6" : "#d1d5db"}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isPassed("condition") ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </svg>

        {/* Condition */}
        <motion.div
          className={`mx-auto w-56 p-4 rounded-lg text-center font-bold mb-4 ${
            isActive("condition")
              ? "bg-yellow-500 text-white ring-4 ring-yellow-300"
              : isPassed("condition")
                ? "bg-yellow-400 text-white"
                : "bg-gray-200 dark:bg-gray-700"
          }`}
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={isActive("condition") ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="py-2">Score = {score}</div>
          {isActive("condition") && (
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </motion.div>

        {/* Branches */}
        <div className="grid grid-cols-5 gap-2 mt-8">
          {/* Grade A */}
          <motion.div
            className={`p-3 rounded-lg text-center text-sm font-bold ${
              isActive("path-a")
                ? "bg-green-500 text-white ring-4 ring-green-300"
                : isPassed("path-a")
                  ? "bg-green-400 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
            }`}
            animate={isActive("path-a") ? { scale: [1, 1.2, 1] } : {}}
          >
            if ≥ 90
            <br />A ⭐
          </motion.div>

          {/* Grade B */}
          <motion.div
            className={`p-3 rounded-lg text-center text-sm font-bold ${
              isActive("path-b")
                ? "bg-blue-500 text-white ring-4 ring-blue-300"
                : isPassed("path-b")
                  ? "bg-blue-400 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
            }`}
            animate={isActive("path-b") ? { scale: [1, 1.2, 1] } : {}}
          >
            elif ≥ 80
            <br />B 👍
          </motion.div>

          {/* Grade C */}
          <motion.div
            className={`p-3 rounded-lg text-center text-sm font-bold ${
              isActive("path-c")
                ? "bg-yellow-500 text-white ring-4 ring-yellow-300"
                : isPassed("path-c")
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
            }`}
            animate={isActive("path-c") ? { scale: [1, 1.2, 1] } : {}}
          >
            elif ≥ 70
            <br />C 👌
          </motion.div>

          {/* Grade D */}
          <motion.div
            className={`p-3 rounded-lg text-center text-sm font-bold ${
              isActive("path-d")
                ? "bg-orange-500 text-white ring-4 ring-orange-300"
                : isPassed("path-d")
                  ? "bg-orange-400 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
            }`}
            animate={isActive("path-d") ? { scale: [1, 1.2, 1] } : {}}
          >
            elif ≥ 60
            <br />D 🤔
          </motion.div>

          {/* Grade F */}
          <motion.div
            className={`p-3 rounded-lg text-center text-sm font-bold ${
              isActive("path-f")
                ? "bg-red-500 text-white ring-4 ring-red-300"
                : isPassed("path-f")
                  ? "bg-red-400 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
            }`}
            animate={isActive("path-f") ? { scale: [1, 1.2, 1] } : {}}
          >
            else
            <br />F 😭
          </motion.div>
        </div>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
          >
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {result}
            </div>
          </motion.div>
        )}
      </div>

      {/* Code Reference */}
      <div className="mt-6 p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100 overflow-x-auto">
        <div className="text-gray-500"># The code doing this:</div>
        <div className={score >= 90 ? "text-green-400" : ""}>
          if score &gt;= 90:
        </div>
        <div className={score >= 90 ? "text-green-400" : ""}> grade = "A"</div>
        <div className={score >= 80 && score < 90 ? "text-blue-400" : ""}>
          elif score &gt;= 80:
        </div>
        <div className={score >= 80 && score < 90 ? "text-blue-400" : ""}>
          {" "}
          grade = "B"
        </div>
        <div className={score >= 70 && score < 80 ? "text-yellow-400" : ""}>
          elif score &gt;= 70:
        </div>
        <div className={score >= 70 && score < 80 ? "text-yellow-400" : ""}>
          {" "}
          grade = "C"
        </div>
        <div className={score >= 60 && score < 70 ? "text-orange-400" : ""}>
          elif score &gt;= 60:
        </div>
        <div className={score >= 60 && score < 70 ? "text-orange-400" : ""}>
          {" "}
          grade = "D"
        </div>
        <div className={score < 60 ? "text-red-400" : ""}>else:</div>
        <div className={score < 60 ? "text-red-400" : ""}> grade = "F"</div>
      </div>
    </Card>
  );
}
