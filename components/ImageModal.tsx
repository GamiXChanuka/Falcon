"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryImage } from "@/lib/gallery-data";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-zinc-950 border-zinc-800 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-2/3 h-[50vh] md:h-[80vh] bg-black">
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>

          <div className="w-full md:w-1/3 p-6 md:p-8 bg-zinc-950 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full w-fit">
              {image.category}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {image.title}
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              {image.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
