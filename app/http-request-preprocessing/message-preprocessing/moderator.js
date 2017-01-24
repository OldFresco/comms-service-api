const hasBody = (message) => {
  message != ''
}

const messageModerator = (req, res, next) => {

  if (!hasBody(req.Body.body))
    throw new Error()

  next()
}

export default messageModerator
