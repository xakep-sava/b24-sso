import * as React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'
import 'normalize.css'
import { useTranslation } from 'react-i18next'

import API from '../../helpers/API'
import RenderInputs from '../../components/RenderInputs'
import Header from '../../components/Header'
import { IProps } from '../../interfaces'

import useStyles from '../../assets/styles'

const Login = (props: IProps) => {
  const { schema, fields } = props
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={values => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <div className={classes.wrap}>
              <Header title="Sign In with your account"/>
              <RenderInputs errors={errors} touched={touched} fields={fields}/>

              <div className={classes.bottomToolbar}>
                <button type="submit">{t('Sign in')}</button>
                <a href="/forgot">{t('Forgot password?')}</a>
              </div>

              <p>
                {t('Don’t have an account?')} <a href="/register">{t('Register now!')}</a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
      <ReactTooltip type="error" effect="solid" place="right"/>
    </div>
  )
}

const onSubmit = (values: object) => {
  API.post('user', values,
    (response: any) => {
      if (response.access) {
        // if (onLoad) {
        //   onLoad(response, user, error)
        // }
      }
    },
    null
  )
}

Login.propTypes = {
  jwtKey: PropTypes.string.isRequired,
  schema: PropTypes.object,
  fields: PropTypes.array
}

Login.defaultProps = {
  schema: Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'Too short - should be 5 chars minimum!').required('Required')
  }),
  fields: [
    { name: 'email', type: 'email', title: 'Email', placeholder: 'Email', autoComplete: 'on' },
    { name: 'password', type: 'password', title: 'Password', placeholder: 'Password' }
  ]
}

export default Login
