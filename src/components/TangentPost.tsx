"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  html: string;
};

type TangentData = {
  id: string;
  label: string;
  html: string;
};

function decode(value: string | undefined) {
  if (!value) return "";
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizeHtml(value: string) {
  return value.replace(/\\n/g, "\n").replace(/\n\n/g, "<br /><br />").replace(/\n/g, "<br />");
}

export function TangentPost({ html }: Props) {
  const [active, setActive] = useState<TangentData[]>([]);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const hasTangent = useMemo(() => html.includes("data-tangent"), [html]);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const inlinePanels = root.querySelectorAll<HTMLElement>(".tangent-inline");
    const links = root.querySelectorAll<HTMLElement>(".tangent-link");
    inlinePanels.forEach((panel) => {
      const id = panel.dataset.tangentId;
      const html = normalizeHtml(decode(panel.dataset.tangent));
      const isActive = active.some((item) => item.id === id);
      panel.classList.toggle("is-active", isActive);
      if (isActive) {
        panel.innerHTML = html;
      }
    });
    links.forEach((link) => {
      const id = link.dataset.tangentId;
      const isActive = active.some((item) => item.id === id);
      link.classList.toggle("is-active", isActive);
    });
  }, [active]);

  return (
    <div className={hasTangent ? "tangent-layout" : undefined}>
      <div
        className="tangent-content"
        ref={contentRef}
        onClick={(event) => {
          const target = event.target as HTMLElement | null;
          if (!target) return;
          if (target.dataset.tangent) {
            const id = target.dataset.tangentId ?? "";
            const entry = {
              id,
              label: decode(target.dataset.tangentLabel),
              html: normalizeHtml(decode(target.dataset.tangent))
            };
            setActive((prev) => {
              const exists = prev.find((item) => item.id === id);
              if (exists) {
                return prev.filter((item) => item.id !== id);
              }
              return [...prev, entry];
            });
          }
        }}
      >
        <div className="prose-deadwater prose-deadwater-post" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {hasTangent && active.length ? (
        <aside className="tangent-panel is-active">
          <div className="tangent-panel-inner">
            <div className="tangent-panel-header">
              <span className="tangent-panel-title">Tangents</span>
              <button
                type="button"
                className="tangent-close tangent-close-all"
                onClick={() => setActive([])}
                aria-label="Close tangents"
              >
                Close all
              </button>
            </div>
            <div className="tangent-panel-body">
              {active.map((item) => (
                <div key={item.id} className="tangent-panel-item">
                  <div className="tangent-panel-item-head">
                    <p className="tangent-panel-label">{item.label}</p>
                    <button
                      type="button"
                      className="tangent-close"
                      onClick={() => setActive((prev) => prev.filter((entry) => entry.id !== item.id))}
                      aria-label="Close tangent"
                    />
                  </div>
                  <p className="tangent-panel-text" dangerouslySetInnerHTML={{ __html: item.html }} />
                </div>
              ))}
            </div>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
