import { useState } from "react";
import { createContext } from "use-context-selector";

export interface PhotoGalleryContextData {
  isPhotoZoomed: boolean;
  currentPhotoIdxZoomed: number | null;
  setIsPhotoZoomed: (isPhotoZoomed: boolean) => void;
  setCurrentPhotoIdxZoomed: (currentPhotoIdxZoomed: number | null) => void;
}

export const PhotoGalleryContext = createContext<PhotoGalleryContextData>(
  {} as PhotoGalleryContextData
);

export function PhotoGalleryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPhotoZoomed, setIsPhotoZoomed] = useState<boolean>(false);
  const [currentPhotoIdxZoomed, setCurrentPhotoIdxZoomed] = useState<
    number | null
  >(null);

  return (
    <PhotoGalleryContext.Provider
      value={{
        isPhotoZoomed,
        currentPhotoIdxZoomed,
        setIsPhotoZoomed,
        setCurrentPhotoIdxZoomed,
      }}
    >
      {children}
    </PhotoGalleryContext.Provider>
  );
}
