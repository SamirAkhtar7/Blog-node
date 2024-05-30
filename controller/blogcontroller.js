exports.bloghome = (req, res) => {
    res.render('home',{pagetitle:'My Blog'});
}

exports.blogabout = (req, res) => {
    res.render('about',{pagetitle:'About'});

}

exports.blogcontact = (req, res) => {
    res.render('contact', { pagetitle: 'Contact'});
}