const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
chai.use(chaiHttp);

const url = "http://localhost:3001";
const username = "utest";
const wusername = "wtest";

describe("test delete", function () {
  it("test delete user", function (done) {
    chai
      .request(url)
      .post("/user/delete")
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
      .send({ username: wusername })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "User not found.");
        done();
      });
  });
  it("test delete whitout username", function (done) {
    chai
      .request(url)
      .post("/user/delete")
      .send({})
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Please enter username.");
        done();
      });
  });
});
