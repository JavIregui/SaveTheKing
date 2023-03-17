// Invocamos a UserAgent
const useragent = require('express-useragent');
router.use(useragent.express());

// checkDevice
exports.checkDevice = (req, res, next) => {
    if(!req.useragent.isDesktop){
        res.redirect('mobile')
    }
    else{
        return next();
    }
}