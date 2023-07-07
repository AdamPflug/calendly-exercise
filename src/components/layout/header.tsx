import * as React from "react"
import { Menu, X } from "react-feather"
import { Link } from "gatsby"
import styled from "styled-components"

import BrandLogo from "../brand-logo"

import { colors, space, fontSizes } from "./theme"
import { mobileOnly } from "./breakpoints"

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.background};
  padding: ${space[3]};
  position: relative;
`;

const MobileNavTarget = styled.button`
  display: none;
  margin-left: auto;
  background: transparent;
  border: 0;

  @media ${mobileOnly} {
    display: block;
  }
`;

const MobileNav = styled.nav`
  display: none;
  margin-left: auto;
  background: ${colors.background};
  border: 0;
  position: absolute;
  top: 100%;
  height: calc(100vh - 100%);
  left: 0;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  padding: ${space[3]};
  
  & > * {
    display: block;
    font-size: ${fontSizes[3]};
  }


  @media ${mobileOnly} {
    display: block;
  }
`

export default function Header() {
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <BrandLogo />
        </Link>
      </nav>

      <MobileNavTarget
        title="Toggle menu"
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </MobileNavTarget>
      {isOpen && <MobileNav>
        <Link to="/">Breeds</Link>
      </MobileNav>}
    </HeaderContainer>
  )
}