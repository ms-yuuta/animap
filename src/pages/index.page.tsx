import type { NextPage } from "next";
import { Box } from "@mui/system";
import { useState } from "react";
import { Button } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { GoogleFormModal } from "components/GoogleFormModal/GoogleFormModal";
import { useHandleDisplay } from "hooks/useHandleDisplay";
import { Layout } from "Layout";
import Link from "next/link";
import Image from "next/image";

const boxStyle = {
  position: "relative",
  maxWidth: "1000px",
  mx: "auto",
  ":hover": { cursor: "pointer", opacity: 0.8 },
};

export const App: NextPage = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const handleDisplay = useHandleDisplay(setIsShowForm);

  return (
    <Layout>
      <Box sx={{ maxHeight: "100vh", px: 10, pt: 15, pb: 4, alignItems: "center" }}>
        <Link href="/map" passHref>
          <Box sx={boxStyle}>
            <Image src="/Aincrad.png" width={1000} height={500} alt="Aincrad" objectFit="contain" />
          </Box>
        </Link>
        <Box maxWidth="1000px" mx="auto">
          <section>
            <h1>日本地図は、アニメ聖地と共に進化する。さぁ、完成させよAniMap</h1>
          </section>
          <Button variant="outlined" startIcon={<AddLocationAltIcon />} onClick={handleDisplay}>
            聖地情報提供
          </Button>
        </Box>
        {isShowForm && <GoogleFormModal handleDisplay={handleDisplay} />}
      </Box>
    </Layout>
  );
};

export default App;
