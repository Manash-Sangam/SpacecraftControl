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

    //Testing For left rotation of spacecraft
    it('should rotate spacecraft left correctly', () => {
        const spacecraft = new Spacecraft(0, 0, 0, 'N');
        spacecraft.moveLeft();
        expect(spacecraft.direction).to.equal('W');
    });

    //Testing for right rotation of spacecraft
    it('should rotate spacecraft right correctly', () => {
        const spacecraft = new Spacecraft(0, 0, 0, 'N');
        spacecraft.moveRight();
        expect(spacecraft.direction).to.equal('E');
    });

        //Testing if spacecraft rotates upward
        it('should rotate upwards correctly', () => {
            const spacecraft = new Spacecraft(0, 0, 0, 'N');
            spacecraft.moveUp();
            expect(spacecraft.direction).to.equal('Up');
        });
    
        //Testing if the spacecraft rotates downward
        it('should rotate downwards correctly', () => {
            const spacecraft = new Spacecraft(0, 0, 0, 'Up');
            spacecraft.moveDown();
            expect(spacecraft.direction).to.equal('N');
        });
    
});

