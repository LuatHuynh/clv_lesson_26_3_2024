import { ConfigProvider } from "antd";

const GlobalConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#03204c",
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
