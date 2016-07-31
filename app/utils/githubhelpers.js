import axios from 'axios';

function getUserInfo (username) {
	var id = "CLIENT_ID";
	var sec = "CLIENT_SECRET";
	var params = "?client_id=" + id + "&client_secret=" + sec;

	return axios.get("https://api.github.com/users/" + username)
}

function getRepos(username) {
	return axios.get("https://api.github.com/users/" + username + "/repos?per_page=100")
}


function getTotalStars(repos) {
	return repos.data.reduce( (prev, current) => {
		return prev + current.stargazers_count
	}, 0)
	return axios.get("https://api.github.com/users/" + username + "/repos?per_page=100")
}


function getPlayersData(player) {
	return getRepos(player.login).then(getTotalStars).then( (stars) => {
		return {
			followers: player.followers,
			totalstars: stars
		}
	})
}

function calculateScores(players) {
	return [
		players[0].followers * 3 + players[0].totalstars,
		players[1].followers * 3 + players[1].totalstars
	]
}

var helpers = {
	getPlayersInfo: function (players) {
		return axios.all(players.map( (username) => { return getUserInfo(username) })).then( function (info) {
			return info.map( (user) => {
				return user.data;
			})
		}).catch( (err) => {
			console.warn('Error in getting plyaers info.', err)
		});
	},

	battle: function (players) {
		var playerOneData = getPlayersData(players[0]);
		var playerTwoData = getPlayersData(players[1]);

		return axios.all([
			playerOneData, playerTwoData
		]).then(calculateScores).catch((err)=>{
			console.warn("Error in getPlayersInfo ", err)
		})

	}
};


module.exports = helpers;