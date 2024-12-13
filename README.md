# Driver Monitoring REST API
Backend server for driver monitoring API.

# How to run
0. Make the `.env` file by copying duplicating from the `.env.example` file and adjust the file.

1. Install required packages: <br/> ```npm install```

2. Run the server in development: <br/>
`node src/server.js `

3. Run the server in production <br/>
* Install PM2 in your local machine: `npm install -g pm2`
* Run the ecosystem file: `pm2 start ecosystem.config.js`
