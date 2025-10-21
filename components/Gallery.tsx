"use client";

import { useState, useMemo } from "react";
import { galleryImages, categories, GalleryImage } from "@/lib/gallery-data";
import { ImageModal } from "./ImageModal";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryImages;
    }
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Visual Gallery-FALCON
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our curated collection of stunning imagery across multiple categories
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                selectedCategory === category
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(image)}
              className="group relative overflow-hidden rounded-xl bg-zinc-900 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                    {image.title}
                  </h3>

                  <p className="text-zinc-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No images found in this category</p>
          </div>
        )}
      </div>

      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
