import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    secondary: {
      main: 'rgb(0, 0, 0)'
    }
  },
  typography: {
    fontFamily: 'Newsreader',
    button: {
      border: 'solid 2px',
      fontFamily: 'Arial',
      fontWeight: 600,
      fontSize: 20,
      textTransform: 'none',
      borderRadius: 0,
      background: 'white'
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  transitions: {
    create: () => 'none'
  }
})
