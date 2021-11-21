import type { NextPage } from "next";
import { Box } from "@mui/system";
import { useState } from "react";
import { Button } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { GoogleFormModal } from "components/GoogleFormModal/GoogleFormModal";
import { useHandleDisplay } from "hooks/useHandler";
import { HomeLayout } from "Layout";
import { CursorCircle } from "components/CursorCircle/CursorCircle";

export const App: NextPage = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const handleDisplay = useHandleDisplay(setIsShowForm);

  return (
    <HomeLayout>
      <Box sx={{ maxHeight: "100vh", px: 10, pt: 15, pb: 4, alignItems: "center" }}>
        <CursorCircle />
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
    </HomeLayout>
  );
};

export default App;
