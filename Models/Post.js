const { sequelizePg, DataTypes, Model } = require('../oracle-db-connection');
// const { Model} = require('sequelize');
const Comment = require('../Models/Comment');
class Post extends Model {
  static staticMethod () {
    console.log('Running now !')
  }
  getFullPost() {
    return this.title + ' \n ' + this.content;
  }
}


Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            length: 100,
            allowNull: false 
        },
        content: {
            type: DataTypes.STRING,
            length: 2000,
            allowNull: false 
        }
    },
    {
        sequelize: sequelizePg,
        freezeTableName: false,
    }
);

Post.sync();

module.exports = Post;