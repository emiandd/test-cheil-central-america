const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;
const preloadData = require('./src/utils/preloadData.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
  	await preloadData();
    console.log(`listening at PORT: ${PORT}`); // eslint-disable-line no-console
  });
});
