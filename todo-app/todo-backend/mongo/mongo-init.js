print('START INIT #################################################################');

db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'tododb',
    },
  ],
})

db.createCollection('todos')

db.todos.insert({ text: 'Write code', done: true })
db.todos.insert({ text: 'Learn about containers', done: false })

print('END INIT #################################################################');