const User = require("../model/userModel");

const register = async (req, res) => {
    // Destructuring the data 
    const { firstName, lastName, email, password } = req.body;
    try {
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        };

        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already exist.."
            });
        }

        const newUser = new User({
            firstName, lastName, email, password
        });

        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "User Registered Successfully..",
            newUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal Server error ${error}`
        });
    }
}

const login = async (req, res) => {

}

module.exports = {
    register,
    login
}

//MERN

// M = mongoDB (NO SQL Databas)
