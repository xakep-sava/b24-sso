import { Field } from 'formik'
import cx from 'classnames'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import useStyles from '../assets/styles'

const RenderInputs = (props: any) => {
  const { fields, touched, errors } = props
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      {fields?.map((field: any, i: number) => (
        <Field
          key={i}
          data-tip={t(errors[field?.name] ?? '')}
          name={field?.name}
          type={field?.type || 'text'}
          title={t(field?.title || field?.name)}
          id={field?.id || field?.name}
          placeholder={t(field?.placeholder || field.name)}
          autoComplete={field?.autoComplete || 'on'}
          autoFocus={field?.autoFocus || i === 0}
          className={cx(
            classes.input,
            touched[field?.name] ? (errors[field?.name] ? classes.inputValid : classes.inputError) : ''
          )}
        />
      ))}
    </>
  )
}

RenderInputs.propTypes = {
  fields: PropTypes.array.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object
}

RenderInputs.defaultProps = {
  fields: [],
  errors: {},
  touched: {}
}

export default RenderInputs
