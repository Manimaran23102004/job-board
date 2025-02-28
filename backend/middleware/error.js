const errorResponse = require('../utils/errorResponse');

const errorHandler=(err,req,res,next)=>{
    let error={...err};
    error.message=err.message;

    if(err.name === 'CastError'){
        const  message=`Resouses Not Found${err.value}`;
        error=new errorResponse(message,404)
    }

    if(err.code === 11000){
        const  message=`Duplicate Field Value Entered`;
        error=new errorResponse(message,400)
}

if(err.name === 'ValidationError'){
    const  message= object.values(err.errors).map(val =>' ' + val.message)
    error=new errorResponse(message,400)
}
res.status(error.statusCode || 500).json({
    success:false,
    error: error.message||'server error'
})
}
module.exports = errorHandler;