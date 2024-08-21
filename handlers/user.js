const User = require('../models/userSchema');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    return res.status(200).JSON({msg:"user found",user});
  } catch (error) {
    res.status(500).json({msg:'Server error occured'});
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { firstName, lastName },
      { new: true }
    );
    return res.status(200).json({msg:"Profile Updated",user});
  } catch (error) {
    res.status(500).JSON({msg:'Server error occured'});
  }
};

exports.getAllUsers = async (req,res)=>{
  try {
    const userList = await User.find();
    return res.status(200).json({msg:"Users fetched successfully",userList});
  } catch (error) {
    res.status(500).JSON({msg:'Server error occured'});

  }
};