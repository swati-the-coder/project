const jwt = require("jsonwebtoken");
require("dotenv").config();

const request = require("supertest");
const app = require("../index.js");
const db = require("../db.js");
const { expect } = require("chai");

describe("Users API", () => {
  it("should retrieve all users", async () => {
    const res = await request(app).get("/users");
    expect(res.status).to.equal(200);
  });

  it("should retrieve a specific user by ID", async () => {
    const res = await request(app).get("/users/1");
    expect(res.status).to.equal(200);
  });

  it("should return 404 if user not found", async () => {
    const res = await request(app).get("/users/999");
    expect(res.status).to.equal(404);
  });

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "John Doe", email: "john@example.com" });
    expect(res.status).to.equal(201);
  });

  it("should update an existing user", async () => {
    const res = await request(app)
      .put("/users/1")
      .send({ name: "Updated Name" });
    expect(res.status).to.equal(200);
  });

  it("should return 404 if user not found for update", async () => {
    const res = await request(app)
      .put("/users/999")
      .send({ name: "Updated Name" });
    expect(res.status).to.equal(404);
  });

  it("should delete a user", async () => {
    const res = await request(app).delete("/users/1");
    expect(res.status).to.equal(200);
  });

  it("should return 404 if user not found for delete", async () => {
    const res = await request(app).delete("/users/999");
    expect(res.status).to.equal(404);
  });
});
