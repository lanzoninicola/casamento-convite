import { useContextSelector } from "use-context-selector";
import { PhotoGalleryContext } from "..";

export default function useCurrentPhotoZoomed() {
  const currentPhotoIdxZoomed = useContextSelector(
    PhotoGalleryContext,
    (ctx) => ctx.currentPhotoIdxZoomed
  );

  const setCurrentPhotoIdxZoomed = useContextSelector(
    PhotoGalleryContext,
    (ctx) => ctx.setCurrentPhotoIdxZoomed
  );
  return {
    currentPhotoIdxZoomed,
    setCurrentPhotoIdxZoomed,
  };
}
