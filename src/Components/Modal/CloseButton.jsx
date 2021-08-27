import "../../App.css";
import { useCallback } from "react";

export const CloseButton = (props) => {
  const handleDisplay = useCallback(() => {
    props.setIsShow((prevIsShow) => !prevIsShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button onClick={handleDisplay} className="btn">
      close
    </button>
  );
};
