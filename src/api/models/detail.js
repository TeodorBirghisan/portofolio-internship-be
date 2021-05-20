'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detail.hasOne(models.Ausbildung, {
        foreignKey: 'ausbildungId',
        onDelete: 'CASCADE',
      });
    }
  }
  Detail.init(
    {
      title: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
      startyear: DataTypes.INTEGER,
      endyear: DataTypes.INTEGER,
      numberOfMonths: DataTypes.INTEGER,
      ausbildungId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Detail',
    }
  );
  return Detail;
};
