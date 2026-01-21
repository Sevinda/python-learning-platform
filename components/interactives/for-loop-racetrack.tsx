"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Play, RotateCcw, Pause } from "lucide-react";

export function ForLoopRacetrack() {
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(5);
  const [step, setStep] = useState(1);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [completedLaps, setCompletedLaps] = useState<number[]>([]);

  const loopValues = Array.from(
    { length: Math.max(0, Math.ceil((stop - start) / step)) },
    (_, i) => start + i * step,
  ).filter((v) => v < stop);

  const totalLaps = loopValues.length;

  const runLoop = async () => {
    setIsRunning(true);
    setIsPaused(false);
    setCompletedLaps([]);

    for (let i = 0; i < loopValues.length; i++) {
      if (!isRunning) break;

      setCurrentIndex(i);
      setCompletedLaps((prev) => [...prev, loopValues[i]]);

      // Wait for animation
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    setCurrentIndex(null);
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setCurrentIndex(null);
    setCompletedLaps([]);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Calculate position on circular track
  const getPosition = (index: number) => {
    const angle = (index / totalLaps) * 360 - 90; // Start at top
    const radius = 120;
    const x = 150 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 150 + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y, angle };
  };

  return (
    <Card className="not-prose p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          🏁 For Loop Racetrack
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Watch the racer go around the track for each iteration!
        </p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Start</label>
          <Input
            type="number"
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
            disabled={isRunning}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Stop</label>
          <Input
            type="number"
            value={stop}
            onChange={(e) => setStop(Number(e.target.value))}
            disabled={isRunning}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Step</label>
          <Input
            type="number"
            value={step}
            min="1"
            onChange={(e) => setStep(Number(e.target.value))}
            disabled={isRunning}
          />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <Button
          onClick={runLoop}
          disabled={isRunning || totalLaps === 0}
          className="bg-green-600 hover:bg-green-700"
        >
          <Play className="h-4 w-4 mr-2" />
          Start Race
        </Button>
        <Button onClick={reset} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Racetrack */}
      <div className="relative h-80 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 overflow-hidden">
        <svg width="300" height="300" className="mx-auto">
          {/* Track circle */}
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="40"
            className="dark:stroke-gray-700"
          />

          {/* Track markers */}
          {loopValues.map((value, idx) => {
            const pos = getPosition(idx);
            const isCompleted = completedLaps.includes(value);
            return (
              <g key={idx}>
                {/* Checkpoint marker */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="8"
                  fill={isCompleted ? "#10b981" : "#d1d5db"}
                  className={isCompleted ? "animate-pulse" : ""}
                />
                {/* Value label */}
                <text
                  x={pos.x}
                  y={pos.y - 20}
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-700 dark:fill-gray-300"
                >
                  {value}
                </text>
              </g>
            );
          })}

          {/* Racer (car emoji) */}
          {currentIndex !== null && (
            <motion.g
              initial={getPosition(currentIndex === 0 ? 0 : currentIndex)}
              animate={getPosition(currentIndex)}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <text
                x="0"
                y="0"
                fontSize="32"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                🏎️
              </text>
            </motion.g>
          )}

          {/* Finish flag */}
          {currentIndex === totalLaps - 1 && (
            <motion.text
              x="150"
              y="30"
              fontSize="40"
              textAnchor="middle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              🏁
            </motion.text>
          )}
        </svg>

        {/* Current iteration display */}
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          >
            i = {loopValues[currentIndex]}
            <div className="text-xs font-normal">
              Lap {currentIndex + 1} of {totalLaps}
            </div>
          </motion.div>
        )}

        {/* Completion message */}
        {!isRunning && completedLaps.length === totalLaps && totalLaps > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-xl shadow-xl text-center"
          >
            🎉 Race Complete!
            <div className="text-sm font-normal mt-1">
              Completed {totalLaps} iteration{totalLaps !== 1 ? "s" : ""}
            </div>
          </motion.div>
        )}
      </div>

      {/* Code reference */}
      <div className="mt-6 p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100">
        <div className="text-gray-500"># The code doing this:</div>
        <div>
          for i in range({start}, {stop}, {step}):
        </div>
        <div className="ml-4">
          print(i){" "}
          <span className="text-gray-500">
            # Prints: {loopValues.join(", ")}
          </span>
        </div>
      </div>

      {/* Values display */}
      {loopValues.length > 0 && (
        <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <div className="font-bold text-sm mb-2">Loop will iterate over:</div>
          <div className="flex flex-wrap gap-2">
            {loopValues.map((value, idx) => (
              <motion.div
                key={idx}
                className={`px-3 py-1 rounded font-mono font-bold ${
                  completedLaps.includes(value)
                    ? "bg-green-500 text-white"
                    : "bg-white dark:bg-gray-700"
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                {value}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
