module.exports = (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        name: req.user.name,
        nickname: req.user.nickname
    });
};