const { expect } = require('chai');
const Spacecraft = require('../src/spacecraft');

describe('Spacecraft Class', () => {
    it('should initialize with correct position and direction', () => {
        const spacecraft = new Spacecraft(0, 0, 0, 'N');
        expect(spacecraft.x).to.equal(0);
        expect(spacecraft.y).to.equal(0);
        expect(spacecraft.z).to.equal(0);
        expect(spacecraft.direction).to.equal('N');
    });

});

