import { useCallback, useEffect } from "react";

export const useHandleDisplay = (setIsShow: React.Dispatch<React.SetStateAction<boolean>>) => {
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow: boolean) => !prevIsShow);
  }, [setIsShow]);
  return handleDisplay;
};

export const useHandleKeyDown = (setIsShow: React.Dispatch<React.SetStateAction<boolean>>) => {
  const handleDisplay = useHandleDisplay(setIsShow);
  const handleKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === "k" && (ev.ctrlKey || ev.metaKey)) {
        handleDisplay();
      }
    },
    [handleDisplay]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
};
