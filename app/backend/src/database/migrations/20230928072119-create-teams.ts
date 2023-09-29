import { QueryInterface, DataTypes, Model } from 'sequelize';
import ITem from '../../Interfaces/Team-int';
export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model<ITem>>('teams', {
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

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('teams');
  },
};
