/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC, ReactNode } from 'react'

interface DesktopHeaderProps {
  children?: ReactNode
}

export const DesktopHeader: FC<DesktopHeaderProps> = props => {
  return (
    <nav
      sx={{
        variant: 'layout.navbar_overlay',
        minHeight: '20px',
        position: 'relative',
      }}
    >
      <div
        sx={{
          variant: 'blur',
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      />
      <div
        sx={{
          variant: 'layout.navbar_shadow',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '1px',
        }}
      />
      {props.children}
    </nav>
  )
}
