import type { Chapter } from "@/lib/curriculum";
import ForLoopVisualizer from "@/components/interactives/for-loop-visualizer";
import { CodePlayground } from "@/components/interactives/code-playground";
import { IfElseFlowchart } from "@/components/interactives/if-else-flowchart";
import { ForLoopRacetrack } from "@/components/interactives/for-loop-racetrack";
import { ListAnimator } from "@/components/interactives/list-animator";
import { WhileLoopVisualizer } from "@/components/interactives/while-loop-visualizer";
import { StringSlicerTool } from "@/components/interactives/string-slicer-tool";
import { DictionaryExplorer } from "@/components/interactives/dictionary-explorer";
import { VariableBoxVisualizer } from "@/components/interactives/variable-box-visualizer";
import { ComparisonScale } from "@/components/interactives/comparison-scale";
import React from "react";

const interactiveMap: Record<string, React.ReactNode> = {
  ForLoopVisualizer: <ForLoopVisualizer />,
  CodePlayground: <CodePlayground />,
  IfElseFlowchart: <IfElseFlowchart />,
  ForLoopRacetrack: <ForLoopRacetrack />,
  ListAnimator: <ListAnimator />,
  WhileLoopVisualizer: <WhileLoopVisualizer />,
  StringSlicerTool: <StringSlicerTool />,
  DictionaryExplorer: <DictionaryExplorer />,
  VariableBoxVisualizer: <VariableBoxVisualizer />,
  ComparisonScale: <ComparisonScale />,
};

export default function ChapterRenderer({ chapter }: { chapter: Chapter }) {
  return (
    <div className="space-y-8">
      {chapter.sections.map((s, idx) => (
        <section key={idx} className="space-y-3">
          <h2 className="text-xl font-semibold">{s.heading}</h2>

          {/* Replace placeholder nodes like <div data-interactive="X" /> */}
          <div className="prose max-w-none">
            {replaceInteractives(s.content)}
          </div>
        </section>
      ))}
    </div>
  );
}

type InteractiveElement = React.ReactElement<{ [key: string]: unknown }>;

function isReactElementWithProps(
  node: React.ReactNode,
): node is InteractiveElement {
  return (
    typeof node === "object" &&
    node !== null &&
    "props" in node &&
    typeof (node as { props?: unknown }).props === "object" &&
    (node as { props?: unknown }).props !== null
  );
}

function replaceInteractives(node: React.ReactNode): React.ReactNode {
  if (!node) return node;

  if (
    isReactElementWithProps(node) &&
    typeof node.props["data-interactive"] === "string"
  ) {
    const key = node.props["data-interactive"] as string;
    return (
      interactiveMap[key] ?? (
        <div className="rounded-lg border p-3">
          Missing interactive: <code>{key}</code>
        </div>
      )
    );
  }

  if (isReactElementWithProps(node) && node.props.children) {
    const children = React.Children.map(
      node.props.children as React.ReactNode,
      replaceInteractives,
    );
    return React.cloneElement(node, node.props, children);
  }

  return node;
}
