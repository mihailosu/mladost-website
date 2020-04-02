

module.exports = async (req, res, next) => {

    let now = new Date();
    let exp = req.token.exp;
    
    if (now.getTime() > exp){
        return res.json("Token expired...").status(401);
    }
        

    return next();

}