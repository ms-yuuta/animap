import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/system";

export const App: NextPage = (props) => {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        px: 38,
        py: 15,
      }}
    >
      <Box sx={{ height: "60vh", display: "flex" }}>
        <Link href="/map" passHref>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "97%",
              ":hover": { cursor: "pointer", boxShadow: 5 },
            }}
          >
            <Image src="/Aincrad.png" layout="fill" alt="Aincrad" objectFit="contain" />
          </Box>
        </Link>
      </Box>
      <Box height="10vh">
        <section>
          <h1>日本地図は、アニメ聖地と共に進化する。さぁ、完成させよAniMap</h1>
        </section>
      </Box>
    </Box>
  );
};

export default App;
