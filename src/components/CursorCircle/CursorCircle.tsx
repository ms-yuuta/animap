import { Box } from "@mui/system";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDisplayLoadingToast, useDisplayMove } from "pages/index.hooks";

const boxStyle = {
  position: "relative",
  maxWidth: "1000px",
  maxHeight: "500px",
  mx: "auto",
  ":hover": { cursor: "pointer", opacity: 0.8 },
};

export const CursorCircle = () => {
  const loadingNotify = useDisplayLoadingToast();
  const moveNotify = useDisplayMove();

  // const circleStyle = {
  //   position: "fixed",
  //   zIndex: "tooltip",
  //   top: "200px",
  //   left: "200px",
  //   bgColor: "primary.main",
  //   width: 100,
  //   height: 100,
  //   display: "inline-block",
  //   border: "1px solid red",
  //   borderRadius: "50%",
  // } as const;

  return (
    <>
      {/* <Box sx={circleStyle}></Box> */}
      <Link href="/map" passHref>
        <a onClick={loadingNotify} onMouseOver={moveNotify}>
          <Box sx={boxStyle}>
            <Image src="/Aincrad.png" width={1000} height={500} alt="Aincrad" objectFit="contain" />
          </Box>
        </a>
      </Link>
    </>
  );
};
