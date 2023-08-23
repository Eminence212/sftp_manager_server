"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Acknowledgement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Acknowledgement.belongsTo(models.Customer, {
        foreignKey: "customerId",
      });
    }
  }
  Acknowledgement.init(
    {
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      fileModifyTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileAccessTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Acknowledgement",
    }
  );
  return Acknowledgement;
};
