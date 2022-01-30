import Express from "express"
import shortid from "shortid";
import bcrypt from "bcrypt";


const router = Express.Router()

// Database Models
import User from "../Database/Users.Model.js";
// import Room from "./Database/Rooms.Model.js";



//Actions
const hashedPassword = (password) => {
    const salt = bcrypt.genSaltSync(11);
    const hash = bcrypt.hashSync(password, salt);
    return hash;

    // return hashPassword;
};


// -------------------------------AUTH ---------------------------

// sign up
/*
METHOD :        POST
URL:        /api/addUser/new
PARAMS: NONE
BODY: USER Details
ACCESS: PUBLIC

*/

router.post("/addUser/new", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword(req.body.password),
            mobile: req.body.mobile,
            id: shortid.generate(),
            rooms: [],
        });
        if (user) {
            res.json({ status: "ok", user: user.id });
        }


    } catch (error) {
        if (error.code === 11000) {
            res.json({ status: "error", message: "User already Registered check the Email" });
        } else {
            res.json({ status: "error", error: error });
        }

    }
});

//   // api routing
//   Router.get("/", (req, res) => {
//     res.status(200).send("hello working....");
//   });

// login

/*
  METHOD :        POST
  URL:        /api/login
  PARAMS: NONE
  BODY: USER Details
  ACCESS: PUBLIC 
  */

router.post("/login", async (req, res) => {

    // console.log(req.body);
    const user = await User.findOne({
        email: req.body.email,
    });
    // console.log(user);
    if (user) {
        // console.log(user.name);
        const checkPassword = bcrypt.compareSync(req.body.password, user.password);
        if (checkPassword) {
            return res.json({ status: "ok", user: true, userId: user.id });
        } else {
            return res.json({
                status: "error",

                user: false,
                message: "password incorrect",
            });
        }
    } else {
        return res.json({
            status: "error",
            user: false,
            message: "user not found",
        });
    }
});

export default router;