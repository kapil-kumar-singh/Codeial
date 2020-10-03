const Post = require("../models/post");


module.exports.home = function(req, res){
    console.log(req.cookies);
    // res.cookie('hbjh', 1);

    // populate the user of each post
    Post.find({}).populate('user').exec(function(err, post){
        if(err){console.log('erroe in finding post',err); return;};
        return res.render('home', {
            title: 'Home | Codeial',
            posts: post
        });
    });

};

