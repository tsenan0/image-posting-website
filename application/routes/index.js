var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostById, getCommentsForPostById} = require('../middleware/posts');
var router = express.Router();


// router.use(function(req,res,next){
//   res.locals.navItems =[
//     {
//       text: "Log in",
//       cssClasses: "nav-items button",
//       href: "/login"
//     }
//   ]
//   next();
// })

/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Tamer Senan " , css:["stylee.css"]});
});

router.get("/login",function(req, res) {
  res.render('login');
});

router.get("/register",function(req, res) {
  res.render('Registration', {css:["stylee.css"], js: ["registration.js"]});
});

router.get("/postimage", isLoggedIn, function(req, res) {
  res.render('postimage');
});

router.get("/posts/:id(\\d+)", getPostById, getCommentsForPostById,function(req, res) {
 
  res.render('Viewpost', {css:["stylee.css"], js:["viewpost.js"]});
});
module.exports = router;
