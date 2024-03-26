import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Space, Typography, theme } from "antd";

import Logo from "@assets/CLTLogo.png";
import useScreenSize from "@hooks/useScreenSize";
import { BreakPointEnum } from "@consts/breakPoint";
import ServicesMenu from "@components/Submenus/Services";
import SolutionsMenu from "@components/Submenus/Solutions";
import CareersMenu from "@components/Submenus/CareersMenu";
import DefaultButton from "@components/Buttons/DefaultButton";
import SecondaryButton from "@components/Buttons/SecondaryButton";

const NavigationBar = () => {
  const { token } = theme.useToken();
  const { width } = useScreenSize();
  const [isSideBarMenu, setIsSideBarMenu] = useState(false);
  const [activeSideBarMenu, setActiveSideBarMenu] = useState(false);

  useEffect(() => {
    if (width <= BreakPointEnum.md) {
      setIsSideBarMenu(true);
    } else {
      setIsSideBarMenu(false);
      setActiveSideBarMenu(false);
    }
  }, [width]);

  return (
    <Row
      style={{
        width: "100%",
        backgroundColor: token.colorPrimary,
        justifyContent: "center",
        position: "fixed",
        top: 0,
        height: 70,
        zIndex: 1000,
        fontWeight: 700,
      }}
    >
      <Col
        xs={{ flex: "100%" }}
        className="px-4 sm:px-10 md:px-20 lg:px-20"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Flex
          style={{
            padding: 8,
            alignItems: "center",
            width: "100%",
            justifyContent: isSideBarMenu ? "start" : "center",
          }}
          wrap="wrap"
        >
          <div
            style={{ flexGrow: isSideBarMenu ? 1 : 0 }}
            className="flex justify-start min-[769px]:justify-center w-20"
          >
            <img src={Logo} height={60} width={60} />
          </div>
          {!isSideBarMenu ? (
            <>
              <Flex
                style={{
                  flexGrow: 1,
                  justifyContent: "center",
                  margin: 8,
                }}
              >
                <Space
                  size="large"
                  wrap
                  style={{ justifyContent: "space-evenly" }}
                >
                  <SolutionsMenu />
                  <ServicesMenu />
                  <CareersMenu />
                  <Typography
                    className="onHoverAbout font-bold text-sm lg:text-lg"
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    About Us
                  </Typography>
                </Space>
              </Flex>
              <DefaultButton
                style={{
                  marginLeft: 8,
                  marginRight: 8,
                }}
              >
                Contact Us
              </DefaultButton>
            </>
          ) : (
            <>
              <Button
                style={{ backgroundColor: "rgba(0,0,0,0)" }}
                type="text"
                size="large"
                className={`onActiveMenu ${
                  activeSideBarMenu ? "onActivatedMenu" : ""
                } `}
                onClick={() => setActiveSideBarMenu((pre) => !pre)}
                icon={
                  <MenuOutlined style={{ color: token.colorBgContainer }} />
                }
              />
            </>
          )}
        </Flex>
      </Col>
      {activeSideBarMenu && (
        <>
          <Flex
            className="onAppearMenu"
            style={{
              flexGrow: 1,
              position: "absolute",
              backgroundColor: token.colorPrimary,
              width: "100%",
              marginTop: 69,
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 32,
              paddingRight: 32,
              zIndex: 80,
            }}
          >
            <Space
              size="large"
              wrap
              style={{ justifyContent: "space-evenly", width: "100%" }}
              direction="vertical"
            >
              <SecondaryButton>Contact Us</SecondaryButton>
              <Typography
                className="onHoverAbout font-bold"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                About Us
              </Typography>
              <SolutionsMenu />
              <ServicesMenu />
              <CareersMenu />
            </Space>
          </Flex>
          <div
            style={{ width: "100vw", height: "100vh", zIndex: 70 }}
            onClick={() => setActiveSideBarMenu(false)}
          />
        </>
      )}
    </Row>
  );
};

export default NavigationBar;
