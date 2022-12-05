const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
chai.use(chaiHttp);

const url = "http://localhost:3001";
const User = "utest";
const Password = "ptest";
const Fname = "ftest";
const Lname = "ltest";

describe("test login", function () {
  it("test whitout username,password,fname and lname", function (done) {
    chai
      .request(url)
      .post("/user/register")
      .send({})
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Please fill all fields.");
        done();
      });
  });
  it("test whitout lname", function (done) {
    chai
      .request(url)
      .post("/user/register")
      .send({ username: User, password: Password, fname: Fname })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Please fill all fields.");
        done();
      });
  });
  it("test whitout lname", function (done) {
    chai
      .request(url)
      .post("/user/register")
      .send({ username: User, password: Password, lname: Lname })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Please fill all fields.");
        done();
      });
  });
  it("test whitout password", function (done) {
    chai
      .request(url)
      .post("/user/register")
      .send({ username: User, fname: Fname, lname: Lname })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Please fill all fields.");
        done();
      });
  });
  it("test whitout username", function (done) {
    chai
      .request(url)
      .post("/user/register")
      .send({ password: Password, fname: Fname, lname: Lname })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Please fill all fields.");
        done();
      });
  });

  it("test register", function (done) {
    chai
      .request(url)
      .post("/user/register")
      .send({ username: User, password: Password, fname: Fname, lname: Lname })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property(
          "message",
          "User registered successfully."
        );
        done();
      });
  });
  it("test register with same username", function (done) {
    chai
      .request(url)
      .post("/user/register")
      .send({ username: User, password: Password, fname: Fname, lname: Lname })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Username already exists."
        );
        done();
      });
  });
});
