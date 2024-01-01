import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let allPosts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { allPosts });
});
app.get("/all-posts", (req, res) => {
  res.render("index.ejs");
});
app.get("/new-post", (req, res) => {
  res.render("new.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.post("/", (req, res) => {
  let newPost = req.body.newPost;
  allPosts.push(newPost);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Server is running on port ${port}...`);
});