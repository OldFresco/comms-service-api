const messageCleanser = (req, res, next) => {
  req.body.Body = req
    .body
    .Body
    .trim()
    .toLowerCase()
  next()
}

export default messageCleanser
