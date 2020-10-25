// GET helper using the FETCH api (polyfilled by nextjs)
export const fetcher = (url, options = {}) =>
    fetch(url, options).then((res) => res.json())
// POST helper using the FETCH api
export const post = (url, payload = {}) =>
    fetch(url, { method: 'POST', body: JSON.stringify(payload) }).then((res) =>
        res.json()
    )
