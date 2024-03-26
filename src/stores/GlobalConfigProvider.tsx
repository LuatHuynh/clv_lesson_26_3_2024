import { ConfigProvider } from "antd";

import { CSS_ENUM } from "../consts/cssEnum";

const GlobalConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: CSS_ENUM.PRIMARY_COLOR,
          fontSize: 16,
        },
        components: {
          Button: {
            controlHeight: 36,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default GlobalConfigProvider;
