import { Layout, theme } from "antd";

import MainContent from "./components/MainContent";
import NavigationBar from "./components/NavigationBar";

function App() {
  const { token } = theme.useToken(); //H2
  return (
    //h1
    <Layout>
      <NavigationBar />
      <Layout.Content
        style={{
          backgroundColor: token.colorBgContainer,
          paddingTop: 32,
          marginTop: 70,
          zIndex: 10,
        }}
      >
        <MainContent />
      </Layout.Content>
    </Layout>
  );
}

export default App;
