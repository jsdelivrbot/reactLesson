import  mongoose from 'mongoose';
const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    images: String,
    price: Number
});
const  Books = mongoose.model('Books', bookSchema);
export default Books;