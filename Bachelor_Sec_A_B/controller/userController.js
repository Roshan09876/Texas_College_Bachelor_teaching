const User = require("../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            firstName, lastName, email, password: hashedPassword
        });
        await newUser.save();


        return res.status(201).json({
            success: true,
            message: "User Registered Successfully.!!",
            newUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error while register is ${error}`
        });
    }
}




// const register = async (req, res) => {
//     //Destructuring the form  or raw data 
//     const { firstName, lastName, email, password } = req.body;
//     try {

//         if (!firstName || !lastName || !email || !password) {
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             });
//         }
//         //check for unique email 
//         const existingEmail = await User.findOne({ email: email });
//         if (existingEmail) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User already exist"
//             });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10)

//         const newUser = new User({
//             firstName, lastName, email, password: hashedPassword
//         });
//         await newUser.save();

//         const token = jwt.sign({
//             _id: newUser._id,
//             firstName: newUser.firstName,
//             lastName: newUser.lastName,
//             email: newUser.email,
//             isAdmin: newUser.isAdmin
//         },
//             process.env.JWT_SECRET,
//             { expiresIn: "1d" }
//         )
//         return res.status(201).json({
//             success: true,
//             message: "User Registered Successfully.!!",
//             token,
//             newUser
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: `Error while register is ${error}`
//         });
//     }
// }

module.exports = {
    register,
}
