import User from '../model/userModel.js';

export const create  = async (req, res) => {
    try {
        const userData = new User(req.body);
        const {name} = userData;
       
        const userExists = await User.findOne({ name})
        if(userExists){
            return res.status(400).json({ message: "User already exists." });
        }

        const savedUser = await userData.save();
         res.status(201).json(savedUser);
        } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};



export const fetch = async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}
export const getOneUser = async (req, res) => {
    try {
        const  id  = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(userExists);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}; 


export const update = async (req, res) => {
    try {
        const  id = req.params.id;
        const userExists = await User.findById(id );
        if (!userExists) {
            return res.status(404).json({ message: "User not found." });
        }
        const updatedUser = await User.findByIdAndUpdate (id, req.body , { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};  


export const deleteuser = async (req, res) => {
    try {
        const  {id } = req.params;
        const userExists = await User.findOne({ _id: id });
        if (!userExists) {
            return res.status(404).json({ message: "User not found." });
        }
        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};  