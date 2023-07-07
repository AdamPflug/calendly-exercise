import * as React from "react"
import { Slice } from "gatsby"
import styled from "styled-components"

interface LayoutProps {
  children?: React.ReactNode
}

let Main = styled.main`
  max-width: 1280px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Slice alias="header" />
      <Main>{children}</Main>
      <Slice alias="footer" />
    </>
  )
}

export default Layout
