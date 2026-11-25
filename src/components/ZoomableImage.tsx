"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Nama file saat gambar diunduh. */
  downloadName?: string;
  /** "sm" untuk foto potret (kartu lebih sempit), "md" untuk screenshot. */
  size?: "sm" | "md";
};

/** Gambar yang bisa diklik untuk dibuka dalam pop-up kecil, lengkap dengan tombol unduh. */
export default function ZoomableImage({ src, alt, sizes, className = "", priority, downloadName, size = "md" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group/zoom absolute inset-0 cursor-zoom-in"
        aria-label={`Perbesar gambar: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-ink/75 px-2 py-1 font-mono text-[10px] text-paper opacity-0 transition-opacity group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100">
          klik untuk perbesar
        </span>
      </button>

      {open &&
        createPortal(
          <Lightbox src={src} alt={alt} downloadName={downloadName} size={size} onClose={() => setOpen(false)} />,
          document.body,
        )}
    </>
  );
}

function Lightbox({
  src,
  alt,
  downloadName,
  size,
  onClose,
}: {
  src: string;
  alt: string;
  downloadName?: string;
  size: "sm" | "md";
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (typeof d.showModal === "function") d.showModal();
    else d.setAttribute("open", "");

    // Kunci scroll halaman selama pop-up terbuka.
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, []);

  const width = size === "sm" ? "w-[min(380px,92vw)]" : "w-[min(760px,92vw)]";

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-label={alt}
      className={`${width} m-auto overflow-hidden rounded-xl border border-rule bg-card p-0 text-ink shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-[2px]`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-rule px-4 py-2.5">
        <p className="truncate text-sm font-semibold">{alt}</p>
        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href={src}
            download={downloadName ?? true}
            className="rounded-md border border-rule px-2.5 py-1 text-xs font-semibold transition-colors hover:border-ink"
          >
            Unduh ↓
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="grid size-7 place-items-center rounded-md text-soft transition-colors hover:bg-paper hover:text-ink"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="bg-paper p-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- tampilkan file asli resolusi penuh */}
        <img src={src} alt={alt} className="mx-auto max-h-[68vh] w-auto max-w-full rounded-md object-contain" />
      </div>
      <p className="px-4 py-2 text-right font-mono text-[10px] text-faint">Esc atau klik di luar untuk menutup</p>
    </dialog>
  );
}
