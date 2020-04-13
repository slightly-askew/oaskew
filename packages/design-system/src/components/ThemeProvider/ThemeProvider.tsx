import React, { FC, ReactNode } from 'react'
import { ThemeProvider as TuiProvider } from 'theme-ui'
import theme from '../../theme'

export const ThemeProvider: FC<{ children?: ReactNode }> = props => (
  <TuiProvider theme={theme}>{props.children}</TuiProvider>
)

export { theme }
