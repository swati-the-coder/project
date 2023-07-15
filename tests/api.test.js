const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("User Management API", () => {
  // Variables to hold created user ID and token
  let userId;
  let token;

  // Create a user for testing authentication
  before(async () => {
    const res = await chai
      .request(app)
      .post("/auth/register")
      .send({ username: "testuser", password: "password" });

    userId = res.body.user.id;
  });

  // Authenticate and get the token
  before(async () => {
    const res = await chai
      .request(app)
      .post("/auth/login")
      .send({ username: "testuser", password: "password" });

    token = res.body.token;
  });

  describe("POST /auth/register", () => {
    it("should register a new user", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send({ username: "newuser", password: "newpassword" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("user");
          expect(res.body.user).to.have.property("username", "newuser");
          done();
        });
    });

    it("should return an error if username is already taken", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send({ username: "testuser", password: "newpassword" })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property("error", "Username already taken");
          done();
        });
    });
  });

  describe("POST /auth/login", () => {
    it("should authenticate and return a token", (done) => {
      chai
        .request(app)
        .post("/auth/login")
        .send({ username: "testuser", password: "password" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("token");
          done();
        });
    });

    it("should return an error if invalid credentials are provided", (done) => {
      chai
        .request(app)
        .post("/auth/login")
        .send({ username: "testuser", password: "wrongpassword" })
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.have.property("error", "Invalid credentials");
          done();
        });
    });
  });

  describe("GET /users", () => {
    it("should retrieve a list of all users", (done) => {
      chai
        .request(app)
        .get("/users")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("users");
          expect(res.body.users).to.be.an("array");
          done();
        });
    });
  });

  describe("GET /users/:id", () => {
    it("should retrieve a specific user by their ID", (done) => {
      chai
        .request(app)
        .get(`/users/${userId}`)
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("user");
          expect(res.body.user).to.have.property("id", userId);
          done();
        });
    });

    it("should return an error if user ID does not exist", (done) => {
      chai
        .request(app)
        .get("/users/9999")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("error", "User not found");
          done();
        });
    });
  });

  describe("POST /users", () => {
    it("should create a new user", (done) => {
      chai
        .request(app)
        .post("/users")
        .set("Authorization", `Bearer ${token}`)
        .send({ username: "newuser", password: "newpassword" })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("user");
          expect(res.body.user).to.have.property("username", "newuser");
          done();
        });
    });
  });

  describe("PUT /users/:id", () => {
    it("should update an existing user", (done) => {
      chai
        .request(app)
        .put(`/users/${userId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({ username: "updateduser", password: "updatedpassword" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("user");
          expect(res.body.user).to.have.property("username", "updateduser");
          done();
        });
    });

    it("should return an error if user ID does not exist", (done) => {
      chai
        .request(app)
        .put("/users/9999")
        .set("Authorization", `Bearer ${token}`)
        .send({ username: "updateduser", password: "updatedpassword" })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("error", "User not found");
          done();
        });
    });
  });

  describe("DELETE /users/:id", () => {
    it("should delete a user", (done) => {
      chai
        .request(app)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });

    it("should return an error if user ID does not exist", (done) => {
      chai
        .request(app)
        .delete("/users/9999")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("error", "User not found");
          done();
        });
    });
  });
});
