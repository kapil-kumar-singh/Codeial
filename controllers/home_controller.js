
module.exports.home = function(req, res){
    console.log(req.cookies);
    // res.cookie('hbjh', 1);
    return res.render('home', {
        title: "Home"
    });
};

