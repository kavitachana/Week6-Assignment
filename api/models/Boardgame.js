/**
 * Boardgame.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	gameName: {
  		type: 'string',
  		unique: true,
  		required: true
  	},

  	countryOrigin: {
  		type: 'string',
  		required: true
  	},

  	yearDeveloped: {
  		type: 'string',
  		required: true
  	},

  	creator: {
  		type: 'string'
  	},

	brand: {
  		type: 'string',
  		required: true
  	},

  	gameType: {
  		type: 'string',
  		required: true
  	},

  	minNumOfPlayers: {
  		type: 'integer'
  	},

	maxNumOfPlayers: {
  		type: 'integer'
  	}

  }
};

