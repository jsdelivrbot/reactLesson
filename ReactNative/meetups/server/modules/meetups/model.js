import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, 'Tên tiêu đề tối thiểu cần có 5 ký tự'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Tên tối thiểu cần có 10 ký tự'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: "Group",
  }
},
{
  timestamps: true,
});

export default mongoose.model('Meetup', MeetupSchema);
