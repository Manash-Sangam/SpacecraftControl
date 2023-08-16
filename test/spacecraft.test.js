const { expect } = require('chai');
const Spacecraft = require('../src/spacecraft');

describe('Spacecraft Class', () => {
    //Testing if the spacecraft builds correctly of not
    it('should initialize with correct position and direction', () => {
        const spacecraft = new Spacecraft(0, 0, 0, 'N');
        expect(spacecraft.x).to.equal(0);
        expect(spacecraft.y).to.equal(0);
        expect(spacecraft.z).to.equal(0);
        expect(spacecraft.direction).to.equal('N');
    });

    //Testing if the spacecraft moves forward correctly or not
    it('should move spacecraft forward correctly', () => {
        const spacecraft = new Spacecraft(0, 0, 0, 'N');
        spacecraft.moveForward();
        expect(spacecraft.y).to.equal(1);
    });


    //Testing if the spacecraft moves backwared correctly or not
    it('should move spacecraft backward correctly', () => {
        const spacecraft = new Spacecraft(0, 0, 0, 'N');
        spacecraft.moveBackward();
        expect(spacecraft.y).to.equal(-1);
    });
});

