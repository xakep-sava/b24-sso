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

const Reset = (props: IProps) => {
  const { schema, fields } = props
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{ password: '', repeatPassword: '' }}
        validationSchema={schema}
        onSubmit={values => onSubmit(values, props)}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <div className={classes.wrap}>
              <Header title="Reset password" />
              <RenderInputs errors={errors} touched={touched} fields={fields} />

              <button className={classes.buttonResetPassword} type="submit">
                {t('Reset Password')}
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

Reset.propTypes = {
  jwtKey: PropTypes.string.isRequired,
  schema: PropTypes.object,
  fields: PropTypes.array
}

Reset.defaultProps = {
  schema: Yup.object().shape({
    password: Yup.string().min(8, 'Too short - should be 8 chars minimum!').required('Required'),
    repeatPassword: Yup.string()
      .min(5, 'Too short - should be 5 chars minimum!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!')
      .required('Required')
  }),
  fields: [
    { name: 'password', type: 'password', title: 'Password', placeholder: 'Password' },
    { name: 'repeatPassword', type: 'password', title: 'Repeat Password', placeholder: 'Repeat Password' }
  ]
}

export default Reset
