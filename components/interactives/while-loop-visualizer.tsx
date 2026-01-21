"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Zap } from "lucide-react";

export function WhileLoopVisualizer() {
  const [targetValue, setTargetValue] = useState(5);
  const [currentValue, setCurrentValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [iterations, setIterations] = useState(0);
  const [conditionResult, setConditionResult] = useState<boolean | null>(null);

  const runLoop = async () => {
    setIsRunning(true);
    setIterations(0);
    let count = 0;

    while (count < targetValue) {
      // Show condition check
      setConditionResult(count < targetValue);
      setCurrentValue(count);
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Increment
      count++;
      setIterations((prev) => prev + 1);
      setCurrentValue(count);
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    // Final condition check (False)
    setConditionResult(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsRunning(false);
    setConditionResult(null);
  };

  const reset = () => {
    setCurrentValue(0);
    setIterations(0);
    setConditionResult(null);
    setIsRunning(false);
  };

  return (
    <Card className="not-prose p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          🔄 While Loop Visualizer
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Watch the loop check conditions and iterate!
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-6 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Target Value (loop until count reaches this)
          </label>
          <Input
            type="number"
            min="1"
            max="10"
            value={targetValue}
            onChange={(e) => setTargetValue(Number(e.target.value))}
            disabled={isRunning}
            className="text-lg font-bold"
          />
        </div>
        <Button
          onClick={runLoop}
          disabled={isRunning}
          className="bg-orange-600 hover:bg-orange-700"
        >
          <Play className="h-4 w-4 mr-2" />
          Start Loop
        </Button>
        <Button onClick={reset} variant="outline" disabled={isRunning}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Visualization */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 min-h-[300px]">
        {/* Condition Check Area */}
        <div className="mb-6">
          <div className="text-center mb-4">
            <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
              CONDITION CHECK
            </div>
            <motion.div
              className={`inline-block px-8 py-4 rounded-lg text-2xl font-bold ${
                conditionResult === true
                  ? "bg-green-500 text-white"
                  : conditionResult === false
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
              }`}
              animate={conditionResult !== null ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {currentValue} &lt; {targetValue}
              <div className="text-sm font-normal mt-1">
                {conditionResult === true && "✓ True - Continue Loop"}
                {conditionResult === false && "✗ False - Exit Loop"}
                {conditionResult === null && "Waiting..."}
              </div>
            </motion.div>
          </div>

          {/* Arrow */}
          {conditionResult === true && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl">⬇️</div>
            </motion.div>
          )}

          {conditionResult === false && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <div className="text-4xl">🛑</div>
              <div className="text-sm font-bold text-red-600 dark:text-red-400 mt-2">
                Loop Ended!
              </div>
            </motion.div>
          )}
        </div>

        {/* Counter Display */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 text-center">
            <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
              Current Count
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentValue}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                className="text-5xl font-bold text-blue-600 dark:text-blue-400"
              >
                {currentValue}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 text-center">
            <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
              Iterations
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={iterations}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-bold text-purple-600 dark:text-purple-400"
              >
                {iterations}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Loop Body Execution */}
        {conditionResult === true && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-lg p-4 text-center"
          >
            <Zap className="h-8 w-8 mx-auto mb-2 animate-pulse" />
            <div className="font-bold">Executing Loop Body...</div>
            <div className="text-sm mt-1 font-mono">count = count + 1</div>
          </motion.div>
        )}

        {/* Completion Message */}
        {!isRunning && iterations > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg p-4 text-center"
          >
            <div className="text-2xl mb-2">✅</div>
            <div className="font-bold text-green-700 dark:text-green-400">
              Loop completed {iterations} iteration{iterations !== 1 ? "s" : ""}
              !
            </div>
          </motion.div>
        )}
      </div>

      {/* Code Reference */}
      <div className="mt-6 p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100">
        <div className="text-gray-500"># The code doing this:</div>
        <div>count = 0</div>
        <div className={conditionResult !== null ? "text-yellow-400" : ""}>
          while count &lt; {targetValue}:
        </div>
        <div className={conditionResult === true ? "text-orange-400" : ""}>
          {"    "}print(count)
        </div>
        <div className={conditionResult === true ? "text-orange-400" : ""}>
          {"    "}count += 1
        </div>
        <div className="text-gray-500 mt-2">
          # Condition checked before each iteration!
        </div>
      </div>
    </Card>
  );
}
