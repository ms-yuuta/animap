import React, { FC } from "react";
import { ListSubheader } from "@mui/material";

type ListProps = {
  title: string;
  children: any;
};

export const ListTable: FC<ListProps> = ({ title, children }) => {
  return (
    <>
      <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
        {title}
      </ListSubheader>
      {children.length !== 0 ? children : <h3>検索結果なし</h3>}
    </>
  );
};
