"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  size?: "sm" | "md" | "lg";
  loop?: boolean;
};

const sizeMap = {
  sm: 320,
  md: 420,
  lg: 520
};

// Timeline summary (tweak durations here):
// State 1: AI -> File 1 zap + wall-of-text typing (0s - 2.5s)
// State 2: AI -> File 2 zap + formatted text typing (2.5s - 5.5s)
// State 3: AI -> File 3 zap + refined draft typing w/ blue links (5.5s - 8.5s)
export function ContentOsAnimation({ size = "md", loop = true }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

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

  const lineSegments = useMemo(
    () => [
      { x: 340, y: 140, w: 190 },
      { x: 340, y: 168, w: 190 },
      { x: 340, y: 196, w: 190 },
      { x: 340, y: 224, w: 190 },
      { x: 340, y: 252, w: 190 },
      { x: 340, y: 280, w: 190 },
      { x: 340, y: 308, w: 190 }
    ],
    []
  );

  const formattedSegments = useMemo(
    () => [
      { x: 340, y: 140, w: 200 },
      { x: 340, y: 168, w: 170 },
      { x: 340, y: 196, w: 185 },
      { x: 340, y: 226, w: 120, gap: true },
      { x: 340, y: 260, w: 200 },
      { x: 340, y: 288, w: 160 },
      { x: 340, y: 316, w: 180 },
      { x: 340, y: 344, w: 150 }
    ],
    []
  );

  const refinedSegments = useMemo(
    () => [
      { x: 340, y: 140, w: 200, heading: true },
      { x: 340, y: 168, w: 170 },
      { x: 340, y: 196, w: 185, link: true },
      { x: 340, y: 226, w: 120, gap: true },
      { x: 340, y: 258, w: 200 },
      { x: 340, y: 286, w: 170 },
      { x: 340, y: 314, w: 180, link: true },
      { x: 340, y: 342, w: 150 }
    ],
    []
  );

  const activeLine = phase === 1 ? 1 : phase === 2 ? 2 : phase === 3 ? 3 : 0;

  const renderLines = () => {
    const segments =
      lines.mode === "wall" ? lineSegments : lines.mode === "formatted" ? formattedSegments : refinedSegments;

    return segments.map((seg, index) => {
      const isHeading = "heading" in seg && Boolean(seg.heading);
      const isGap = "gap" in seg && Boolean(seg.gap);
      const isLink = "link" in seg && Boolean(seg.link);
      const height = isHeading ? 10 : isGap ? 4 : 8;
      const delayStep = lines.mode === "wall" ? 0.2 : 0.2;
      const duration = lines.mode === "wall" ? 0.7 : 0.6;
      const baseDelay = 0;
      const delay = baseDelay + index * delayStep;
      const fill = isLink ? "#4da3ff" : "#ffffff";
      const opacity = isLink ? 0.9 : 0.85;

      if (prefersReducedMotion) {
        return <rect key={index} x={seg.x} y={seg.y} width={seg.w} height={height} fill={fill} opacity={opacity} />;
      }

      return (
        <motion.rect
          key={`${lines.mode}-${index}`}
          x={seg.x}
          y={seg.y}
          height={height}
          fill={fill}
          opacity={opacity}
          initial={{ width: 0 }}
          animate={{ width: seg.w }}
          transition={{ duration, delay, ease: "easeOut" }}
        />
      );
    });
  };

  const zapTransition = { duration: 0.25, ease: "easeInOut" };

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 780 420"
        width={width}
        height={height}
        className="h-auto w-full"
        role="img"
        aria-label="Content OS animation"
      >
        <rect x="125" y="40" width="70" height="70" rx="12" stroke="#ffffff" strokeWidth="2" fill="none" />
        <text x="160" y="82" textAnchor="middle" fill="#ffffff" fontSize="20" fontFamily="var(--font-sans)">
          AI
        </text>

        {[0, 1, 2].map((index) => (
          <g key={index}>
            <rect x={40 + index * 90} y={140} width="60" height="44" rx="4" stroke="#ffffff" strokeWidth="2" fill="none" />
            <path
              d={`M${86 + index * 90} 140 L${100 + index * 90} 154 L${100 + index * 90} 184 L${40 + index * 90} 184`}
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
            />
            <text
              x={70 + index * 90}
              y={168}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontFamily="var(--font-sans)"
            >
              {index + 1}
            </text>
          </g>
        ))}

        <rect x="320" y="90" width="240" height="290" rx="8" stroke="#ffffff" strokeWidth="2" fill="none" opacity={0.6} />

        {renderLines()}

        {prefersReducedMotion ? null : (
          <>
            {activeLine === 1 ? (
              <motion.path
                key="zap-1"
                d="M160 110 L140 126 L120 132 L100 140"
                stroke="#4da3ff"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0.25, 1],
                  d: [
                    "M160 110 L140 126 L120 132 L100 140",
                    "M160 110 L150 122 L120 136 L100 140",
                    "M160 110 L140 126 L120 132 L100 140"
                  ]
                }}
                transition={{ ...zapTransition, repeat: Infinity, repeatType: "loop" }}
              />
            ) : null}
            {activeLine === 2 ? (
              <motion.path
                key="zap-2"
                d="M160 110 L170 128 L190 140"
                stroke="#4da3ff"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0.25, 1],
                  d: [
                    "M160 110 L170 128 L190 140",
                    "M160 110 L168 130 L192 142",
                    "M160 110 L170 128 L190 140"
                  ]
                }}
                transition={{ ...zapTransition, repeat: Infinity, repeatType: "loop" }}
              />
            ) : null}
            {activeLine === 3 ? (
              <motion.path
                key="zap-3"
                d="M160 110 L200 126 L230 134 L280 140"
                stroke="#4da3ff"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0.25, 1],
                  d: [
                    "M160 110 L200 126 L230 134 L280 140",
                    "M160 110 L206 124 L232 138 L280 140",
                    "M160 110 L200 126 L230 134 L280 140"
                  ]
                }}
                transition={{ ...zapTransition, repeat: Infinity, repeatType: "loop" }}
              />
            ) : null}
          </>
        )}
      </svg>
    </div>
  );
}
