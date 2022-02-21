import React from "react";
import { Layout } from "antd";
import { SidePanel } from "components/SidePanel/SidePanel";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const { Sider, Content } = Layout;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      {" "}
      <Sider width={256}>
        <SidePanel />
      </Sider>{" "}
      <Layout>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
