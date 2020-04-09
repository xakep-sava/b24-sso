import React from "react";

export default {
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
    textAlign: 'left',
  } as React.CSSProperties,
  container: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  } as React.CSSProperties,
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  } as React.CSSProperties,
  logo: {
    width: '100%'
  } as React.CSSProperties,
  title: {
    margin: '0 10px 45px',
    lineHeight: '30px'
  } as React.CSSProperties,
  button: {
    background: 'transparent',
    outline: 'none',
    cursor: 'pointer',
    padding: '0 10px',
    fontFamily: '"Open Sans", serif',
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

    ':hover': {
      backgroundColor: 'blue !important',
      opacity: 0.85,
      textDecoration: 'none'
    },

    ':disabled': {
      backgroundColor: '#eee'
    }
  } as React.CSSProperties
}
