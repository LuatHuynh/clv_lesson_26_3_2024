import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Space, Typography, theme } from "antd";

import CareersMenu from "../Submenus/CareersMenu";
import ServicesMenu from "../Submenus/ServicesMenu";
import DefaultButton from "../Buttons/DefaultButton";
import SolutionsMenu from "../Submenus/SolutionsMenu";
import useScreenSize from "../../hooks/useScreenSize";
import SecondaryButton from "../Buttons/SecondaryButton";
import { BreakPointEnum } from "../../consts/breakPoint";
import Logo from "@assets/CLVLogo.webp";

const NavigationBar = () => {
  const { token } = theme.useToken();
  const { width } = useScreenSize();
  const [isSideBarMenu, setIsSideBarMenu] = useState(false);
  const [activeSideBarMenu, setActiveSideBarMenu] = useState(false);

  useEffect(() => {
    if (width <= BreakPointEnum.MOBILE) {
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
        height: 70,
        zIndex: 10000,
        fontWeight: 700,
      }}
    >
      <Col
        xs={{ flex: "95%" }}
        sm={{ flex: "90%" }}
        style={{
          position: "relative",
        }}
      >
        <Flex
          style={{
            padding: 8,
            height: "100%",
            alignItems: "center",
            justifyContent: isSideBarMenu ? "start" : "center",
          }}
          wrap="wrap"
        >
          <div style={{ flexGrow: isSideBarMenu ? 1 : 0 }}>
            <img src={Logo} />
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
                    className="onHoverAbout"
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
        <Flex
          className="onAppearMenu"
          style={{
            flexGrow: 1,
            margin: 8,
            position: "absolute",
            backgroundColor: token.colorPrimary,
            width: "100%",
            marginTop: 70,
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 32,
            paddingRight: 32,
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
              className="onHoverAbout"
              style={{
                whiteSpace: "nowrap",
              }}
            >
              About Us
            </Typography>
            <SolutionsMenu mobile={isSideBarMenu} />
            <ServicesMenu mobile={isSideBarMenu} />
            <CareersMenu mobile={isSideBarMenu} />
          </Space>
        </Flex>
      )}
    </Row>
  );
};

export default NavigationBar;
