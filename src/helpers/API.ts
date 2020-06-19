const API_URL = 'http://localhost:3070/api/v1/'

const get = (url: string, action: string) => {
  fetch(`${API_URL}${action}`).then(response => response.json())
}

const post = (action: string, data: object, successCallback: any, errorCallback: any) => {
  fetch(`${API_URL}${action}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      if (successCallback) {
        successCallback(response)
      }
    })
    .catch(error => {
      if (errorCallback) {
        errorCallback(error)
      }
    })
}

const getHeaders = () => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Charset', 'utf8')

  return headers
}

export default { get, post }
