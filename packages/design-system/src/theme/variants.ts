export default {
  blur: {
    12: {
      filter: 'blur(12px)',
    },
  },
  layout: {
    navbar_overlay: {
      bg: 'overlay',
      transition: 'color 0.2s',
    },
    navbar_shadow: {
      bg: 'overlay_border',
      boxShadow: (theme: { colors: { shadows: { navbar: any } } }) =>
        `0px 4px 10px ${theme.colors.shadows.navbar}`,
      /*boxShadow: (theme: { colors: { shadows: { navbar: any } } }) =>
        `0px 4px 10px ${theme.colors.shadows.navbar}`,*/
    },
  },
}
