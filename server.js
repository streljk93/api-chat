// application
const express = require('express');
const app     = express();

require('./application/config')(app);
require('./application/routes')(app);

app.listen(app.get('port'), () => {
    console.log('Listen ' + app.get('port') + ' port. To exit press buttons Ctrl+C!');
});