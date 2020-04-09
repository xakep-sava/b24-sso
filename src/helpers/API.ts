const API_URL = 'http://sso.stage.b24online.com/api/'

const get = (
  url: string,
  action: string,
  beforeSendCallback = () => {},
  successCallback = (data: object) => {},
  errorCallback = (error: object) => {},
  finishCallback = () => {}
) => {
  fetch(`${API_URL}${action}`)
    .then(response => response.json())
    .then(data => {
      // successCallback(response.data)

      // errorCallback(error)
      console.log(data)
    })
    .catch(error => {
      console.log(error)

      // errorCallback(error)
    })

  // finishCallback
}

const post = (
  action: string,
  data: object,
  // beforeSendCallback = () => {},
  successCallback = (data: object) => {},
  errorCallback = (error: object) => {}
  // finishCallback = () => {}
) => {
  fetch(`${API_URL}${action}`, {
    method: 'POST',
    headers: getHeaders(),
    // credentials: 'include',
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (successCallback) {
        successCallback(data)
      }
    })
    .catch(error => {
      if (errorCallback) {
        errorCallback(error)
      }
    })
}

const getHeaders = () => {
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Charset', 'utf8')

  return headers
}

export default { get, post }
