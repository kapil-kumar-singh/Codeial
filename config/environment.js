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
    name: 'production',
    asset_path : process.env.CODEIAL_ASSET_PATH,

    session_cookie_key : process.env.CODEIALSESSION_COOKIE_KEY,
    db : process.env.CODEIAL_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.CODEIAL_GMAIL_USERNAME,
            pass: process.env.CODEIAL_GMAIL_PASSWORD
        }
    },
    google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.CODEIAL_GOOGLE_CALLBACK_URL,
    jwt_secret : process.env.CODEIAL_JWT_SECRET,
}


module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);
// module.exports = production;