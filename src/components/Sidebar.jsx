import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.aside`
  width: 250px;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
  border-right: var(--border-width) var(--border-style) var(--border-color);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    z-index: 100;
    border-right: none;
    border-top: var(--border-width) var(--border-style) var(--border-color);
  }
`

const SidebarTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.primary};
`

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle>Folders</SidebarTitle>
      {/* Folder list will go here */}
    </SidebarContainer>
  )
}

export default Sidebar
