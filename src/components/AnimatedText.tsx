import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style = {} }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });

  const words = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((char, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Character key={i} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Character>
        );
      })}
    </p>
  );
}

function Character({ children, progress, range, key }: { children: string; progress: any; range: [number, number]; key?: React.Key }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {children}
      </motion.span>
    </span>
  );
}
