This is a replication of the React Async rendering implementation that was displayed at JSConf Iceland. Largely based on the [code that Andrew published after his Zeit talk](https://github.com/acdlite/suspense-ssr-demo)

Please note that none of these features are production-ready, do not take them for granted nor use in production.

# Usage

You can play around with how long the simulated network requests take place in `src/api.js`.
By default, fetching the movie details takes 3 seconds. Fetching reviews on the other hand takes 5 seconds with a fallback delay of 1 second.

To run locally:
`yarn` or `npm install`

`yarn start` or `npm start`
