import groupModel from './model';

export const createGroup = async (req, res) => {
  const { name, description, category } = req.body;
  if (!name) {
    return res.status(400).json({
      error: true,
      message: 'Bạn chưa điền tên nhóm',
    });
  } else if (typeof (name) !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Tên phải là một chuỗi',
    });
  } else if (name.length < 5) {
    return res.status(400).json({
      error: true,
      message: 'Tên cần nhiều hơn 5 ký tự',
    });
  }
  if (!description) {
    return res.status(400).json({
      error: true,
      message: 'Bạn chưa điền mô tả',
    });
  } else if (typeof (description) !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Mô tả phải là một chuỗi',
    });
  } else if (description.length < 10) {
    return res.status(400).json({
      error: true,
      message: 'Mô tả cần nhiều hơn 10 ký tự',
    });
  }

  const group = new groupModel({ name, description });
  try {
    return res.status(201).json({
      error: false,
      group: await group.save(),
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: `Đã có lỗi xảy ra:${err}`,
    });
  }
};

export const createGroupMeetup = async (req, res) => {
  const { title, description } = req.body;
  const { groupId } = req.params;
  // console.log(`title = ${title} description = ${description} groupId = ${groupId}`);
  if (!title) {
    return res.status(400).json({
      error: true,
      message: 'Bạn chưa điền tiêu đề',
    });
  } else if (typeof (title) !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Tên tiêu đề phải là một chuỗi',
    });
  } else if (title.length < 5) {
    return res.status(400).json({
      error: true,
      message: 'Tên tiêu đề cần nhiều hơn 5 ký tự',
    });
  }

  if (!description) {
    return res.status(400).json({
      error: true,
      message: 'Bạn chưa điền mô tả',
    });
  } else if (typeof (description) !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Mô tả phải là một chuỗi',
    });
  } else if (description.length < 5) {
    return res.status(400).json({
      error: true,
      message: 'Mô tả cần nhiều hơn 10 ký tự',
    });
  }
  if (!groupId) {
    return res.status(400).json({
      error: true,
      message: 'Bạn cần cung cấp id của group',
    });
  }
  // const group = new groupModel({ name, description });
  try {
    const { meetup, group } = await groupModel.addMeetup(groupId, { title, description });
    // console.log("meetup", meetup);
    // console.log("group: ", group);
    res.status(200).json({
      error: false,
      meetup,
      group,
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: `Đã có lỗi xảy ra:${err}`,
    });
  }
};

export const getGroupMeetups = async (req, res) => {
  const { groupId } = req.params;

  if (!groupId) {
    return res.status(400).json({
      error: true,
      message: 'bạn cần cung cấp id của nhóm',
    });
  }

  const group = await groupModel.findById(groupId)
    .populate('meetups');

  if (!group) {
    res.status(400).json({
      error: true,
      message: 'Không tìm thấy nhóm bạn yêu cầu',
    });
  }

  try {
    res.status(200).json({
      error: true,
      group,
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: 'Đẫ có lỗi xuất hiện' + err,
    });
  }
};
