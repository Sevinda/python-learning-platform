/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit3, RotateCcw } from "lucide-react";

interface DictEntry {
  key: string;
  value: string;
  id: string;
}

export function DictionaryExplorer() {
  const [entries, setEntries] = useState<DictEntry[]>([
    { key: "name", value: "Alice", id: "1" },
    { key: "age", value: "25", id: "2" },
    { key: "city", value: "NYC", id: "3" },
  ]);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const addEntry = () => {
    if (newKey.trim() && newValue.trim()) {
      const existingIndex = entries.findIndex((e) => e.key === newKey);

      if (existingIndex >= 0) {
        // Update existing key
        const updated = [...entries];
        updated[existingIndex] = { ...updated[existingIndex], value: newValue };
        setEntries(updated);
      } else {
        // Add new key
        setEntries([
          ...entries,
          { key: newKey, value: newValue, id: Date.now().toString() },
        ]);
      }

      setNewKey("");
      setNewValue("");
    }
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  const startEdit = (entry: DictEntry) => {
    setEditingId(entry.id);
    setEditValue(entry.value);
  };

  const saveEdit = (id: string) => {
    setEntries(
      entries.map((e) => (e.id === id ? { ...e, value: editValue } : e)),
    );
    setEditingId(null);
    setEditValue("");
  };

  const reset = () => {
    setEntries([
      { key: "name", value: "Alice", id: "1" },
      { key: "age", value: "25", id: "2" },
      { key: "city", value: "NYC", id: "3" },
    ]);
    setNewKey("");
    setNewValue("");
    setEditingId(null);
  };

  const getValue = (key: string) => {
    const entry = entries.find((e) => e.key === key);
    return entry ? entry.value : "KeyError!";
  };

  return (
    <Card className="not-prose p-6 bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          📚 Dictionary Explorer
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Explore key-value pairs in Python dictionaries
        </p>
      </div>

      {/* Add New Entry */}
      <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-700">
        <div className="text-sm font-bold mb-3">Add or Update Entry</div>
        <div className="flex gap-2">
          <Input
            placeholder="Key"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addEntry()}
            className="flex-1"
          />
          <span className="text-2xl self-center">:</span>
          <Input
            placeholder="Value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addEntry()}
            className="flex-1"
          />
          <Button
            onClick={addEntry}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Dictionary Visualization */}
      <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg min-h-50">
        <div className="text-sm font-bold mb-4 text-gray-600 dark:text-gray-400">
          Dictionary Contents ({entries.length} pair
          {entries.length !== 1 ? "s" : ""})
        </div>

        <AnimatePresence mode="popLayout">
          {entries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-400 py-8"
            >
              Empty dictionary {}
            </motion.div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-linear-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg"
                >
                  {/* Key */}
                  <div className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg font-mono font-bold text-center">
                    "{entry.key}"
                  </div>

                  {/* Arrow */}
                  <div className="text-2xl">→</div>

                  {/* Value */}
                  <div className="flex-1">
                    {editingId === entry.id ? (
                      <div className="flex gap-2">
                        <Input
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onKeyDown={(e) =>
                            e.key === "Enter" && saveEdit(entry.id)
                          }
                          className="flex-1"
                          autoFocus
                        />
                        <Button
                          size="sm"
                          onClick={() => saveEdit(entry.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          ✓
                        </Button>
                      </div>
                    ) : (
                      <div className="bg-pink-500 text-white px-4 py-2 rounded-lg font-mono font-bold text-center">
                        "{entry.value}"
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startEdit(entry)}
                    >
                      <Edit3 className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteEntry(entry.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Access Example */}
      {entries.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg"
        >
          <div className="text-sm font-bold mb-2">Access Value by Key</div>
          <div className="font-mono">
            person["{entries[0].key}"] = "{getValue(entries[0].key)}"
          </div>
        </motion.div>
      )}

      {/* Operations Info */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center">
          <div className="text-2xl mb-1">📥</div>
          <div className="text-xs font-bold">Add/Update</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            dict[key] = value
          </div>
        </div>
        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
          <div className="text-2xl mb-1">🔍</div>
          <div className="text-xs font-bold">Access</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            dict[key]
          </div>
        </div>
        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg text-center">
          <div className="text-2xl mb-1">🗑️</div>
          <div className="text-xs font-bold">Delete</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            del dict[key]
          </div>
        </div>
      </div>

      <Button onClick={reset} variant="outline" className="w-full">
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset Dictionary
      </Button>

      {/* Code Reference */}
      <div className="mt-6 p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-100">
        <div className="text-gray-500"># Dictionary operations:</div>
        <div>person = {"{"}</div>
        {entries.map((entry, i) => (
          <div key={entry.id} className="pl-4">
            "{entry.key}": "{entry.value}"{i < entries.length - 1 ? "," : ""}
          </div>
        ))}
        <div>{"}"}</div>
        <div className="mt-2 text-gray-500">
          # Access, add, update, delete keys!
        </div>
      </div>
    </Card>
  );
}
