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
/**
 * Cách 2
 */
GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');
  
  /**
   * Đối số args có dạng như:
   * {
   *  title: "title 1"
   * description: "description 1"
   * }
   */
  const meetup = await new Meetup({ ...args, group: id });
  const group = await this.findByIdAndUpdate(id, {
    $push: {
      meetups: meetup.id
    }
  });
  return {
    meetup: await meetup.save(),
    group
  };
};

/**
 * Cách 1
 */
GroupSchema.statics.addMeetup_Cach1 = async function (id, args) {
 
  const Meetup = mongoose.model('Meetup');
  const group = await this.findById(id);
  /**
   * Đối số args có dạng như:
   * {
   *  title: "title 1"
   * description: "description 1"
   * }
   */
  const meetup = await new Meetup({ ...args, group });
  group.meetups.push(meetup);
  const result = await Promise.all([meetup.save(), group.save()]);
  
  return result;
};

export default mongoose.model('Group', GroupSchema);
