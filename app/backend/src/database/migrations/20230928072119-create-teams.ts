import { QueryInterface, DataTypes, Model } from 'sequelize';
import teamInt from '../../Interfaces/Team-int';
export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<teamInt>>('teams', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teamName: {
        type: DataTypes.STRING,
        field: 'team_name',
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('teams');
  },
};
