const goals = require("../../services/goals/goals.service");

module.exports = (router) => {

    router.get("/goals", goals.getGoals);
}