const mongoose= require('mongoose')


const URI = "mongodb+srv://jaga:jagadb@cluster0-fobfy.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
