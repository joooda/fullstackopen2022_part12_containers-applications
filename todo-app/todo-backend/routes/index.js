const express = require('express')
const router = express.Router()

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits,
  })
})

/* added_todos counter */
router.get('/statistics', async (_, res) => {
  const counter = Number(await redis.getAsync('added_todos')) ?? 0
  res.send({
    added_todos: counter,
  })
})

module.exports = router
