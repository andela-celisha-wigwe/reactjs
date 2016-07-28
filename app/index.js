var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var routes = require('./config/routes.js');

var data = [{
  "id": 1,
  "username": "mgonzalez0",
  "image": "https://robohash.org/placeatsintsoluta.bmp?size=50x50&set=set1"
}, {
  "id": 2,
  "username": "kcarpenter1",
  "image": "https://robohash.org/velitquodquis.bmp?size=50x50&set=set1"
}, {
  "id": 3,
  "username": "ggomez2",
  "image": "https://robohash.org/inblanditiisdebitis.bmp?size=50x50&set=set1"
}, {
  "id": 4,
  "username": "dwallace3",
  "image": "https://robohash.org/etrerumsed.bmp?size=50x50&set=set1"
}, {
  "id": 5,
  "username": "mjackson4",
  "image": "https://robohash.org/doloremabomnis.bmp?size=50x50&set=set1"
}, {
  "id": 6,
  "username": "ajames5",
  "image": "https://robohash.org/autvelitnon.bmp?size=50x50&set=set1"
}, {
  "id": 7,
  "username": "msanders6",
  "image": "https://robohash.org/enimetmodi.bmp?size=50x50&set=set1"
}, {
  "id": 8,
  "username": "lcarr7",
  "image": "https://robohash.org/suntnecessitatibusconsequatur.jpg?size=50x50&set=set1"
}, {
  "id": 9,
  "username": "ggibson8",
  "image": "https://robohash.org/atesteum.png?size=50x50&set=set1"
}, {
  "id": 10,
  "username": "pperry9",
  "image": "https://robohash.org/sednontenetur.jpg?size=50x50&set=set1"
}];

var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={this.props.image} className="img img-responsive center-block" />
		)
	}
});

var ProfileInfo = React.createClass({
	render: function() {
		return (
			<div>
				<h3>{this.props.id}</h3>
				<h4>{this.props.username}</h4>
			</div>
		)
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href={"https://www.github.com/" + this.props.username}>
					{this.props.username}
				</Link>
			</div>
		)
	}
});


var HelloWorld = React.createClass({
	render: function () {
		return (
			<div>
				HelloWorld! My name is {this.props.name}
			</div>
		)
	}
});

var Link = React.createClass({
	changeUrl(){
		window.location.replace(this.props.href)
	},

    render() {
        return (
            <span
            style={{color:'blue', cursor:'pointer'}}
            onClick={this.changeUrl}
            >
            	{this.props.children}
            </span>
        );
    }
});

var Avatar = React.createClass({
	render: function() {

		return (
			<div className="col-md-4">
				<ProfilePic image={this.props.user.image} />
				<ProfileInfo username={this.props.user.username} id={this.props.id} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
});

var Container = React.createClass({
	render: function() {
		const cont = this.props.data.map( (user) => {
			user.key = Date.now() + user.id
			return <Avatar user={user} key={user.key} />
		})
		return (
			<div className="row">
				{cont}
			</div>
		)
	}
});

ReactDOM.render( routes, document.getElementById('app'));


