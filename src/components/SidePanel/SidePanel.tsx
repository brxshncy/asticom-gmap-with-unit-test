import React, { useState } from "react";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useGmapContext } from "components/context/GoogleMapMarkerContextProvider";

export const SidePanel: React.FC = () => {
  let { selectedGmapState, dispatch } = useGmapContext();

  return (
    <div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {selectedGmapState.sampleGmapdata.map((item, key) => {
          return (
            <Menu.Item
              key={key}
              onClick={() =>
                dispatch({
                  type: "SET_SELECTED_GMAP",
                  payload: item,
                })
              }
              icon={<HomeOutlined />}
            >
              {item.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};
