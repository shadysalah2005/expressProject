const mongoose=require("mongoose");


// connect on mongoose
mongoose.connect('mongodb+srv://shadySalah363:UwoBj0z6vUbwCnnf@cluster0.gqcfr4n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    })
    .then(() => console.log(' Connected to MongoDB'))
    .catch((err) => console.error(' MongoDB connection error:', err));



// password  UwoBj0z6vUbwCnnf 