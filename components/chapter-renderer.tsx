import type { Chapter } from "@/lib/curriculum";
import ForLoopVisualizer from "@/components/interactives/for-loop-visualizer";
import React from "react";

const interactiveMap: Record<string, React.ReactNode> = {
  ForLoopVisualizer: <ForLoopVisualizer />,
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
