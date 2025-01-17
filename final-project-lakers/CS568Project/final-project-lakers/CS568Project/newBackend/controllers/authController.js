const jwt = require('jsonwebtoken');

const User = require('../models/user');
const accessTokenSecret = "group d's shopping";

exports.login = async(req, res, next) => {
    try {
        const user = await new User(null, req.body.username, req.body.password, null).login();
        if (user) {
            const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
            res.json({ 'accessToken': accessToken, 'role': user.role });
        } else {
            res.status(200).json({ 'error': 'username or password invalid' });
        }
    } catch (error) {
        next(error);
    }
}
exports.getAllUsers = async(req, res, next)=>{
    try {
        res.status(200).json( await User.getAllUsers().toArray())
    } catch (error) {
        next(error);
    }
    
}

exports.getUserById = async(req, res, next) => {
    try {
        res.status(200).json(await User.getUserById(req.params.username));
    } catch (error) {
        res.json("already inside the method")
        // next(error);
    }
}
exports.signup = async(req, res, next) => {
    try {
        const user = await new User(null, req.body.username, req.body.password, null).signUp();
        if (user) {
            // const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
            res.json("Successfully signed up");
        } else {
            res.status(200).json({ 'error': 'username or password invalid' });
        }
    } catch (error) {
        next(error);
    }
}

exports.authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.status(403).json({ "error": "Forbidden" });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ "error": "Unauthorized" });
    }
}

exports.authorizeAdmin = (req, res, next) => {
    if (req.user.role === 'member') {
        return res.status(403).json({ "error": "Forbidden" });
    } else {
        next();
        
    }
}