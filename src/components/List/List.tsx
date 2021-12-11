import React, { FC } from "react";
import { ListSubheader } from "@mui/material";

type ListProps = {
  title: string;
  children: any;
};

export const ListComponent: FC<ListProps> = (props) => {
  return (
    <>
      <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
        {props.title}
      </ListSubheader>
      {props.children.length !== 0 ? props.children : <h3>検索結果なし</h3>}
    </>
  );
};
