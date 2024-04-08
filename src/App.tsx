import { Layout, theme } from "antd";

import MainContent from "./components/MainContent";
import NavigationBar from "./components/NavigationBar";

function App() {
  const { token } = theme.useToken();
  return (
    <Layout>
      <NavigationBar />
      <Layout.Content
        style={{
          backgroundColor: token.colorBgContainer,
          paddingTop: 32,
          marginTop: 70,
          zIndex: 50,
        }}
      >
        <MainContent />
      </Layout.Content>
    </Layout>
  );
}

export default App;
