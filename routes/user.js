const express = require(`express`);
const router = express.Router();
const controller = require(`../controllers/user`);

router.get(`/`, controller.getUsers);
router.get(`/:id`, controller.getUser);

module.exports = router;
