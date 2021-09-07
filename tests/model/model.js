import "dotenv/config";
import chai from "chai";
import chaiHttp from "chai-http";
import request from "supertest";
import Mock from "../_mocks_/index";
import app from "../../src/server";

const http = request.agent(app);
const { expect } = chai;

chai.use(chaiHttp);
chai.should();

const modelPath = "/api/model";
  
  describe("add car model", () => {
    it("should POST model data to db", (done) => {
      request(app)
        .post(modelPath)
        .send(Mock.model)
        .expect(201, done);
      Mock.model.should.be.a("object");
      expect(Mock.model).to.have.property("name");
    });
}).timeout(30000);
