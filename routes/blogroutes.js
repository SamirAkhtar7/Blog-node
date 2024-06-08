const express = require('express');




const blogcontroller = require('./../controller/blogcontroller');

const blogroutes = express.Router();


blogroutes.route('/').get(blogcontroller.bloghome);
blogroutes.route('/about').get(blogcontroller.blogabout);
blogroutes.route('/contact').get(blogcontroller.blogcontact);
blogroutes.route("/search").get(blogcontroller.blogpost);
blogroutes.route('/compose').get(blogcontroller.blogcompose).post(blogcontroller.blogcomposePOST);


module.exports = blogroutes;
