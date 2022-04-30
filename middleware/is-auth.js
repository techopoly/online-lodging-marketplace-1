const jwt =  require('jsonwebtoken')




module.exports= (req,res,next)=>{
    const token =   req.get('Authorization').split(' ')[1];
    let decodedToken

    try{
        decodedToken = jwt.verify(token, 'privateKey')
    }catch(err){
        console.log(err)
        err.statusCode = 500;
        throw err;  
    }
    if(!decodedToken){
        console.log('not authenticated')
    }
    console.log("Decoded : ",decodedToken)
    req.email = decodedToken.email;
    next()
}