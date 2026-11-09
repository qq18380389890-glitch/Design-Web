import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

// Keep long-form copy on one text layer so it remains sharp during scrolling.
export default function AnimatedText({ text, className = "", style = {} }: AnimatedTextProps) {
  return <p className={className} style={style}>{text}</p>;
}
