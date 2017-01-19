const messageModerator = (req, res, next) => {
    req.body.Body = req
        .body
        .Body
        .trim();
    next()
}

export default messageModerator;