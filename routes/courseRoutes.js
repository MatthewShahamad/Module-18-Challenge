const router = require('express').Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteuser,
} = require('../../controllers/courseController.js');

// /api/users
router.route('/').get(getUsers.post(createUsers);

router
  .route('/:courseId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
