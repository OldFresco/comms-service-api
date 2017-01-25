import Filter from 'bad-words'

const securityGuard = (req, res, next) => {

  let filter = new Filter()

  req.body.Body = filter.clean(req.body.Body)
  next()
}

export default securityGuard
