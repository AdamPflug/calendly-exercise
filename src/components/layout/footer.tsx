import * as React from "react"
import styled from "styled-components"

import { Linkedin } from "react-feather"
import { Link } from "gatsby";

import { colors, space } from "./theme"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: ${space[3]};
  border-top: 1px solid ${colors.primary};
  line-height: 24px;
  vertical-align: middle;
`

const FooterNav = styled.nav`
margin-left: auto;
margin-right: ${space[3]};
  & > * {
    margin-left: ${space[2]};
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <div>© 2022 Gatsby, Inc. All rights reserved.</div>
      <FooterNav>
        <Link to="/">Terms</Link>
        <Link to="/">Privacy</Link>
      </FooterNav>
      <a href="https://www.linkedin.com/in/adampflug/" target="_blank">
        <Linkedin aria-label="LinkedIn" />
      </a>
    </FooterContainer>
  )
}