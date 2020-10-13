

const development = {
    name: 'development',
    asset_path : '/assets',
    session_cookie_key : "blahsomething",
    db : 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'here_give_the_email',
            pass: 'And_here_give_the_email_password'
        }
    },
    google_client_id: '163651934200-r4fn5sifoqs0ss5337sqccjeherpdt2u.apps.googleusercontent.com',
    google_client_secret: 'iun-YCGJnznravGyz75Caf7f',
    google_call_back_url: 'http://localhost:9000/users/auth/google/callback',
    jwt_secret : 'codeial',
}

const production ={
    name: 'production'
}


module.exports = development;