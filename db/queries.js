const db = require("./index.js");

// GET all users
const getUsers = (req, res, next) => {
  db.query("SELECT * FROM users ORDER BY id ASC", [], (err, results) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(results.rows);
  });
};

// GET all users using async/await
const getUsersAsync = async (req, res, next) => {
  try {
    const { rows } = await db.queryAsync(
      "SELECT * FROM users ORDER BY id ASC",
      []
    );
    res.status(200).json(rows);
  } catch (err) {
    return next(err);
  }
};

// GET a single user by ID
const getUserById = (req, res, next) => {
  const id = parseInt(req.params.id);

  db.query("SELECT * FROM users WHERE id = $1", [id], (err, results) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(results.rows);
  });
};

// GET a single user by ID using async/await
const getUserByIdAsync = async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const { rows } = await db.queryAsync("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    res.status(200).json(rows);
  } catch (err) {
    return next(err);
  }
};

// POST a new user
const createUser = (req, res, next) => {
  const { name, email } = req.body;

  db.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

// POST a new user using async/await
const createUserAsync = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const { rows } = await db.queryAsync(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).send(`User added with ID: ${rows[0].id}`);
  } catch (err) {
    return next(err);
  }
};

// PUT update data in an existing user
const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  db.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [name, email, id],
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(`User modified with ID: ${results.rows[0].id}`);
    }
  );
};

// PUT update data in an existing user using async/await
const updateUserAsync = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  try {
    const { rows } = await db.queryAsync(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    res.status(200).send(`User modified with ID: ${id}`);
  } catch (err) {
    return next(err);
  }
};

// DELETE a user
const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);

  db.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id],
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(`User deleted with ID: ${results.rows[0].id}`);
    }
  );
};

// DELETE a user using async/await
const deleteUserAsync = async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const { rows } = await db.queryAsync(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    res.status(200).send(`User deleted with ID: ${rows[0].id}`);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getUsers,
  getUsersAsync,
  getUserById,
  getUserByIdAsync,
  createUser,
  createUserAsync,
  updateUser,
  updateUserAsync,
  deleteUser,
  deleteUserAsync,
};
