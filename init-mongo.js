#!/usr/bin/env mongo

use admin
db.createUser({
  user: 'admin',
  pwd: '1234',
  roles: [
    {
      role: 'readWrite',
      db: 'subslify-DB',
    },
  ],
});
