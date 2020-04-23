import * as React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'
import cx from 'classnames'
import 'normalize.css'
import { useTranslation } from 'react-i18next'

import API from '../../helpers/API'
import RenderInputs from '../../components/RenderInputs'
import Header from '../../components/Header'
import { IProps } from '../../interfaces'

import useStyles from '../../assets/styles'

const Register = (props: IProps) => {
  const { schema, fields } = props
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', repeatPassword: '' }}
        validationSchema={schema}
        onSubmit={values => onSubmit(values, props)}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <div className={cx(classes.wrap, classes.wrapRegister)}>
              <Header title="Register a new account" />
              <RenderInputs errors={errors} touched={touched} fields={fields} />

              <button className={classes.buttonResetPassword} type="submit">
                {t('Register')}
              </button>
              <p>
                {t('Already have an account?')} <a href="/login">{t('Sign In now!')}</a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
      <ReactTooltip type="error" effect="solid" place="right" />
    </div>
  )
}

const onSubmit = (values: object, props: IProps) => {
  return
}

Register.propTypes = {
  jwtKey: PropTypes.string.isRequired,
  schema: PropTypes.object,
  fields: PropTypes.array
}

Register.defaultProps = {
  schema: Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'Too short - should be 5 chars minimum!').required('Required'),
    repeatPassword: Yup.string()
      .min(5, 'Too short - should be 5 chars minimum!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!')
      .required('Required')
  }),
  fields: [
    { name: 'firstName', title: 'First Name', placeholder: 'First Name', autoComplete: 'on' },
    { name: 'lastName', title: 'Last Name', placeholder: 'Last Name', autoComplete: 'on' },
    { name: 'email', type: 'email', title: 'Email', placeholder: 'Email', autoComplete: 'on' },
    { name: 'password', type: 'password', title: 'Password', placeholder: 'Password' },
    { name: 'repeatPassword', type: 'password', title: 'Repeat Password', placeholder: 'Repeat Password' }
  ]
}

export default Register
