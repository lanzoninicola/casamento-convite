import { useContextSelector } from "use-context-selector";
import { PhotoGalleryContext } from "..";

export default function useIsPhotoZoomed() {
  const isPhotoZoomed = useContextSelector(
    PhotoGalleryContext,
    (ctx) => ctx.isPhotoZoomed
  );

  const setIsPhotoZoomed = useContextSelector(
    PhotoGalleryContext,
    (ctx) => ctx.setIsPhotoZoomed
  );
  return {
    isPhotoZoomed,
    setIsPhotoZoomed,
  };
}
