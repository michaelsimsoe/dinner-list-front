const PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/signup",
            "/signin",
        ],
        target: "http://localhost:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
