const User = require("../model/userModel")

const register = async (req, res) => {
    //Destructuring the form  or raw data 
    const { firstName, lastName, email, password } = req.body;
    try {

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        //check for unique email 
        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: "User already exist"
            });
        }
        const user = new User({
            firstName, lastName, email, password
        });
        await user.save();
        return res.status(201).json({
            success: true,
            message: "User Registered Successfully.!!"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error while register is ${error}`
        });
    }
}

module.exports = {
    register,
}
