import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

import API from '../../helpers/API'
import { IActivationProps } from '../../interfaces'

const Activation = (props: IActivationProps) => {
  const { match } = props

  // TODO: редирект через 5 сек и уведомление что все ок или истекло
  // TODO: если истекло, то переактивировать

  useEffect(() => {
    API.post('/auth/users/activation/',
      { uid: match.params.uid, token: match.params.token },
      (response: any) => {
        console.log(response)

        if (response.success) {
          console.log(response)
        }
      }, null)
  })

  return null
}

Activation.propTypes = {
  match: PropTypes.object.isRequired
}

Activation.defaultProps = {
  match: {}
}

export default Activation
