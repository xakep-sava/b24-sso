export interface IProps {
  jwtKey: string
  onError?: (error: Error | IFetchError) => void
  onLoad?: (data: object, message: object, error: object) => void,
  schema?: object,
  fields?: Array<IField>,
}

export interface IState {}

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

// export interface IStorageItem {
//   content: string
//   queue: any[]
//   status: string
// }
