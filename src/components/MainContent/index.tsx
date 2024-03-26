import { Col, Flex, Row, Typography, theme } from "antd";

import DescriptionItem from "../DescriptionItem";
import { CSS_ENUM } from "../../consts/cssEnum";

const MainContent = () => {
  const { token } = theme.useToken();
  return (
    <Row justify="center">
      <Col
        xs={{ flex: "100%" }}
        sm={{ flex: "90%" }}
        md={{ flex: "80%" }}
        lg={{ flex: "70%" }}
        style={{ justifyContent: "center" }}
      >
        <Flex vertical>
          <Row justify={"space-between"}>
            <Col
              xs={24}
              md={12}
              style={{
                alignContent: "center",
                padding: 16,
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 550,
                  paddingTop: "56.25%",
                  margin: "auto",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/9d8vhuWvjfE?si=EGIWnu-m8w18g4uT"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
            </Col>
            <Col xs={24} md={12} style={{ padding: 16 }}>
              <Flex vertical style={{ alignContent: "center" }}>
                <Flex vertical>
                  <Typography.Title
                    style={{ margin: 0, color: token.colorPrimary }}
                  >
                    Container
                  </Typography.Title>
                  <Typography.Title
                    style={{ marginTop: 0, color: CSS_ENUM.SECONDARY_COLOR }}
                  >
                    Shipping Bussiness
                  </Typography.Title>
                </Flex>
                <Typography>
                  Ocean shipping is continuing to be a biggest domain in Global
                  Trade and carriers strive to deliver service excellence in the
                  face of dynamic market changes and the demands for better
                  customer service. By providing a robust, web-compliant
                  operating environment and user-friendly interface, contrainer
                  carrierscan readily decentralize their processes across their
                  shipping network while integrating them into a single system
                  for better control and improved operational efficiency.
                </Typography>
              </Flex>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ flex: "100%" }}
              md={{ flex: "50%" }}
              lg={{ flex: "25%" }}
              style={{ padding: 16 }}
            >
              <DescriptionItem title="Easy to use">
                User experience and dashboard interface are flexible and easy to
                navigate.
              </DescriptionItem>
            </Col>
            <Col
              xs={{ flex: "100%" }}
              md={{ flex: "50%" }}
              lg={{ flex: "25%" }}
              style={{ padding: 16 }}
            >
              <DescriptionItem title="Integrate with BI tools">
                User experience and dashboard interface are flexible and easy to
                navigate.
              </DescriptionItem>
            </Col>
            <Col
              xs={{ flex: "100%" }}
              md={{ flex: "50%" }}
              lg={{ flex: "25%" }}
              style={{ padding: 16 }}
            >
              <DescriptionItem title="Yield Management">
                Sophisticated cost and revenue management regime facilitates
                shipping of right cargo for the right price via the optimum
                route for every booking made.
              </DescriptionItem>
            </Col>
            <Col
              xs={{ flex: "100%" }}
              md={{ flex: "50%" }}
              lg={{ flex: "25%" }}
              style={{ padding: 16 }}
            >
              <DescriptionItem title="Exception Management">
                Exceptions like Cargo Rollover, Vessel Port Omissions are
                managed with integrated views which facilitate monitoring &
                recovery from exceptional situations in the supply chain.
              </DescriptionItem>
            </Col>
          </Row>
        </Flex>
      </Col>
    </Row>
  );
};

export default MainContent;
