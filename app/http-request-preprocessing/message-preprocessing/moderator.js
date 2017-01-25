const hasBody = (message) => {
  message != ''
}

const messageModerator = (req, res, next) => {

  if (!hasBody(req.body.Body))
    //throw new Error()

  next()
}

export default messageModerator
