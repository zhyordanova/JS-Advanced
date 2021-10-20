function solve(httpObj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegex = /(^[\w.]+$)/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageRegex = /([<>\\&'"])/;

    if (!httpObj.method || !validMethods.includes(httpObj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!httpObj.uri || !uriRegex.test(httpObj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!httpObj.version || !validVersions.includes(httpObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (httpObj.message === undefined || messageRegex.test(httpObj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObj
}


console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
))