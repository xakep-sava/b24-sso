import * as React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import SVG from 'react-inlinesvg'
import ReactTooltip from 'react-tooltip'
import jwt from 'jsonwebtoken'

import { IProps, IState } from '../../interfaces'
import API from '../../helpers/API'
import styles from '../../assets/styles'

import logo from '../../assets/images/logo.svg'

export default class Login extends React.PureComponent<IProps, IState> {
  public static defaultProps = {
    schema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      password: Yup.string()
        .min(5, 'Too short - should be 5 chars minimum!')
        .required('Required')
    }),
    fields: [{ name: 'email', type: 'email' }, { name: 'password' }]
  }

  public render() {
    const { schema, fields } = this.props
    return (
      <div style={styles.container}>
        <Formik
          initialValues={{ email: 'admin@b24online.com', password: 'admin' }}
          validationSchema={schema}
          onSubmit={this.onSubmit}
        >
          {({ errors, touched }) => (
            <Form style={styles.form}>
              <div style={styles.wrap}>
                <SVG src={logo} style={styles.logo} />
                <h1 style={styles.title}>Sign In with your account</h1>

                {fields?.map((field, i) => (
                  <Field
                    key={i}
                    data-tip={errors[field.name] ?? ''}
                    name={field.name}
                    type={field.type || 'text'}
                    title={field.title || field.name}
                    id={field.id || field.name}
                    placeholder={field.placeholder || field.name}
                    autoComplete={field.autoComplete || 'on'}
                    autoFocus={field.autoFocus || i === 0}
                    className={['input_', touched[field.name] ? (errors[field.name] ? 'error' : 'valid') : ''].join('')}
                  />
                ))}
                <div>
                  <button style={styles.button} type="submit">
                    Sign in
                  </button>
                  <a href="/forgot">Forgot password?</a>
                </div>

                <p>
                  Don’t have an account? <a href="/register">Register now!</a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
        <ReactTooltip type="error" effect="solid" place="right" />
      </div>
    )
  }

  onSubmit = (values: object) => {
    const { onLoad, jwtKey } = this.props

    API.post(
      'auth/jwt/create/',
      values,
      (data: any) => {
        if (data.access) {
          jwt.verify(data.access, jwtKey, (error: object, user: object) => {
            if (onLoad) {
              onLoad(data, user, error)
            }
          })
        }
      },
      () => {}
    )
  }
}
