"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CodePlaygroundProps {
  initialCode?: string;
  examples?: { label: string; code: string }[];
}

export function CodePlayground({
  initialCode = 'print("Hello, Python!")',
  examples = [],
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    setOutput([]);
    setShowConfetti(false);

    try {
      // Simulate Python execution (replace with Pyodide in production)
      // For now, we'll do simple pattern matching for demo purposes
      const results: string[] = [];

      // Split by lines and process each
      const lines = code.split("\n");
      for (const line of lines) {
        if (line.trim().startsWith("print(")) {
          // Extract content between print( and )
          const match = line.match(/print\((.*)\)/);
          if (match) {
            try {
              // Evaluate simple expressions
              const content = match[1].trim();
              // Remove quotes for strings
              if (
                (content.startsWith('"') && content.endsWith('"')) ||
                (content.startsWith("'") && content.endsWith("'"))
              ) {
                results.push(content.slice(1, -1));
              } else if (content.startsWith('f"') || content.startsWith("f'")) {
                // Simple f-string handling
                results.push(content.slice(2, -1));
              } else {
                // Try to evaluate as number or expression
                try {
                  const evaluated = eval(content);
                  results.push(String(evaluated));
                } catch {
                  results.push(content);
                }
              }
            } catch {
              results.push(match[1]);
            }
          }
        }
      }

      // Add delay for animation effect
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (results.length > 0) {
        setOutput(results);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      } else {
        setOutput(["# No output (code executed successfully)"]);
      }
    } catch (error) {
      setOutput([
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
  };

  const loadExample = (exampleCode: string) => {
    setCode(exampleCode);
    setOutput([]);
  };

  return (
    <Card className="not-prose overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-bold text-lg">Interactive Python Playground</h3>
        </div>
        <p className="text-sm text-blue-100 mt-1">
          Edit the code and click Run to see it in action! 🎮
        </p>
      </div>

      {/* Example buttons */}
      {examples.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-900 p-3 border-b flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Try:
          </span>
          {examples.map((example, idx) => (
            <Button
              key={idx}
              variant="outline"
              size="sm"
              onClick={() => loadExample(example.code)}
              className="text-xs"
            >
              {example.label}
            </Button>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
        {/* Code Editor */}
        <div className="relative">
          <div className="bg-gray-800 text-gray-100 p-2 text-xs font-mono">
            editor.py
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            spellCheck={false}
          />
        </div>

        {/* Output Panel */}
        <div className="relative bg-black">
          <div className="bg-gray-800 text-gray-100 p-2 text-xs font-mono flex items-center justify-between">
            <span>output</span>
            {showConfetti && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-yellow-400"
              >
                ✨
              </motion.span>
            )}
          </div>
          <div className="h-64 p-4 font-mono text-sm text-green-400 overflow-auto">
            <AnimatePresence mode="wait">
              {output.length === 0 ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-500"
                >
                  # Output will appear here... 📺
                </motion.div>
              ) : (
                <motion.div
                  key="output"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {output.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-50 dark:bg-gray-900 p-3 border-t flex gap-2">
        <Button
          onClick={runCode}
          disabled={isRunning}
          className="bg-green-600 hover:bg-green-700"
        >
          <Play className="h-4 w-4 mr-2" />
          {isRunning ? "Running..." : "Run Code"}
        </Button>
        <Button onClick={resetCode} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>
    </Card>
  );
}
