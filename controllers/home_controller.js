const Post = require("../models/post");
const User = require('../models/user');

// module.exports.home = function(req, res){
//     // console.log(req.cookies);
//     // res.cookie('hbjh', 1);

//     // populate the user of each post
//     Post.find({})
//     .populate('user')
//     .populate({
//         path : 'comments',
//         populate: {
//             path : "user"
//         }
//     })
//     .exec(function(err, post){
//         if(err){console.log('erroe in finding post',err); return;};
        
//         User.find({}, function(err, users){
//             return res.render('home', {
//                 title: 'Home | Codeial',
//                 posts: post,
//                 all_user : users
//             });
//         });
//     });
// };

module.exports.home = async function(req, res){

    try{
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path : 'comments',
            populate : {
                path : "user"
            }
        });
    
        let users = await User.find({});
    
        return res.render('home',{
            title : 'Home | Codeial',
            posts: posts,
            all_user : users
        });
    }catch(err){
        console.log('Error : ', err);
        return;
    }

}