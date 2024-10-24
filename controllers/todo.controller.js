import { db } from '../db/config.js'

export const renderUserTodos = async (req, res) => {
  const todos = await db('todos').where({ user_id: req.user.id })
  res.render('todos/list', { todos })
}

export const createTodo = async (req, res) => {
  const { description } = req.body
  await db('todos').insert({ user_id: req.user.id, description })
  res.redirect('/todos')
}
