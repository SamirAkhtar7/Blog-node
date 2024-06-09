let allposts = [];
const lodash = require("lodash");
const axios = require('axios');
const fs = require('fs');
let blogdata = "";
exports.bloghome = (req, res) => {
    if (fs.existsSync('blogs.txt')) {
        blogdata = fs.readFileSync("blogs.txt", "utf-8");
         const blogobject = JSON.parse(blogdata);
         allposts.push(...blogobject);
    }
    res.render('home',{pagetitle:'My Blog', allposts});
}

exports.blogabout = (req, res) => {
 
    axios.get("https://type.fit/api/quotes").then(resp => {
           const len = resp.data.lenght;
           const value = Math.trunc(Math.random() * len );
        quote = resp.data[value].text;
        // console.log(resp.data);
        res.render("about", { pagetitle: "About", quote });
        
    }).catch(error => {
        console.log("connot get api data ",error);
    })


    

}

exports.blogcontact = (req, res) => {
    res.render('contact', { pagetitle: 'Contact'});
}

exports.blogcompose = (req, res) => {
    res.render('compose', { pagetitle: 'Compose' });

}

exports.blogcomposePOST = (req, res) => {
    const post = {
        title: req.body.posttitle,
        text: req.body.posttext,
        date: new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year :'numeric'
        })
    }
    const post_str = JSON.stringify(allposts);
    fs.writeFile("blogs.txt", post_str, (error) => {
        if (error) console.log("error in writing file", error);
    })
    allposts.unshift(post);
    console.log(allposts);
    res.redirect('/blog');
}
exports.blogpost = (req, res) => { 
    console.log(req.query);
    const { q } = req.query;
    let f = 0;
    for (let post of allposts) {
        if (lodash.lowerCase(q) === lodash.lowerCase(post.title)) {
            f = 1;
            res.render('post', { pagetitle:'blog',post})
            break;
        }
        if (!f) {
            res.render('404', { pagetitle: '404' })
         }
    
    }
}

