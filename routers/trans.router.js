var express = require("express");
var db = require('../db');
const shortid = require("shortid");

var router = express.Router();

// show người đã mượn sách
router.get("/",(req, res) => {
	var trans = db.get('trans').value();

	res.render("trans", {
    	trans
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
	req.body.id = shortid.generate();

	db.get('trans').push(req.body).write();  
    res.redirect("/transaction");
})
module.exports = router;