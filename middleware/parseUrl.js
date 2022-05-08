const handle = (baseUrl) => (req, res) => {
    const urlData = new URL(req.url, baseUrl)
    req.pathname = urlData.pathname;
    const params = {}
    urlData.searchParams.forEach((value, key) => params[key] = value )
    req.params = params;
}

export default handle