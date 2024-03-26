import { Layout, theme } from "antd";

import MainContent from "@components/MainContent";
import NavigationBar from "@components/NavigationBar";
import Footer from "@components/Footer";

function App() {
  const { token } = theme.useToken();
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <Layout.Content
        className="grow flex flex-col h-full p-0 md:pt-8"
        style={{
          backgroundColor: token.colorBgContainer,
          marginTop: 70,
          zIndex: 10,
        }}
      >
        <MainContent />
      </Layout.Content>
      <Footer />
    </div>
  );
}

export default App;
