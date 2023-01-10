const express = require("express");
const Teacher_Router = express.Router();
const {
  get_all_teacher,
  create_teacher,
  delete_teacher,
  update_teacher,
} = require("../controller/Teacher_controller");

const {
  create_topic,
  get_all_topic,
  delete_topic,
} = require("../controller/Topic_controller");

// Here is the route of Teacher
Teacher_Router.get("/teacher", get_all_teacher);
Teacher_Router.post("/create-teacher", create_teacher);
Teacher_Router.delete("/teacher/:id", delete_teacher);
Teacher_Router.put("/teacher/:id", update_teacher);

Teacher_Router.get("/topic", get_all_topic);
Teacher_Router.post("/topic", create_topic);
Teacher_Router.delete("/topic/:id", delete_topic);
// Teacher_Router.put("/topic/:id", update_teacher);

module.exports = Teacher_Router;
