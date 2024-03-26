import { Col, Flex, Row, Typography } from "antd";

import FlashCard from "@components/FlashCard";

const MainContent = () => {
  return (
    <>
      <Row justify="center" className="pb-5 mb-5 h-full grow">
        <Col
          xs={{ flex: "100%" }}
          md={{ flex: "95%" }}
          xxl={{ flex: "85%" }}
          className="justify-center"
        >
          <Flex vertical className="h-full">
            <Row justify={"space-between"}>
              <Col xs={24} md={12} className="p-4 content-center flex flex-col">
                <iframe
                  src="https://www.youtube.com/embed/9d8vhuWvjfE?si=EGIWnu-m8w18g4uT&autoplay=1"
                  title="YouTube video player"
                  className="min-h-80 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                      gyroscope; picture-in-picture; web-share"
                />
              </Col>
              <Col xs={24} md={12} className="p-4">
                <Flex vertical className="content-center">
                  <div className="flex flex-col">
                    <h4
                      className="text-3xl md:text-4xl lg:text-5xl text-primary 
                                text-center md:text-start"
                    >
                      Container
                    </h4>
                    <h4
                      className="text-3xl md:text-4xl lg:text-5xl text-secondary
                                text-center md:text-start mb-4 lg:mb-8"
                    >
                      Shipping Bussiness
                    </h4>
                  </div>
                  <Typography>
                    Ocean shipping is continuing to be a biggest domain in
                    Global Trade and carriers strive to deliver service
                    excellence in the face of dynamic market changes and the
                    demands for better customer service. By providing a robust,
                    web-compliant operating environment and user-friendly
                    interface, contrainer carrierscan readily decentralize their
                    processes across their shipping network while integrating
                    them into a single system for better control and improved
                    operational efficiency.
                  </Typography>
                </Flex>
              </Col>
            </Row>
            <Row className="grow">
              <Col
                xs={{ flex: "100%" }}
                md={{ flex: "50%" }}
                xl={{ flex: "25%" }}
                className="p-4"
              >
                <FlashCard title="Easy to use">
                  User experience and dashboard interface are flexible and easy
                  to navigate.
                </FlashCard>
              </Col>
              <Col
                xs={{ flex: "100%" }}
                md={{ flex: "50%" }}
                xl={{ flex: "25%" }}
                className="p-4"
              >
                <FlashCard title="Integrate with BI tools">
                  User experience and dashboard interface are flexible and easy
                  to navigate.
                </FlashCard>
              </Col>
              <Col
                xs={{ flex: "100%" }}
                md={{ flex: "50%" }}
                xl={{ flex: "25%" }}
                className="p-4"
              >
                <FlashCard title="Yield Management">
                  Sophisticated cost and revenue management regime facilitates
                  shipping of right cargo for the right price via the optimum
                  route for every booking made.
                </FlashCard>
              </Col>
              <Col
                xs={{ flex: "100%" }}
                md={{ flex: "50%" }}
                xl={{ flex: "25%" }}
                className="p-4"
              >
                <FlashCard title="Exception Management">
                  Exceptions like Cargo Rollover, Vessel Port Omissions are
                  managed with integrated views which facilitate monitoring &
                  recovery from exceptional situations in the supply chain.
                </FlashCard>
              </Col>
            </Row>
          </Flex>
        </Col>
      </Row>
      <Row justify="center" className="pb-5 mb-5 h-full">
        <Col
          xs={{ flex: "100%" }}
          md={{ flex: "95%" }}
          xxl={{ flex: "85%" }}
          className="justify-center"
        >
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 p-4 mt-2">
            <div className="text-center lg:text-left lg:basis-1/2 flex flex-col">
              <a className="text-lg text-primary hover:text-link-hover">
                Previous Page
              </a>
              <a className="text-3xl text-secondary hover:text-link-hover text-nowrap">
                Quality Assurance
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MainContent;
