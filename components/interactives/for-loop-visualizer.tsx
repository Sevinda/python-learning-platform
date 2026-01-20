"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function safeInt(v: string, fallback: number) {
  const n = Number.parseInt(v, 10);
  return Number.isFinite(n) ? n : fallback;
}

export default function ForLoopVisualizer() {
  const [start, setStart] = useState("0");
  const [stop, setStop] = useState("5");
  const [step, setStep] = useState("1");
  const [index, setIndex] = useState(0);

  const values = useMemo(() => {
    const s = safeInt(start, 0);
    const e = safeInt(stop, 5);
    const st = safeInt(step, 1);

    if (st === 0) return [];
    const out: number[] = [];
    if (st > 0) for (let i = s; i < e; i += st) out.push(i);
    else for (let i = s; i > e; i += st) out.push(i);
    return out.slice(0, 30); // keep it safe/short for students
  }, [start, stop, step]);

  const current = values[index];

  return (
    <Card className="not-prose">
      <CardHeader>
        <CardTitle>For loop visualizer</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">start</p>
            <Input
              value={start}
              onChange={(e) => {
                setStart(e.target.value);
                setIndex(0);
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">stop</p>
            <Input
              value={stop}
              onChange={(e) => {
                setStop(e.target.value);
                setIndex(0);
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">step</p>
            <Input
              value={step}
              onChange={(e) => {
                setStep(e.target.value);
                setIndex(0);
              }}
            />
          </div>
        </div>

        <div className="rounded-lg border p-3 font-mono text-sm overflow-auto">
          {`for i in range(${start}, ${stop}, ${step}):
    print(i)`}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={values.length === 0 || index === 0}
          >
            Prev
          </Button>
          <Button
            onClick={() => setIndex((i) => Math.min(values.length - 1, i + 1))}
            disabled={values.length === 0 || index >= values.length - 1}
          >
            Next
          </Button>
          <Button
            variant="outline"
            onClick={() => setIndex(0)}
            disabled={values.length === 0}
          >
            Reset
          </Button>
        </div>

        <div className="grid gap-2">
          {values.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No values to loop through (check step / stop).
            </p>
          ) : (
            values.map((v, i) => (
              <motion.div
                key={`${v}-${i}`}
                layout
                className={`rounded-md border p-2 font-mono text-sm ${
                  i === index ? "bg-muted" : ""
                }`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                iteration {i + 1} → i = <b>{v}</b>{" "}
                {i === index ? " (current)" : ""}
              </motion.div>
            ))
          )}
        </div>

        <div className="rounded-lg border p-3">
          <p className="text-sm">
            <b>Output right now:</b>{" "}
            {values.length === 0 ? "—" : String(current)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
