"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Nama file saat gambar diunduh. */
  downloadName?: string;
};

/** Gambar yang bisa diklik untuk dibuka penuh dalam pop-up, lengkap dengan tombol unduh. */
export default function ZoomableImage({ src, alt, sizes, className = "", priority, downloadName }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

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

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className="m-auto max-h-[92vh] max-w-[min(1100px,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-2">
              <a
                href={src}
                download={downloadName ?? true}
                className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black transition-opacity hover:opacity-85"
              >
                Unduh ↓
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md bg-white/15 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/25"
                aria-label="Tutup"
              >
                Tutup ✕
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element -- tampilkan file asli resolusi penuh */}
            <img src={src} alt={alt} className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain" />
          </div>
        )}
      </dialog>
    </>
  );
}
