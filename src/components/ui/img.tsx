"use client";

import { cn } from "@/lib/utils";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Img({ className, alt, fallback, ...props }: ImgProps) {
  return (
    <img
      className={cn("object-cover", className)}
      alt={alt || ""}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
