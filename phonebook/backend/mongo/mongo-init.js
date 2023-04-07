print('START INIT #################################################################');

db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'phonebook_db',
    },
  ],
})

db.createCollection('persons')

// db.persons.insert({ name: "testi kaveri", number: "123-213-123" })

print('END INIT #################################################################');