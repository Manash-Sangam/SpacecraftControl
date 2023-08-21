const { expect } = require('chai');
const Spacecraft = require('../src/spaceCraft');
const executeCommands = require('../src/executecommands');

describe('executeCommands Function', () => {
  it('should execute commands correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    const result = executeCommands(spacecraft, ['f', 'r', 'u', 'b', 'l']);
    expect(result.finalPosition).to.deep.equal([0, 1, -1]);
    expect(result.finalDirection).to.equal('N');
  });
});
