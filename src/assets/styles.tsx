import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0
    },
    body: {
      fontFamily: `'Open Sans', sans-serif`,
      color: '#2b2b2b',
      fontSize: '13px'
    },
    h1: {
      color: '#2b2b2b',
      fontSize: '30px',
      fontWeight: '400',
      lineHeight: '24px'
    },
    a: {
      color: '#ff8700',
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '30px',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline'
      }
    },
    button: {
      background: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      padding: '0 10px',
      fontFamily: `'Open Sans', serif`,
      backgroundColor: '#ff8700',
      borderRadius: '2px',
      minWidth: '119px',
      minHeight: '40px',
      color: '#2b2b2b',
      fontSize: '13px',
      fontWeight: 'normal',
      lineHeight: '30px',
      border: 'none',
      transition: 'opacity 0.4s',
      display: 'inline-block',
      textAlign: 'center',

      '&:hover': {
        opacity: 0.85,
        textDecoration: 'none'
      },

      '&:disabled': {
        backgroundColor: '#eee'
      }
    }
  },
  buttonResetPassword: {
    margin: '25px auto'
  },
  form: {
    maxWidth: '779px',
    maxHeight: '779px',
    minWidth: '779px',
    minHeight: '779px',
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left'
  },
  container: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@global': {
      a: {
        padding: '0 10px'
      }
    }
  },
  wrapRegister: {
    marginTop: '66px'
  },
  logo: {
    width: '100%',
    marginBottom: '10px'
  },
  title: {
    margin: '0 10px 45px',
    lineHeight: '30px'
  },
  bottomToolbar: {
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  input: {
    border: 'none',
    color: '#2b2b2b',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '36px',
    backgroundColor: 'transparent',
    outline: 'none',
    borderBottom: '2px solid #b7b7b7',
    transition: 'border-color 0.4s',
    height: '34px',
    maxWidth: '316px',
    width: 'calc(100% - 20px)',
    margin: '0 auto 15px'
  },
  inputValid: {
    borderBottomColor: '#28a745'
  },
  inputError: {
    borderBottomColor: '#dc3545',
    color: '#dc3545'
  }
})

export default useStyles
