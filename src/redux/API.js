export function fetchAPI(url, method, token, body,pageNo) {
    const requestHeaders = {
      'Content-type': 'application/json'
    }
    if (token) {
      requestHeaders.authorization = token;
    }
  
    const requestOptions = {
      method,
      headers: requestHeaders
    }
  
    if (body) {
      requestOptions.body = JSON.stringify(body)
    }
  
  
    return fetch(url, requestOptions)
    .then((response) => { return response.json()
    });
  }