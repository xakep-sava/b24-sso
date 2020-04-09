import * as React from 'react'
// import { Route, BrowserRouter as Router } from 'react-router-dom'

import { IProps, IState, IFetchError } from '../interfaces'
import Forgot from '../pages/forgot'
import Register from '../pages/register'
import Reset from '../pages/reset'
import Login from "../pages/login/login";

// const cacheStore: { [key: string]: IStorageItem } = Object.create(null)

export default class SSO extends React.PureComponent<IProps, IState> {
  public static defaultProps = {
    page: 'login'
  }

  // tslint:disable-next-line:variable-name
  private _isMounted = false

  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  public componentDidMount() {
    this._isMounted = true

    const { onLoad } = this.props

    /* istanbul ignore else */
    if (onLoad) {
      onLoad()
    }
  }

  // public componentDidUpdate(prevProps: IProps, prevState: IState) {
  // const { src } = this.props
  //
  // if (prevProps.src !== src) {
  // }
  // }

  public componentWillUnmount() {
    this._isMounted = false
  }

  private handleError = (error: Error | IFetchError) => {
    const { onError } = this.props

    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      // tslint:disable-next-line:no-console
      console.error(error)
    }

    /* istanbul ignore else */
    if (this._isMounted) {
      /* istanbul ignore else */
      if (onError) {
        onError(error)
      }
    }
  }

  public render() {
    return (123
      // <>
      //   <Route exact path="/login" component={() => <Login />} />
      //   <Route exact path="/register" component={() => <Register />} />
      //   <Route exact path="/forgot" component={() => <Forgot />} />
      //   <Route exact path="/reset" component={() => <Reset />} />
      // </>
    )
  }
}
