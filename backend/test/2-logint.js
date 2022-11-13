const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
chai.use(chaiHttp);

const url = "http://localhost:3001";
const wrongUser = "wtest";
const correctUser = "utest";
const wrongPassword = "wtest";
const correctPassword = "ptest";

describe("test login", function () {
  it("test whitout username and password", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({})
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Please enter username and password."
        );
        done();
      });
  });
  it("test whitout password", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({ username: correctUser })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Please enter username and password."
        );
        done();
      });
  });
  it("test whitout username", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({ password: correctPassword })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Please enter username and password."
        );
        done();
      });
  });
  it("test wrong username and password", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({ username: wrongUser, password: wrongPassword })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Invalid username or password."
        );
        done();
      });
  });
  it("test wrong username", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({ username: wrongUser, password: correctPassword })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Invalid username or password."
        );
        done();
      });
  });
  it("test wrong password", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({ username: correctUser, password: wrongPassword })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Invalid username or password."
        );
        done();
      });
  });
  it("test correct username and password", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({ username: correctUser, password: correctPassword })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property(
          "message",
          "Successfully logged in.",
          "token"
        );
        done();
      });
  });
});
