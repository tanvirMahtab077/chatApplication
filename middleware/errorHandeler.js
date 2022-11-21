const { render } = require('ejs');

const notFoundHandler=(req,res,next)=>{
 next(createError(404,'The page has not found!'))
}


const errorHandler = (err, req, res, next)=>{
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {message: err.message};
    res.status(err.status || 500);

    if(res.locals.html){
        res.render('error', {
            title: 'Error Page'
        });
    }else{
        console.error(err);
        res.json(res.locals.error)
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
}