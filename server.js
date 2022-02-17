const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const root = `${__dirname}/public`;
const port = 8081;
const storage = multer.diskStorage({
  destination: `${root}/img/`,
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

const images = [
  { image: "./img/bottom-1.png", tags: ["chill", "casual"] },
  { image: "./img/bottom-2.png", tags: ["professional", "party"] },
  { image: "./img/bottom-3.png", tags: ["casual", "trendy"] },
  { image: "./img/shoes-1.png", tags: ["trendy", "party"] },
  { image: "./img/top-1.png", tags: ["casual"] },
  { image: "./img/top-2.png", tags: ["professional", "trendy"] },
  { image: "./img/top-3.png", tags: ["casual", "professional"] },
  { image: "./img/top-4.png", tags: ["professional"] },
  { image: "./img/top-5.png", tags: ["chill", "trendy"] },
  { image: "./img/top-6.png", tags: ["chill"] },
  { image: "./img/top-7.png", tags: ["casual", "professional", "party"] },
  { image: "./img/top-8.png", tags: ["casual", "party"] },
  // { image: "./img/top-9.png", tags: ["chill", "casual", "sporty"] },
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/images", (req, res) => {
  res.json(images);
});

app.post("/images", upload.single("photo"), (req, res) => {
  images.push({
    image: `./img/${req.file.originalname}`,
    tags: JSON.parse(req.body.tags),
  });
  res.json({ success: true });
});

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
