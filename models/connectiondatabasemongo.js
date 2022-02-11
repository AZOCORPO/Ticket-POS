var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://posticket:posticket@cluster0.owxf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
options, 
function(error){
  if (error) {
    console.log(error);
  } else {
    console.log("connection ok");
  }
}
);

module.exports = mongoose