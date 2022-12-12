const chartModel = require("../models/chartModel");
const jwt = require("../config/jwt");

const getV1 = (req, res) => {
  chartModel.getV1((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    return res
      .status(200)
      .json({ resMonthly: result[0], resAnnual: result[1], resV2: result[2] });
  });
};

const getV3 = (req, res) => {
  chartModel.getV3((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    return res
      .status(200)
      .json({ resMonthly: result[0], resAnnual: result[1] });
  });
};
const getV4 = (req, res) => {
  chartModel.getV4((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    let yline = result[4];

    yline.forEach((item) => {
      item["val"] = "330";
    });
    return res.status(200).json({
      resV41: result[0],
      resV42: result[1],
      resV43: result[2],
      resV3: result[3],
      resv10_v4: yline,
    });
  });
};
const getV5 = (req, res) => {
  chartModel.getV5((err, result) => {
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

const getV6 = (req, res) => {
  chartModel.getV6((err, result) => {
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

const getV7 = (req, res) => {
  chartModel.getV7((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }

    let yline = result[2];

    yline.forEach((item) => {
      item["val"] = "2";
    });

    return res.status(200).json({
      resV7: result[0],
      resV6: result[1],
      resv10_v7: yline,
    });
  });
};

const getV8 = (req, res) => {
  chartModel.getV8((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }

    let countrys = result[0];
    let finalVersio = [];
    let countryAndData = [];
    let temporaryVersio = {};
    let finalResult = {};

    const countryNames = Object.keys(countrys[0]);

    countryNames.forEach((country) => {
      temporaryVersio[country] = [];
      countrys.forEach((res) => {
        temporaryVersio[country].push(res[country]);
      });
      countryAndData.push([country, result[result.length - 1][country]]);
    });

    countryAndData.forEach((item) => {
      finalVersio.push(item[0]);
    });

    finalVersio.reverse();
    finalVersio.forEach((country) => {
      finalResult[country] = temporaryVersio[country];
    });

    return res.status(200).json({ resV8: finalResult, resV8year: result[1] });
  });
};
module.exports = {
  getV1,
  getV3,
  getV4,
  getV5,
  getV6,
  getV7,
  getV8,
};
