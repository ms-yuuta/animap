import "../../App.css";
import { useCallback } from "react";

type Props = {
  setIsShow: any;
}

export const CloseButton: React.VFC<Props> = (props) => {
  const handleDisplay = useCallback(() => {
    props.setIsShow((prevIsShow: boolean): boolean => !prevIsShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button onClick={handleDisplay} className="btn">
      close
    </button>
  );
};
