import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';
  
  class Matche extends Model<InferAttributes<Matche>,
  InferCreationAttributes<Matche>> {
    declare id: CreationOptional<number>;
    declare homeTeamId: number;
    declare homeTeamGoals: number;
    declare awayTeamId: number;
    declare awayTeamGoals: number;
    declare inProgress: boolean;
  }
  
  Matche.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      homeTeamId: {
        type: DataTypes.INTEGER,
      },
      homeTeamGoals: {
        type: DataTypes.INTEGER,
      },
      awayTeamId: {
        type: DataTypes.INTEGER,
      },
    awayTeamGoals: {
        type: DataTypes.INTEGER,
      },
    inProgress: {
        type: DataTypes.BOOLEAN,
    },
    }, {
      sequelize: db,
      modelName: 'matche',
      timestamps: false,
    }
  );
  
  export default Matche;
  