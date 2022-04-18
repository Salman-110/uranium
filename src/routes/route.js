const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newPublisherController= require("../controllers/newPublisherController")
const newBookController= require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", newAuthorController.createAuthor)

// router.post("/newCreateBook", newBookController.newCreateBook)

// router.get("/getBooksWithDetails", newBookController.getBooksWithDetails)

// router.post("/createPublisher", newPublisherController.createPublisher)

// router.post("/getNewData", newBookController.getNewData)

// router.put("/updateBooksData", newBookController.updateBooksData)

router.post("/batches", newBookController.batches)
router.post("/developers",newBookController.developers)
router.get("/scholarship_developers",newBookController.scholarship_developers) 
router.get("/developers",newBookController.developerswithDetail)

// / router.get("/getAuthorsData", newAuthorController.getAuthorsData)
// router.get("/getBooksData", newBookController.getBooksData)

module.exports = router;