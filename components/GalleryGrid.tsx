import Image from 'next/image';

interface GalleryImage {
  url: string;
  description: string;
}

interface Props {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <figure
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative aspect-square">
            <Image
              src={image.url}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <figcaption className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-lg font-medium">{image.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
