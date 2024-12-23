const { sequelizePg, DataTypes, Model } = require('../oracle-db-connection');

class Comment extends Model { 
    static () {
        console.log('Comment model static')
    }
}
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        length: 2000,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelizePg,
    freezeTableName: false,
});

Comment.sync();

module.exports = Comment;