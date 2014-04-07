// Module dependencies.
var application_root = __dirname;

var express = require('express'); //Web framework
var path = require('path'); //Utilities for dealing with file paths 
var mongoose = require('mongoose'); //MongoDB integration
var moment = require('moment');

//Create server
var app = express();
// Configure server
app.configure(function () {
    //parses request body and populates request.body 
    app.use(express.bodyParser());
    //checks request.body for HTTP method overrides
    app.use(express.methodOverride());
    //perform route lookup based on URL and HTTP method
    app.use(app.router);
    //Where to serve static content
    app.use(express.static(path.join(application_root, 'site')));
    //Show all errors in development
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

//Start server
var port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode',
    port, app.settings.env);
});

//Connect to database
mongoose.connect('mongodb://localhost/library_database');
//Schemas
var Tags = new mongoose.Schema({
    tag: String
});

var Post = new mongoose.Schema({
    title: String,
    summary: String,
    tags: [Tags],
    date_created: String,
    date_updated: String
});

//Models
var postModel = mongoose.model('Post', Post);

app.post('/api/v1/posts', function (request, response) {
    var post = new postModel({
        title: request.body.title,
        summary: request.body.summary,
        tags: request.body.tags,
        date_created: request.body.date_created,
        date_updated: moment().format()
    });
    post.save(function (err) {
        if (!err) {
            return console.log('created');
        } else {
            return console.log(err);
        }
    });
    return response.send(post);
});

app.get('/api/v1/posts', function (request, response) {
    return postModel.find(function (err, posts) {
        if (!err) {
            return response.send(posts);
        } else {
            return console.log(err);
        }
    });
});

app.put('/api/v1/posts/:id', function (request, response) {
    console.log('Updating post' + request.body.title);
    return postModel.findById(request.params.id, function (err, post) {

        post.title = request.body.title;
        post.summary = request.body.summary;
        post.tags = request.body.tags;
        post.date_updated = moment().format();

        console.log(request.body);

        return post.save(function (err) {
            if (!err) {
                console.log('Post updated');
                console.log(post);
            } else {
                console.log(err);
            }
            return response.send(post);
        });
    });
});

app.delete('/api/v1/posts/:id', function (request, response) {
    console.log('Deleting post with id: ' + request.params.id);
    return postModel.findById(request.params.id, function (err, post) {
        return post.remove(function (err) {
            if (!err) {
                console.log('post removed');
                return response.send('');
            } else {
                console.log(err);
            }
        });
    });
});