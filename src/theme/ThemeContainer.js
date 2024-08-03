import React from 'react'
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react';
import theme  from '../styles/theme'

const ThemeContainer = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <ThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </ThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}

export default ThemeContainer
