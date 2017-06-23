import mongoose from 'mongoose';

export default ()=>{
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetup');
    mongoose.connection
    .once('open', ()=>{
        console.log('connect database success');
    })
    .on('error', err=>{
        console.log(err);
    })
}