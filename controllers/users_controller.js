module.exports.profile = function(req, res){
    return res.render('userProfile',{
        title: "userProfile"
    });
};


// render the sign-in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Sign In"
    })
}

// render the sign-up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Sign up"
    })
}

// get the sign-up data
module.exports.create = function(req, res){
    // todo letter
}

// sign-in and create session for the user
module.exports.createSession = function(req, res){
    // todo letter
}