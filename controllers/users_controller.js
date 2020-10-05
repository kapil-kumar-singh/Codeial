const User = require("../models/user");


module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('userProfile',{
            title: "userProfile",
            profile_user : user
        });
    });
};

module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            return res.redirect('back');
        });
    }else{
        return res.status(401).send('Unauthorized');
    }
};


// render the sign-in page
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Sign In"
    })
}

// render the sign-up page
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "Sign up"
    })
}

// get the sign-up data
module.exports.create = function(req, res){
    console.log(req.body);
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    };

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error in finding user in sign up', err); return;}
        console.log(user)
        if(!user){
            User.create(req.body, function(err, user){
                console.log(user);
                if(err){console.log('Error in creating user while signing up', err); return;}
                return res.redirect('/users/sign-in');
            })

        }else{
            return res.redirect('back');
        }
    })
}

// sign-in and create session for the user
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'You Have Logged Out!');
    return res.redirect('/');
}