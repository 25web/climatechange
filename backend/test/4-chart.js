const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
chai.use(chaiHttp);

const url = "http://localhost:3001";

describe("test chart", function () {
  it("test chart v1", function (done) {
    chai
      .request(url)
      .get("/chart/v1")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect("Content-Type", /json/);
        expect(res.body).to.have.property("resMonthly");
        expect(res.body).to.have.property("resAnnual");
        expect(res.body).to.have.property("resV2");
        done();
      });
  });
  it("test chart v3", function (done) {
    chai
      .request(url)
      .get("/chart/v3")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect("Content-Type", /json/);
        expect(res.body).to.have.property("resMonthly");
        expect(res.body).to.have.property("resAnnual");
        done();
      });
  });
  it("test chart v4", function (done) {
    chai
      .request(url)
      .get("/chart/v4")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect("Content-Type", /json/);
        expect(res.body).to.have.property("resV41");
        expect(res.body).to.have.property("resV42");
        expect(res.body).to.have.property("resV43");
        expect(res.body).to.have.property("resV3");
        expect(res.body).to.have.property("resV10");
        done();
      });
  });
  it("test chart v5", function (done) {
    chai
      .request(url)
      .get("/chart/v5")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect("Content-Type", /json/);
        done();
      });
  });
  it("test chart v6", function (done) {
    chai
      .request(url)
      .get("/chart/v6")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect("Content-Type", /json/);
        done();
      });
  });
  it("test chart v7", function (done) {
    chai
      .request(url)
      .get("/chart/v7")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect("Content-Type", /json/);
        expect(res.body).to.have.property("resV7");
        expect(res.body).to.have.property("resV6");
        done();
      });
  });
  it("test chart v8", function (done) {
    chai
      .request(url)
      .get("/chart/v8")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect("Content-Type", /json/);
        expect(res.body).to.have.property("resV8");
        expect(res.body).to.have.property("resV8year");
        done();
      });
  });
});
