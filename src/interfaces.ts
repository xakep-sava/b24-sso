import { VerifyErrors } from 'jsonwebtoken'

export interface IProps {
  jwtKey: string
  onError?: (error: Error | IFetchError) => void
  onLoad?: (data: object, message: object | undefined, error: VerifyErrors | null) => void
  schema?: object
  fields?: Array<IField>
}

export interface IFetchError extends Error {
  code: string
  errno: string
  message: string
  type: string
}

export interface IField {
  name: string
  type?: string
  title?: string
  id?: string
  placeholder?: string
  autoComplete?: string
  autoFocus?: boolean
}
