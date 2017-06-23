import model from './model';

export const createMeetup = async (req, res) => {
    const { title, description } = req.body;
    const newMeetup = new model({title, description});
    try {
        return res.status(201).json({meetup: await newMeetup.save() });
    }
    catch(err){
        return res.status(err.status).json(err);
    }
}

export const getAllMeetups = async (req, res)=>{
    try {
        return res.status(200).json({
            meetups: await model.find({})
        })
    }
    catch(err){
        return res.status(err.status).json(err);
    }
}