const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
chai.use(chaiHttp);

const url = "http://localhost:3001";
const username = "utest";
const wusername = "wtest";
const correctPassword = "ptest";
let token = "";

describe("test delete", function () {
  it("test correct username and password", function (done) {
    chai
      .request(url)
      .post("/user/login")
      .send({ username: username, password: correctPassword })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property(
          "message",
          "Successfully logged in.",
          "token"
        );
        token = res.body.token;
        done();
      });
  });
  it("test delete user", function (done) {
    chai
      .request(url)
      .post("/user/delete")
      .set("Authorization", "Bearer " + token)
      .send({ username: username })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property(
          "message",
          "User deleted successfully."
        );
        done();
      });
  });
  it("test delete user that does not exist", function (done) {
    chai
      .request(url)
      .post("/user/delete")
      .set("Authorization", "Bearer " + token)
      .send({})
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Please enter username.");
        done();
      });
  });
  it("test delete wrong user", function (done) {
    chai
      .request(url)
      .post("/user/delete")
      .set("Authorization", "Bearer " + token)
      .send({ username: wusername })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "User does not exist.");
        done();
      });
  });

  it("test delete whitout token", function (done) {
    chai
      .request(url)
      .post("/user/delete")
      .send({})
      .end(function (err, res) {
        expect(res).to.have.status(401);
        done();
      });
  });
});
