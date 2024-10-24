import { Router } from 'express'
import protect from '../middleware/protect.js'
import { createTodo, renderUserTodos } from '../controllers/todo.controller.js'

const router = Router()

router.get('/', protect, renderUserTodos)
router.post('/', protect, createTodo)
router.get('/new', (_req, res) => {
  res.render('todos/new')
})

export default router
