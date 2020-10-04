const Comment = require('../models/comment');
const Post = require('../models/post');

// module.exports.create = function(req, res){
//     Post.findById(req.body.post, function(err, post){
//         if(err){console.log('Erroe in finding post',err); return;};
//         if(post){
//             Comment.create({
//                 content : req.body.content,
//                 post: req.body.post,
//                 user: req.user._id
//             }, function(err, comment){
//                 // handle err
//                 post.comments.push(comment);
//                 post.save();
                
//                 return res.redirect('/');
//             })
//         }
//     });
// };

module.exports.create = async function(req, res){
    try{
        let post = await Post.findById(req.body.post);
        if(post){
            let comment = await Comment.create({
                    content : req.body.content,
                    post: req.body.post,
                    user: req.user._id
                });

                post.comments.push(comment);
                post.save();
                    
                return res.redirect('/');
        };
    }catch(err){
        console.log('Error :', err);
        return;
    }
};

// module.exports.destroy = function(req, res){
//     Comment.findById(req.params.id, function(err, comment){
//         // console.log(comment.user);
//         // console.log(Post.user);
//         Post.findById(comment.post, function(err, post){
//             if(comment.user == req.user.id || ((req.user.id) == (post.user + ''))){
//                 let postId = comment.post;

//                 comment.remove();
//                 Post.findByIdAndUpdate(postId, { $pull : { comments : req.params.id}}, function(err, post){
//                     return res.redirect('back');
//                 })
//             }else{
//                 return res.redirect('back');
//             }  
//         })

//     });
// };

module.exports.destroy = async function(req, res){
    try{
        let comment = await Comment.findById(req.params.id);
        let post = await Post.findById(comment.post);
            if(comment.user == req.user.id || ((req.user.id) == (post.user + ''))){
                let postId = comment.post;

                comment.remove();
                let post = Post.findByIdAndUpdate(postId, { $pull : { comments : req.params.id}});
                    return res.redirect('back');
            }else{
                return res.redirect('back');
            }
    }catch(err){
        console.log('Error :', err);
        return;
    }
};