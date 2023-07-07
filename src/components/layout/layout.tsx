import * as React from "react"
import { Slice } from "gatsby"
import { space, sizes } from "./theme"
import styled from "styled-components"

interface LayoutProps {
  children?: React.ReactNode
}

const Main = styled.main`
  width:100%;
  max-width: ${sizes.container};
  padding: ${space[3]};
  box-sizing: border-box;
  flex-grow: 1;
`

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageLayout>
      <Slice alias="header" />
      <Main>{children}</Main>
      <Slice alias="footer" />
    </PageLayout>
  )
}

export default Layout
