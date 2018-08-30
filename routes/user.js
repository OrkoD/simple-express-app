const express = require(`express`);
const router = express.Router();
const controller = require(`../controllers/user`);

router.post(`/update/:id`, controller.updateUser);
router.post(`/delete/:id`, controller.deleteUser);
router.post(`/add`, controller.addUser);
router.get(`/edit/:id`, controller.renderEditForm);
router.get(`/add`, controller.renderNewForm);
router.get(`/`, controller.getUsers);
router.get(`/:id`, controller.getUser);

module.exports = router;
