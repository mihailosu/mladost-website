

module.exports = async (req, res, next) => {

    let now = new Date();
    let exp = req.token.exp;
    
    if (now.getTime() > exp){
        console.log("Token expired...")
        return res.json("Token expired...").status(401);
    }
        

    return next();

}