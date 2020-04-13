import variants from './variants'

export const theme = {
  colors: {
    background: '#EEEEEE',
    overlay: 'rgba(242, 242, 242, 0.7)',
    overlay_border: 'rgba(67, 67, 67, 0.1)',
    shadows: {
      navbar: 'rgba(171, 171, 171, 0.85)',
    },
    modes: {
      dark: {
        background: '#1D1D1D',
        overlay: 'rgba(37, 37, 37, 0.7)',
        overlay_border: 'rgba(55, 55, 55, 0.4)',
        shadows: {
          navbar: 'rgba(5, 5, 5, 0.85)',
        },
      },
    },
  },
  ...variants,
  styles: {
    root: {
      bg: 'background',
    },
  },
}
