import  mongoose from 'mongoose';
const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: Number
});
const  Books = mongoose.model('Books', bookSchema);
export default Books;