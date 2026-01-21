"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";

type VarType = "int" | "str" | "float" | "bool" | "list" | "none";

interface Variable {
  name: string;
  value: string;
  type: VarType;
  id: string;
}

export function VariableBoxVisualizer() {
  const [variables, setVariables] = useState<Variable[]>([
    { name: "age", value: "25", type: "int", id: "1" },
    { name: "name", value: "Alice", type: "str", id: "2" },
    { name: "score", value: "98.5", type: "float", id: "3" },
  ]);
  const [newVarName, setNewVarName] = useState("");
  const [newVarValue, setNewVarValue] = useState("");

  const typeColors: Record<
    VarType,
    { bg: string; border: string; text: string }
  > = {
    int: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      border: "border-blue-500",
      text: "text-blue-700 dark:text-blue-300",
    },
    str: {
      bg: "bg-green-100 dark:bg-green-900/30",
      border: "border-green-500",
      text: "text-green-700 dark:text-green-300",
    },
    float: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      border: "border-purple-500",
      text: "text-purple-700 dark:text-purple-300",
    },
    bool: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      border: "border-orange-500",
      text: "text-orange-700 dark:text-orange-300",
    },
    list: {
      bg: "bg-pink-100 dark:bg-pink-900/30",
      border: "border-pink-500",
      text: "text-pink-700 dark:text-pink-300",
    },
    none: {
      bg: "bg-gray-100 dark:bg-gray-900/30",
      border: "border-gray-500",
      text: "text-gray-700 dark:text-gray-300",
    },
  };

  const detectType = (value: string): VarType => {
    if (value === "True" || value === "False") return "bool";
    if (value === "None") return "none";
    if (value.startsWith("[") && value.endsWith("]")) return "list";
    if (value.startsWith('"') || value.startsWith("'")) return "str";
    if (!isNaN(Number(value))) {
      return value.includes(".") ? "float" : "int";
    }
    return "str"; // default
  };

  const createVariable = () => {
    if (newVarName.trim() && newVarValue.trim()) {
      const type = detectType(newVarValue);
      const existing = variables.find((v) => v.name === newVarName);

      if (existing) {
        // Update existing variable
        setVariables(
          variables.map((v) =>
            v.name === newVarName ? { ...v, value: newVarValue, type } : v,
          ),
        );
      } else {
        // Create new variable
        setVariables([
          ...variables,
          {
            name: newVarName,
            value: newVarValue,
            type,
            id: Date.now().toString(),
          },
        ]);
      }

      setNewVarName("");
      setNewVarValue("");
    }
  };

  const deleteVariable = (id: string) => {
    setVariables(variables.filter((v) => v.id !== id));
  };

  const reset = () => {
    setVariables([
      { name: "age", value: "25", type: "int", id: "1" },
      { name: "name", value: "Alice", type: "str", id: "2" },
      { name: "score", value: "98.5", type: "float", id: "3" },
    ]);
    setNewVarName("");
    setNewVarValue("");
  };

  const typeExamples = [
    { type: "int" as VarType, example: "42", desc: "Whole numbers" },
    { type: "float" as VarType, example: "3.14", desc: "Decimals" },
    { type: "str" as VarType, example: '"hello"', desc: "Text" },
    { type: "bool" as VarType, example: "True", desc: "True/False" },
    { type: "list" as VarType, example: "[1,2,3]", desc: "Collections" },
  ];

  return (
    <Card className="not-prose p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          📦 Variable Box Visualizer
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          See how Python stores different data types in variables
        </p>
      </div>

      {/* Create Variable */}
      <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700">
        <div className="text-sm font-bold mb-3">Create or Update Variable</div>
        <div className="flex gap-2">
          <Input
            placeholder="Variable name"
            value={newVarName}
            onChange={(e) => setNewVarName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && createVariable()}
            className="flex-1"
          />
          <span className="text-2xl self-center">=</span>
          <Input
            placeholder="Value"
            value={newVarValue}
            onChange={(e) => setNewVarValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && createVariable()}
            className="flex-1"
          />
          <Button
            onClick={createVariable}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Create
          </Button>
        </div>
        {newVarValue && (
          <div className="mt-2 text-sm">
            Detected type:{" "}
            <span className="font-bold">{detectType(newVarValue)}</span>
          </div>
        )}
      </div>

      {/* Variable Boxes */}
      <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg min-h-[250px]">
        <div className="text-sm font-bold mb-4 text-gray-600 dark:text-gray-400">
          Memory ({variables.length} variable{variables.length !== 1 ? "s" : ""}
          )
        </div>

        <AnimatePresence mode="popLayout">
          {variables.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 py-12"
            >
              No variables yet. Create one above! 👆
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {variables.map((variable, index) => {
                const colors = typeColors[variable.type];
                return (
                  <motion.div
                    key={variable.id}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${colors.bg} border-2 ${colors.border} rounded-lg p-4 relative`}
                  >
                    {/* Delete Button */}
                    <button
                      onClick={() => deleteVariable(variable.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>

                    {/* Type Badge */}
                    <div
                      className={`inline-block px-2 py-1 rounded text-xs font-bold mb-2 ${colors.text}`}
                    >
                      {variable.type}
                    </div>

                    {/* Variable Name */}
                    <div className="font-mono font-bold text-lg mb-1">
                      {variable.name}
                    </div>

                    {/* Equals Sign */}
                    <div className="text-2xl text-gray-400 my-1">=</div>

                    {/* Value */}
                    <div
                      className={`font-mono text-xl font-bold ${colors.text} break-all`}
                    >
                      {variable.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Type Reference */}
      <div className="mb-6 grid grid-cols-2 md:grid-cols-5 gap-2">
        {typeExamples.map((item) => {
          const colors = typeColors[item.type];
          return (
            <button
              key={item.type}
              onClick={() => {
                setNewVarName(`my_${item.type}`);
                setNewVarValue(item.example);
              }}
              className={`${colors.bg} border-2 ${colors.border} rounded-lg p-3 text-center hover:scale-105 transition-transform`}
            >
              <div className={`text-xs font-bold mb-1 ${colors.text}`}>
                {item.type}
              </div>
              <div className="font-mono text-sm mb-1">{item.example}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {item.desc}
              </div>
            </button>
          );
        })}
      </div>

      <Button onClick={reset} variant="outline" className="w-full mb-4">
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset Variables
      </Button>

      {/* Code Reference */}
      <div className="p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100">
        <div className="text-gray-500"># Variables in Python:</div>
        {variables.map((v) => (
          <div key={v.id}>
            {v.name} = {v.value}{" "}
            <span className="text-gray-500"># {v.type}</span>
          </div>
        ))}
        {variables.length === 0 && (
          <div className="text-gray-500"># Create variables above!</div>
        )}
      </div>
    </Card>
  );
}
