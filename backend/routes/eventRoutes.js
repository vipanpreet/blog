var express = require("express");
var router = express.Router();

const auth = require("../middleware/auth");
const {
  eventList,
  addEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
  monthlyEventList,
} = require("../controllers/eventController.js");

router.route("/").get(eventList).post(auth, addEvent);
router.route("/single/:id").get(getSingleEvent).post(auth, updateEvent).delete(auth, deleteEvent);

router.route("/monthly").get(auth, monthlyEventList);

module.exports = router;
