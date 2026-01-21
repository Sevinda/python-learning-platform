/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit, RotateCcw } from "lucide-react";

export function ListAnimator() {
  const [items, setItems] = useState<string[]>(["apple", "banana", "orange"]);
  const [newItem, setNewItem] = useState("");
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const animateOperation = async (op: string, index?: number) => {
    setOperation(op);
    if (index !== undefined) setAnimatingIndex(index);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setOperation(null);
    setAnimatingIndex(null);
  };

  const handleAppend = async () => {
    if (!newItem.trim()) return;
    await animateOperation("append");
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleRemove = async (index: number) => {
    await animateOperation("remove", index);
    setItems(items.filter((_, i) => i !== index));
  };

  const handleInsert = async (index: number) => {
    if (!newItem.trim()) return;
    await animateOperation("insert", index);
    const newItems = [...items];
    newItems.splice(index, 0, newItem);
    setItems(newItems);
    setNewItem("");
  };

  const handlePop = async () => {
    if (items.length === 0) return;
    await animateOperation("pop", items.length - 1);
    setItems(items.slice(0, -1));
  };

  const handleSort = async () => {
    await animateOperation("sort");
    setItems([...items].sort());
  };

  const handleReverse = async () => {
    await animateOperation("reverse");
    setItems([...items].reverse());
  };

  const reset = () => {
    setItems(["apple", "banana", "orange"]);
    setNewItem("");
  };

  return (
    <Card className="not-prose p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          📋 List Animator
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Watch list operations come to life with animations!
        </p>
      </div>

      {/* Add Item Input */}
      <div className="flex gap-2 mb-4">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item..."
          onKeyDown={(e) => e.key === "Enter" && handleAppend()}
          className="flex-1"
        />
        <Button
          onClick={handleAppend}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Append
        </Button>
      </div>

      {/* Operation Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          onClick={handlePop}
          variant="outline"
          disabled={items.length === 0}
          size="sm"
        >
          Pop (remove last)
        </Button>
        <Button onClick={handleSort} variant="outline" size="sm">
          Sort
        </Button>
        <Button onClick={handleReverse} variant="outline" size="sm">
          Reverse
        </Button>
        <Button onClick={reset} variant="outline" size="sm">
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </div>

      {/* List Visualization */}
      <div className="relative min-h-[200px] bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-gray-600">
        {/* List label */}
        <div className="absolute -top-3 left-4 bg-purple-600 text-white px-3 py-1 rounded text-sm font-mono font-bold">
          fruits = [ ]
        </div>

        {/* Items */}
        <div className="flex flex-wrap gap-3 items-start min-h-[120px]">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  scale: animatingIndex === index ? 1.2 : 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: operation === "remove" || operation === "pop" ? 100 : 0,
                  y: operation === "remove" || operation === "pop" ? -50 : 0,
                  rotate:
                    operation === "remove" || operation === "pop" ? 15 : 0,
                }}
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.2 },
                }}
                className="relative"
              >
                {/* Index label */}
                <div className="absolute -top-5 left-0 right-0 text-center text-xs font-mono font-bold text-gray-500">
                  [{index}]
                </div>

                {/* Item card */}
                <div
                  className={`
                    relative px-4 py-3 rounded-lg font-mono font-bold
                    border-2 min-w-[100px] text-center
                    ${
                      animatingIndex === index
                        ? "bg-yellow-400 border-yellow-600 text-gray-900 shadow-lg"
                        : "bg-gradient-to-br from-purple-500 to-pink-500 text-white border-purple-600"
                    }
                  `}
                >
                  "{item}"{/* Remove button */}
                  <button
                    onClick={() => handleRemove(index)}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-md"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                  {/* Insert button */}
                  {newItem && (
                    <button
                      onClick={() => handleInsert(index)}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-1 shadow-md text-xs"
                      title="Insert here"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {items.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 italic text-center w-full py-8"
            >
              List is empty - add some items!
            </motion.div>
          )}

          {/* Append animation placeholder */}
          {operation === "append" && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              className="px-4 py-3 rounded-lg font-mono font-bold bg-green-400 border-2 border-green-600 text-white min-w-[100px] text-center"
            >
              "{newItem}"
            </motion.div>
          )}
        </div>

        {/* Operation indicator */}
        {operation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            {operation === "append" && "⬇️ Appending to end..."}
            {operation === "remove" && "🗑️ Removing item..."}
            {operation === "insert" && "➕ Inserting item..."}
            {operation === "pop" && "⬆️ Popping last item..."}
            {operation === "sort" && "🔄 Sorting..."}
            {operation === "reverse" && "↩️ Reversing..."}
          </motion.div>
        )}
      </div>

      {/* List info */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <div className="text-xs font-bold text-gray-600 dark:text-gray-400">
            Length
          </div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {items.length}
          </div>
        </div>
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <div className="text-xs font-bold text-gray-600 dark:text-gray-400">
            Operations
          </div>
          <div className="text-xs font-mono mt-1">
            len(fruits) = {items.length}
          </div>
        </div>
      </div>

      {/* Code reference */}
      <div className="mt-4 p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100 overflow-x-auto">
        <div className="text-gray-500"># Available operations:</div>
        <div>
          fruits.append("{newItem || "item"}"){" "}
          <span className="text-gray-500"># Add to end</span>
        </div>
        <div>
          fruits.remove("item"){" "}
          <span className="text-gray-500"># Remove specific</span>
        </div>
        <div>
          fruits.pop() <span className="text-gray-500"># Remove last</span>
        </div>
        <div>
          fruits.sort(){" "}
          <span className="text-gray-500"># Sort alphabetically</span>
        </div>
        <div>
          fruits.reverse(){" "}
          <span className="text-gray-500"># Reverse order</span>
        </div>
      </div>
    </Card>
  );
}
