const ensureAdmin = (req, res, next) => {
    const { admin } = req.cookies;
    if (!admin) {
        res.status(401)
        res.redirect('/admin/login')
    }
    else {
        if (admin.roles === "Admin") {
            next();
        }
    }
};

module.exports = { ensureAdmin };
