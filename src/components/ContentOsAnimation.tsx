"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  size?: "sm" | "md" | "lg";
  loop?: boolean;
};

type LineKind = "title" | "heading" | "text";
type LineSegment = { y: number; kind: LineKind; color?: string; link?: boolean; linkOffset?: number; w?: number };

const sizeMap = {
  sm: 300,
  md: 340,
  lg: 420
};

// Timeline summary (tweak durations here):
// State 1: AI -> File 1 zap + wall-of-text typing (0s - 2.5s)
// State 2: AI -> File 2 zap + formatted text typing (2.5s - 5.5s)
// State 3: AI -> File 3 zap + refined draft typing w/ blue links (5.5s - 8.5s)
export function ContentOsAnimation({ size = "md", loop = true }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const leftOffsetY = 62;
  const textOffsetY = -6;
  const groupScale = 1.12;
  const groupTranslate = { x: -12, y: -30 };

  const height = sizeMap[size];
  const width = Math.round(height * 1.9);

  useEffect(() => {
    if (prefersReducedMotion || !loop) {
      setPhase(3);
      return;
    }

    const phases = [1, 2, 3];
    const timings = [2500, 3000, 3000];
    let index = 0;
    let timeout: NodeJS.Timeout;

    const advance = () => {
      setPhase(phases[index]);
      timeout = setTimeout(() => {
        index = (index + 1) % phases.length;
        advance();
      }, timings[index]);
    };

    advance();
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion, loop]);

  const lines = useMemo(() => {
    if (phase === 1) {
      return { mode: "wall", headings: 1, blueLinks: 0 };
    }
    if (phase === 2) {
      return { mode: "formatted", headings: 2, blueLinks: 0 };
    }
    return { mode: "refined", headings: 3, blueLinks: 2 };
  }, [phase]);

  const draftFrame = useMemo(
    () => ({
      x: 360,
      y: 52,
      width: 240,
      height: 256,
      paddingX: 20,
      paddingTop: 22,
      lineGap: 22
    }),
    []
  );

  const widthMap = useMemo<Record<LineKind, number>>(() => ({ title: 205, heading: 170, text: 145 }), []);
  const heightMap = useMemo<Record<LineKind, number>>(() => ({ title: 10, heading: 8, text: 6 }), []);
  const contentWidth = draftFrame.width - draftFrame.paddingX * 2;

  const buildLines = (input: Array<Omit<LineSegment, "y">>) => {
    const extraTitleGap = 10;
    const extraHeadingGap = 8;
    let currentY = draftFrame.y + draftFrame.paddingTop;
    return input.map((segment) => {
      const extra =
        segment.kind === "title" ? extraTitleGap : segment.kind === "heading" ? extraHeadingGap : 0;
      currentY += extra;
      const withY = { ...segment, y: currentY };
      currentY += draftFrame.lineGap + extra;
      return withY;
    });
  };

  const lineSegments = useMemo(
    (): LineSegment[] =>
      buildLines([
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth },
        { kind: "text", w: contentWidth }
      ]),
    [contentWidth, draftFrame]
  );

  const formattedSegments = useMemo(
    (): LineSegment[] =>
      buildLines([
        { kind: "title" },
        { kind: "text", w: contentWidth * 0.55 },
        { kind: "text", w: contentWidth * 0.85 },
        { kind: "text", w: contentWidth * 0.65 },
        { kind: "heading" },
        { kind: "text", w: contentWidth * 0.55 },
        { kind: "text", w: contentWidth * 0.85 },
        { kind: "text", w: contentWidth * 0.65 },
        { kind: "heading" }
      ]),
    [contentWidth, draftFrame]
  );

  const refinedSegments = useMemo(
    (): LineSegment[] =>
      buildLines([
        { kind: "title" },
        { kind: "text", w: contentWidth * 0.55 },
        { kind: "text", w: contentWidth * 0.85, link: true },
        { kind: "text", w: contentWidth * 0.65 },
        { kind: "heading" },
        { kind: "text", w: contentWidth * 0.55 },
        { kind: "text", w: contentWidth * 0.85, link: true, linkOffset: 0.2 },
        { kind: "text", w: contentWidth * 0.65 },
        { kind: "heading", color: "#4da3ff", w: contentWidth * 0.45 }
      ]),
    [contentWidth, draftFrame]
  );

  const activeLine = phase === 1 ? 1 : phase === 2 ? 2 : phase === 3 ? 3 : 0;

  const renderLines = () => {
    const segments =
      lines.mode === "wall" ? lineSegments : lines.mode === "formatted" ? formattedSegments : refinedSegments;

    return segments.map((seg, index) => {
      const isLink = "link" in seg && Boolean(seg.link);
      const kind = seg.kind;
      const height = heightMap[kind];
      const width = seg.w ?? widthMap[kind];
      const delayStep = lines.mode === "wall" ? 0.12 : 0.2;
      const duration = lines.mode === "wall" ? 0.45 : 0.6;
      const baseDelay = 0;
      const delay = baseDelay + index * delayStep;
      const fill = seg.color ?? "#ffffff";
      const opacity = isLink ? 0.9 : 0.85;
      const x = draftFrame.x + draftFrame.paddingX;
      const y = seg.y + textOffsetY;

      if (prefersReducedMotion) {
        return <rect key={index} x={x} y={y} width={width} height={height} fill={fill} opacity={opacity} />;
      }

      return (
        <g key={`${lines.mode}-${index}`}>
          <motion.rect
            x={x}
            y={y}
            height={height}
            fill={fill}
            opacity={opacity}
            initial={{ width: 0 }}
            animate={{ width }}
            transition={{ duration, delay, ease: "easeOut" }}
          />
          {isLink ? (
            <motion.rect
              x={x + width * (seg.linkOffset ?? 0.45)}
              y={y}
              height={height}
              fill="#4da3ff"
              opacity={0.9}
              initial={{ width: 0 }}
              animate={{ width: width * 0.35 }}
              transition={{ duration, delay, ease: "easeOut" }}
            />
          ) : null}
        </g>
      );
    });
  };

  const zapTransition = { duration: 0.25, ease: "easeInOut" };

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 780 320"
        width={width}
        height={height}
        className="h-auto w-full"
        role="img"
        aria-label="Content OS animation"
      >
        <g transform={`translate(${groupTranslate.x} ${groupTranslate.y}) scale(${groupScale})`}>
        <rect x="115" y={35 + leftOffsetY} width="70" height="70" rx="12" stroke="#ffffff" strokeWidth="2" fill="none" />
        <text x="150" y={77 + leftOffsetY} textAnchor="middle" fill="#ffffff" fontSize="20" fontFamily="var(--font-sans)">
          AI
        </text>

        {[0, 1, 2].map((index) => (
          <g key={index}>
            <rect x={30 + index * 90} y={135 + leftOffsetY} width="60" height="44" rx="4" stroke="#ffffff" strokeWidth="2" fill="none" />
            <path
              d={`M${76 + index * 90} ${135 + leftOffsetY} L${90 + index * 90} ${149 + leftOffsetY} L${90 + index * 90} ${179 + leftOffsetY} L${30 + index * 90} ${179 + leftOffsetY}`}
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
            />
            <text
              x={60 + index * 90}
              y={163 + leftOffsetY}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontFamily="var(--font-sans)"
            >
              {index + 1}
            </text>
          </g>
        ))}

        <rect
          x={draftFrame.x}
          y={draftFrame.y}
          width={draftFrame.width}
          height={draftFrame.height}
          rx="8"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
          opacity={0.6}
        />

        {renderLines()}

        {prefersReducedMotion ? null : (
          <>
            {activeLine === 1 ? (
              <motion.path
                key="zap-1"
                d={`M150 ${105 + leftOffsetY} L130 ${121 + leftOffsetY} L110 ${127 + leftOffsetY} L90 ${135 + leftOffsetY}`}
                stroke="#4da3ff"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0.25, 1],
                  d: [
                    `M150 ${105 + leftOffsetY} L130 ${121 + leftOffsetY} L110 ${127 + leftOffsetY} L90 ${135 + leftOffsetY}`,
                    `M150 ${105 + leftOffsetY} L140 ${117 + leftOffsetY} L110 ${131 + leftOffsetY} L90 ${135 + leftOffsetY}`,
                    `M150 ${105 + leftOffsetY} L130 ${121 + leftOffsetY} L110 ${127 + leftOffsetY} L90 ${135 + leftOffsetY}`
                  ]
                }}
                transition={{ ...zapTransition, repeat: Infinity, repeatType: "loop" }}
              />
            ) : null}
            {activeLine === 2 ? (
              <motion.path
                key="zap-2"
                d={`M150 ${105 + leftOffsetY} L160 ${123 + leftOffsetY} L180 ${135 + leftOffsetY}`}
                stroke="#4da3ff"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0.25, 1],
                  d: [
                    `M150 ${105 + leftOffsetY} L160 ${123 + leftOffsetY} L180 ${135 + leftOffsetY}`,
                    `M150 ${105 + leftOffsetY} L158 ${125 + leftOffsetY} L182 ${137 + leftOffsetY}`,
                    `M150 ${105 + leftOffsetY} L160 ${123 + leftOffsetY} L180 ${135 + leftOffsetY}`
                  ]
                }}
                transition={{ ...zapTransition, repeat: Infinity, repeatType: "loop" }}
              />
            ) : null}
            {activeLine === 3 ? (
              <motion.path
                key="zap-3"
                d={`M150 ${105 + leftOffsetY} L190 ${121 + leftOffsetY} L220 ${129 + leftOffsetY} L260 ${135 + leftOffsetY}`}
                stroke="#4da3ff"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0.25, 1],
                  d: [
                    `M150 ${105 + leftOffsetY} L190 ${121 + leftOffsetY} L220 ${129 + leftOffsetY} L260 ${135 + leftOffsetY}`,
                    `M150 ${105 + leftOffsetY} L196 ${119 + leftOffsetY} L222 ${133 + leftOffsetY} L260 ${135 + leftOffsetY}`,
                    `M150 ${105 + leftOffsetY} L190 ${121 + leftOffsetY} L220 ${129 + leftOffsetY} L260 ${135 + leftOffsetY}`
                  ]
                }}
                transition={{ ...zapTransition, repeat: Infinity, repeatType: "loop" }}
              />
            ) : null}
          </>
        )}
        </g>
      </svg>
    </div>
  );
}
