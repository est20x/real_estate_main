"use client";

import Image from "next/image";

interface EmojiProps {
  children: string;
  className?: string;
  size?: number;
}

// Emoji to unified code mapping
const emojiToUnified: Record<string, string> = {
  "🚀": "1f680",
  "💰": "1f4b0",
  "💶": "1f4b6",
  "💵": "1f4b5",
  "🔥": "1f525",
  "📄": "1f4c4",
  "🏝️": "1f3dd-fe0f",
  "⏳": "231b",
  "📍": "1f4cd",
};

export default function Emoji({ children, className, size = 32 }: EmojiProps) {
  const unified = emojiToUnified[children];

  if (!unified) {
    return <span className={className}>{children}</span>;
  }

  const imagePath = `/emoji-datasource-apple/img/apple/64/${unified}.png`;

  return (
    <Image
      src={imagePath}
      alt={children}
      width={size}
      height={size}
      className={className}
      style={{
        display: "inline-block",
        verticalAlign: "baseline",
        position: "relative",
        top: "-1px",
      }}
    />
  );
}
