// checkDevice
exports.checkDevice = (req, res, next) => {
    if(!req.useragent.isDesktop){
        res.redirect('mobile')
    }
    else{
        return next();
    }
}