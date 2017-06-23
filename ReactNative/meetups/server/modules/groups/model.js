import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Tên tối thiểu cần có 5 ký tự'],
  },
  description: {
    type: String,
    required: true,
    minlength: [5, 'Mô tả cần tối thiểu 10 ký tự'],
  },
  category: {
    type: String,
  },
  meetups: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Meetup',
    },
  ],
}, { timestamps: true });

GroupSchema.statics.addMeetup = async function (id, args) {
  // console.log("go addMeetup");
  const Meetup = mongoose.model('Meetup');
  console.log(`id = ${id}, args =`, args);
  const group = await this.findById(id);
  // console.log("group", group);
  const meetup = await new Meetup({ ...args, group });
  // console.log("meetup", meetup);
  group.meetups.push(meetup);
  const result = await Promise.all(meetup.save(), group.save());

  return result;
};

export default mongoose.model('Group', GroupSchema);
