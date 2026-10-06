import { images, type ImageRole } from "@/content/images";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

type Props = {
  role: ImageRole;
  caption?: string;
  index?: string;
  className?: string;
  imgClassName?: string;
  aspect?: string;
  priority?: boolean;
  placeholderLabel?: string;
};

export function Figure({ role, caption, index, className, imgClassName, aspect, priority, placeholderLabel }: Props) {
  const img = images[role];
  const ref = useReveal<HTMLDivElement>();
  return (
    <figure className={cn("group", className)}>
      <div ref={ref} className={cn("reveal-img relative overflow-hidden bg-muted", aspect)}>
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.02]",
            imgClassName,
          )}
        />
      </div>
      {(caption || index || (img.placeholder && placeholderLabel)) && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-4">
          <span className="caption">
            {index && <span className="meta mr-3 not-italic text-foreground">{index}</span>}
            {caption}
          </span>
          {img.placeholder && placeholderLabel && (
            <span className="meta shrink-0 text-[0.6rem] text-muted-foreground/70">{placeholderLabel}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
