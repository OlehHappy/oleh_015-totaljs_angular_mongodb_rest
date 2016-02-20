var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');
// mongoose.connect(F.config.database);

global.mongoose = mongoose;
