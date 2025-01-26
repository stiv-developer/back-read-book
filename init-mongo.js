db = db.getSiblingDB('admin');
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [{ role: "root", db: "admin" }]
});

db = db.getSiblingDB('NOC');
db.createUser({
  user: "stiv",
  pwd: "123456",
  roles: [{ role: "readWrite", db: "NOC" }]
});