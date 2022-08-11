const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('hotel', {

  	id: {
  		type: DataTypes.INTEGER,
  		autoIncrement: true,
  		primaryKey: true
  	},

  	name: {
  		type: DataTypes.STRING,
  		allowNull: false
  	},

  	category: {
  		type: DataTypes.INTEGER
  	},

  	price: {
  		type: DataTypes.INTEGER
  	},

  	photos: {
  		type: DataTypes.JSON
  	},

  	ratings: {
  		type: DataTypes.JSON
  	},

    averageRating: {
      type: DataTypes.VIRTUAL,
      get(){
        let totalRatings = this.ratings.length;
        let totalScore = this.ratings.reduce( (total, rating) => total + rating.score, 0 )
        return Math.floor(totalScore / totalRatings);
      }
    }

  },
  {
  	timestamps: false
  });
};