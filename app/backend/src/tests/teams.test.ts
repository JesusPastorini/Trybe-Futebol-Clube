import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamService';

chai.use(chaiHttp);
const { expect } = chai;

describe('TeamController', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should get all teams', async () => {
    const teams = [{ id: 1, teamName: 'Team A' }, { id: 2, teamName: 'Team B' }];
    sinon.stub(TeamService, 'getAllTeams').resolves(teams as any);

    const res = await chai.request(app).get('/teams');
    expect(res.status).to.equal(200);
    expect(res.body).to.eql(teams);
  });

  it('should get a team by ID', async () => {
    const team = { id: 1, teamName: 'Team A' };
    const teamId = 1;

    sinon.stub(TeamService, 'getTeamById').withArgs(teamId).resolves(team as any);

    const res = await chai.request(app).get(`/teams/${teamId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.eql(team);
  });

  it('should return 404 for an invalid team ID', async () => {
    const invalidTeamId = 999;
    sinon.stub(TeamService, 'getTeamById').withArgs(invalidTeamId).resolves(null);

    const res = await chai.request(app).get(`/teams/${invalidTeamId}`);
    expect(res.status).to.equal(404);
  });

  it('should return 400 for an invalid team ID format', async () => {
    const invalidTeamId = 'invalid';
    const res = await chai.request(app).get(`/teams/${invalidTeamId}`);
    expect(res.status).to.equal(400);
  });
});
