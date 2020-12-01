var express = require("express");
var db = require('../db');
const shortid = require("shortid");

var router = express.Router();

// show người đã mượn sách
router.get("/",(req, res) => {
	var transaction = db.get('trans').value();
	res.render("trans", {
    	transaction
	});
});
// thêm userId và BookId mới
router.get("/create", (req, res) => {
	var users = db.get('user').value();
	var books = db.get('books').value();

 	res.render("transadd", {
 		users: users,
 		books: books
 	});
})
router.post("/create", (req, res) => {
	var userId = db.get("user").value(req.body.userId);
	var bookId = db.get("books").value(req.body.bookId);

	db.get('trans').push({userId: userId, bookId: bookId}).write();
  
    res.redirect("/transaction");
})
module.exports = router;