import React from 'react'
import ReactDOM from 'react-dom'
import { themeConfig } from './config'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Pages from './pages'
import './config/i18n'

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={themeConfig}>
      <Pages />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
