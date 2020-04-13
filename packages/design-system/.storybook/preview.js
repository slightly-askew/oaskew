import React, { useEffect } from 'react'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { theme } from '../src/components/ThemeProvider'
import { useColorMode, ThemeProvider } from 'theme-ui'
import { useDarkMode } from 'storybook-dark-mode'

import addons from '@storybook/addons'

const channel = addons.getChannel()

function ThemeChanger(props) {
  const [colorMode, setColorMode] = useColorMode()
  const isDarkMode = useDarkMode()

  useEffect(() => {
    setColorMode(isDarkMode ? 'dark' : 'default')
  })
  return <div />
}

function StorybookThemeWrapper(props) {
  return (
    <ThemeProvider theme={theme} {...props}>
      <ThemeChanger />
      {props.children}
    </ThemeProvider>
  )
}

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
addDecorator(storyFn => (
  <StorybookThemeWrapper>{storyFn()}</StorybookThemeWrapper>
))
/* adds a props box under the component in the canvas but it looks really messy. Docs handles it better
addDecorator(
    withInfo({
        styles: {
            header: {
                h1: {
                    marginRight: '20px',
                    fontSize: '25px',
                    display: 'inline',
                },
                body: {
                    paddingTop: 0,
                    paddingBottom: 0,
                },
                h2: {
                    display: 'inline',
                    color: '#999',
                },
            },
            infoBody: {
                backgroundColor: '#eee',
                padding: '0px 5px',
                lineHeight: '2',
            },
        },
        inline: true,
        source: false,
    })
)
*/
