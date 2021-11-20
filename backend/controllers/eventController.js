const Event = require("../models/eventModel.js");

exports.eventList = async (req, res) => {
  let sort = {};
  let query = {};
  const {
    sortby = "createdAt",
    sortdirection = "desc",
    pagenumber = 1,
    pagesize = 30,
    repetitiontype,
    searchterm,
  } = req.query;

  try {
    searchterm && (query.name = { $regex: searchterm, $options: "i" });
    repetitiontype && (query.repetitionType = repetitiontype);
    sort[String(sortby)] = sortdirection;

    const events = await Event.find(query)
      .sort(sort)
      .limit(Number(pagesize))
      .skip(pagesize * (pagenumber - 1));

    const totalEventsCount = await Event.countDocuments(query);

    return res.status(200).json({
      events,
      totalEventsCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "There is an error while getting events" });
  }
};

exports.addEvent = async (req, res) => {
  try {
    req.body.isDraft = false;

    let event = await new Event(req.body).save();

    if (event) {
      res.status(200).json({ message: "Event Added" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: "Error Creating event." });
  }
};

exports.getSingleEvent = async (req, res) => {
  try {
    res.status(200).json(await Event.findById(req.params.id));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error while fetching event." });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    res.status(200).json(await Event.updateOne({ _id: req.params.id }, req.body));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error while updating event." });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    res.status(200).json(await Event.deleteOne({ _id: req.params.id }));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error while deleting event." });
  }
};

exports.monthlyEventList = async (req, res) => {};
