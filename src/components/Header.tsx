import * as React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import useStyles from '../assets/styles'
import SVG from 'react-inlinesvg'
import logo from '../assets/images/logo.svg'

const Header = (props: any) => {
  const { title } = props
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <a href="/">
        <SVG className={classes.logo} src={logo} />
      </a>

      <h1 className={classes.title}>{t(title)}</h1>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: ''
}

export default Header
