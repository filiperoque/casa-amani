import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  fill,
  priority,
  sizes,
  className,
  onLoad,
}: OptimizedImageProps) {
  const basePath = src.replace(/\.jpg$/, "");

  return (
    <picture className="relative">
      <source srcSet={`${basePath}.avif`} type="image/avif" />
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={className}
        onLoad={onLoad}
        style={{
          outline: "1px solid rgba(0, 0, 0, 0.08)",
          outlineOffset: "-1px",
        }}
      />
    </picture>
  );
}
