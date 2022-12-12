const viewModel = require("../models/viewModel");
const jwt = require("../config/jwt");
const shortid = require("shortid");

const getView = (req, res) => {
  viewModel.get(req.params.url, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    return res.status(200).json(result);
  });
};

const newView = (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  if (
    !req.body.charts ||
    req.body.charts.length === 0 ||
    !req.body.title ||
    req.body.title.length === 0
  ) {
    return res.status(400).json({ message: "Bad request." });
  }
  const chartsArr = req.body.charts;
  const charts = chartsArr.join(",");
  const url = shortid.generate();
  if (/^[a-z0-9]+$/i.test(req.body.title) === false) {
    return res
      .status(400)
      .json({ message: "Invalid title. Title must be alphanumeric" });
  }

  viewModel.new(url, charts, req.body.title, req.userId, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    return res
      .status(200)
      .json({ status: "success", url: url, message: "View created." });
  });
};

const deleteView = (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  viewModel.delete(req.params.url, req.userId, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    return res
      .status(200)
      .json({ status: "success", message: "View deleted." });
  });
};

const getAllViews = (req, res) => {
  viewModel.all((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    return res.status(200).json(result);
  });
};

module.exports = {
  getView,
  newView,
  getAllViews,
  deleteView,
};
