const isProduction = (process.env.NODE_ENV == "production");
const Variables = 
{
    Production: isProduction,
	Version: "1.0.0",

	AppIcon: "/icon_logo.ico",
	AppTitle: "App",
	AppTitleAdmin: "App for Admin",

	AppThumbnail: "",
	AppAssets: "https://assets.agapedimas.com",
	
	WebHost: "https://app.agapedimas.com",
	WebHomepage: "/home",
	WebPing: "https://app.agapedimas.com/ping",
}

module.exports = Variables;