import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Flex, Space, Typography, theme } from "antd";

interface ActionButtonProps {
  title: string;
  url?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title }) => {
  const [hoverTitle, setHoverTitle] = useState(false);

  return (
    <Typography.Text
      strong
      onMouseEnter={() => setHoverTitle(true)}
      onMouseLeave={() => setHoverTitle(false)}
      style={{
        color: hoverTitle ? "#6ac3df" : "white",
        display: "block",
        whiteSpace: "nowrap",
        paddingLeft: 16,
        cursor: "pointer",
      }}
    >
      {title}
    </Typography.Text>
  );
};

interface CLVMenuProps {
  title: string;
  menu: Array<{ title: string; url?: string }>;
}

const CLVMenu: React.FC<CLVMenuProps> = ({ title, menu }) => {
  const { token } = theme.useToken();
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [hoverTitle, setHoverTitle] = useState(false);
  const [hoverOverview, setHoverOverview] = useState(false);

  return (
    <>
      <Flex style={{ position: "relative" }}>
        <Space
          style={{
            cursor: "pointer",
            width: "100%",
            justifyContent: "space-between",
            zIndex: 99,
          }}
          onMouseEnter={() => {
            setOpenSubmenu(true);
            setHoverTitle(true);
          }}
          onMouseLeave={() => {
            setOpenSubmenu(false);
            setHoverTitle(false);
          }}
        >
          <Typography.Text
            style={{
              color: hoverTitle ? "#6ac3df" : "white",
              whiteSpace: "nowrap",
            }}
            className="font-bold text-lg md:text-sm lg:text-lg"
          >
            {title}
          </Typography.Text>
          <DownOutlined
            style={{
              color: hoverTitle ? "#6ac3df" : "white",
              fontSize: 10,
            }}
            className="text-lg md:text-sm lg:text-lg"
          />
        </Space>
        <Flex
          onMouseEnter={() => setOpenSubmenu(true)}
          onMouseLeave={() => setOpenSubmenu(false)}
          className="onAppearMenu"
          style={{
            position: "absolute",
            marginTop: 24,
            left: 0,
            paddingTop: 16,
            border: "1px solid white",
            padding: 16,
            zIndex: 100,
            display: openSubmenu ? "flex" : "none",
            backgroundColor: token.colorPrimary,
          }}
        >
          <Space direction="vertical">
            <Typography.Text
              onMouseEnter={() => setHoverOverview(true)}
              onMouseLeave={() => setHoverOverview(false)}
              strong
              underline
              style={{
                color: hoverOverview ? "#6ac3df" : "white",
                display: "block",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              Overview
            </Typography.Text>
            {menu.map((x) => (
              <ActionButton title={x.title} key={x.title} />
            ))}
          </Space>
        </Flex>
      </Flex>
      {openSubmenu && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 90,
            position: "fixed",
            top: 0,
            left: 0,
          }}
          onClick={() => setOpenSubmenu(false)}
        />
      )}
    </>
  );
};

export default CLVMenu;
