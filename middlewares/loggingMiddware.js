
const loggingMiddleware = (req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(new Date().toISOString());
    let currentTime = Date.now();
    next();
    let timeToProcess = Date.now() - currentTime;
    console.log(`${timeToProcess}ms`);
}

export default loggingMiddleware;