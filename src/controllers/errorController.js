exports.getNotFoundPage = (req, res) => {
    res.status(404).render('404',{pageTitle:'404'})
}