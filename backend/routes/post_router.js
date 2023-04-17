const express=require('express');
const {createPost,likeAndUnlikePost,deletePost, getPostOffollowing, updateCaption,commentOnPost,deleteComment}=require("../controllers/post_controller");
const { isAuthenticated } = require('../middlewares/auth');

const router=express.Router();

router.route("/post/upload").post(isAuthenticated,createPost);
router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated,deletePost).put(isAuthenticated,updateCaption);


router.route("/posts").get(isAuthenticated,getPostOffollowing);

router.route("/post/comment/:id").put(isAuthenticated,commentOnPost).delete(isAuthenticated,deleteComment)






module.exports=router