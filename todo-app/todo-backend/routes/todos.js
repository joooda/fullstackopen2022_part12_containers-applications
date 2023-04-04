const express = require('express')
const { Todo } = require('../mongo')
const router = express.Router()
const { getAsync, setAsync } = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({ $query: {}, $maxTimeMS: 20000 })
  res.send(todos)
})

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  })

  const counter = Number(await getAsync('added_todos')) ?? 0
  await setAsync('added_todos', counter + 1)

  res.send(todo)
})

/* added_todos counter */
router.get('/statistics', async (_, res) => {
  const counter = Number(await getAsync('added_todos')) ?? 0
  res.send({
    added_todos: counter,
  })
})

const singleRouter = express.Router()

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
})

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo)
})

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const todo = { text: req.body.text, done: req.body.done }

  const updatedTodo = await Todo.findByIdAndUpdate(req.todo.id, todo, {
    new: true,
  })

  res.send(updatedTodo)
})

router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router
