"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

type Operator = ">" | "<" | "==" | "!=" | ">=" | "<=";

export function ComparisonScale() {
  const [leftValue, setLeftValue] = useState(5);
  const [rightValue, setRightValue] = useState(3);
  const [operator, setOperator] = useState<Operator>(">");

  const operators: { op: Operator; label: string; desc: string }[] = [
    { op: ">", label: "Greater Than", desc: "left > right" },
    { op: "<", label: "Less Than", desc: "left < right" },
    { op: "==", label: "Equal To", desc: "left == right" },
    { op: "!=", label: "Not Equal", desc: "left != right" },
    { op: ">=", label: "Greater or Equal", desc: "left >= right" },
    { op: "<=", label: "Less or Equal", desc: "left <= right" },
  ];

  const evaluateComparison = (): boolean => {
    switch (operator) {
      case ">":
        return leftValue > rightValue;
      case "<":
        return leftValue < rightValue;
      case "==":
        return leftValue === rightValue;
      case "!=":
        return leftValue !== rightValue;
      case ">=":
        return leftValue >= rightValue;
      case "<=":
        return leftValue <= rightValue;
      default:
        return false;
    }
  };

  const result = evaluateComparison();

  // Calculate tilt angle based on difference
  const diff = leftValue - rightValue;
  const maxTilt = 25;
  const tiltAngle = Math.max(-maxTilt, Math.min(maxTilt, diff * 5));

  const reset = () => {
    setLeftValue(5);
    setRightValue(3);
    setOperator(">");
  };

  return (
    <Card className="not-prose p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          ⚖️ Comparison Scale
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Visualize Python comparison operators as a balance scale
        </p>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">Left Value</label>
          <Input
            type="number"
            value={leftValue}
            onChange={(e) => setLeftValue(Number(e.target.value))}
            className="text-2xl font-bold text-center"
          />
        </div>

        <div className="flex items-end justify-center">
          <div className="text-4xl font-bold text-gray-400">{operator}</div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Right Value</label>
          <Input
            type="number"
            value={rightValue}
            onChange={(e) => setRightValue(Number(e.target.value))}
            className="text-2xl font-bold text-center"
          />
        </div>
      </div>

      {/* Balance Scale Visualization */}
      <div className="mb-8 relative h-64 flex items-center justify-center">
        {/* Stand */}
        <div
          className="absolute bottom-0 w-3 h-32 bg-gray-700 dark:bg-gray-300 rounded-t-lg"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        />
        <div
          className="absolute bottom-0 w-32 h-4 bg-gray-700 dark:bg-gray-300 rounded-lg"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        />

        {/* Beam */}
        <motion.div
          className="absolute w-full max-w-md h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
          animate={{ rotate: tiltAngle }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          {/* Center Pivot */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-2 border-gray-700 transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Left Pan */}
          <motion.div
            className="absolute -top-2 left-4 w-24 h-24 flex items-center justify-center"
            animate={{ y: tiltAngle > 0 ? 10 : tiltAngle < 0 ? -10 : 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="w-full h-16 bg-blue-500 rounded-lg shadow-xl flex items-center justify-center border-4 border-blue-700">
              <motion.div
                className="text-3xl font-bold text-white"
                animate={{ scale: tiltAngle > 5 ? 1.2 : 1 }}
              >
                {leftValue}
              </motion.div>
            </div>
            {/* String */}
            <div className="absolute -top-10 left-1/2 w-1 h-10 bg-gray-600 transform -translate-x-1/2" />
          </motion.div>

          {/* Right Pan */}
          <motion.div
            className="absolute -top-2 right-4 w-24 h-24 flex items-center justify-center"
            animate={{ y: tiltAngle < 0 ? 10 : tiltAngle > 0 ? -10 : 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="w-full h-16 bg-purple-500 rounded-lg shadow-xl flex items-center justify-center border-4 border-purple-700">
              <motion.div
                className="text-3xl font-bold text-white"
                animate={{ scale: tiltAngle < -5 ? 1.2 : 1 }}
              >
                {rightValue}
              </motion.div>
            </div>
            {/* String */}
            <div className="absolute -top-10 left-1/2 w-1 h-10 bg-gray-600 transform -translate-x-1/2" />
          </motion.div>
        </motion.div>
      </div>

      {/* Operator Selection */}
      <div className="mb-6 grid grid-cols-3 md:grid-cols-6 gap-2">
        {operators.map((op) => (
          <Button
            key={op.op}
            onClick={() => setOperator(op.op)}
            variant={operator === op.op ? "default" : "outline"}
            className={
              operator === op.op ? "bg-orange-600 hover:bg-orange-700" : ""
            }
          >
            <div className="text-center">
              <div className="text-xl font-bold">{op.op}</div>
            </div>
          </Button>
        ))}
      </div>

      {/* Result Display */}
      <motion.div
        key={`${leftValue}-${operator}-${rightValue}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`mb-6 p-6 rounded-lg text-center ${
          result
            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
            : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
        }`}
      >
        <div className="text-sm font-bold mb-2">Comparison Result</div>
        <div className="text-3xl font-mono font-bold mb-2">
          {leftValue} {operator} {rightValue}
        </div>
        <div className="text-5xl font-bold">
          {result ? "True ✓" : "False ✗"}
        </div>
      </motion.div>

      {/* Explanation */}
      <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
        <div className="text-sm font-bold mb-2">Explanation</div>
        <div className="text-sm">
          {operator === ">" &&
            (leftValue > rightValue
              ? `${leftValue} is greater than ${rightValue}`
              : `${leftValue} is NOT greater than ${rightValue}`)}
          {operator === "<" &&
            (leftValue < rightValue
              ? `${leftValue} is less than ${rightValue}`
              : `${leftValue} is NOT less than ${rightValue}`)}
          {operator === "==" &&
            (leftValue === rightValue
              ? `${leftValue} equals ${rightValue}`
              : `${leftValue} does NOT equal ${rightValue}`)}
          {operator === "!=" &&
            (leftValue !== rightValue
              ? `${leftValue} is not equal to ${rightValue}`
              : `${leftValue} IS equal to ${rightValue}`)}
          {operator === ">=" &&
            (leftValue >= rightValue
              ? `${leftValue} is greater than or equal to ${rightValue}`
              : `${leftValue} is NOT greater than or equal to ${rightValue}`)}
          {operator === "<=" &&
            (leftValue <= rightValue
              ? `${leftValue} is less than or equal to ${rightValue}`
              : `${leftValue} is NOT less than or equal to ${rightValue}`)}
        </div>
      </div>

      <Button onClick={reset} variant="outline" className="w-full mb-4">
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset
      </Button>

      {/* Code Reference */}
      <div className="p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100">
        <div className="text-gray-500"># Comparison operators in Python:</div>
        <div className="text-yellow-400">
          result = {leftValue} {operator} {rightValue}
        </div>
        <div>
          print(result){" "}
          <span className="text-gray-500"># {result ? "True" : "False"}</span>
        </div>
        <div className="mt-2 text-gray-500">
          # Comparisons return True or False
        </div>
      </div>
    </Card>
  );
}
