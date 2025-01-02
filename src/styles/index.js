import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    background: '#1E002E',
    primary: '#800080',
    secondary: '#00FFFF',
    tertiary: '#FF00FF',
    accent: '#28A745',
    text: '#F5F5F5',
    disabled: '#666666',
    hover: '#00E6E6',
    active: '#00A3A3'
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem'
  },
  borderRadius: '4px',
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  },
  borders: {
    width: '1px',
    style: 'solid',
    color: '#333'
  }
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --border-width: ${({ theme }) => theme.borders.width};
    --border-style: ${({ theme }) => theme.borders.style};
    --border-color: ${({ theme }) => theme.borders.color};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.5;
  }

  button {
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
    transition: all 0.2s ease;
    margin: ${({ theme }) => theme.spacing.small};

    &:hover {
      background: linear-gradient(45deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.tertiary});
    }

    &:active {
      background: linear-gradient(45deg, ${({ theme }) => theme.colors.tertiary}, ${({ theme }) => theme.colors.primary});
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.disabled};
      cursor: not-allowed;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
      margin: ${({ theme }) => theme.spacing.small} 0;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
