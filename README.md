# automated-spending-logger-api
Provides endpoints to update google sheet based on data passed in.

Works with automated-spending-logger app: https://github.com/enjiruuuu/automated-spending-logger

## Getting Started
A google service account key file is required for this to work. You can download this using the following steps:
1. go to google cloud console
2. pick the app you want
3. service account
4. add a new key.
5. Rename downloaded file as ```keys.json``` and add it to your working directory

To start the server, run ```npm start```. The default port is ```:80```.

This is currently hosted on https://automated-spending-logger-api.glitch.me


