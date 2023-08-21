const { expect } = require('chai');
const Spacecraft = require('../src/spaceCraft');

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
    expect(spacecraft.direction).to.equal('U');
  });

  //Testing if the spacecraft rotates downward
  it('should rotate downwards correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'S');
    spacecraft.moveDown();
    expect(spacecraft.direction).to.equal('D');
  });

  //Additional Test Cases to Handle corner cases while moving left
  it('should rotate west when it rotates left from north-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.moveUp();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('W');
  });

  it('should rotate east when it rotates left from south-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'S');
    spacecraft.moveUp();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('E');
  });

  it('should rotate north when it rotates left from east-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'E');
    spacecraft.moveUp();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('N');
  });

  it('should rotate south when it rotates left from west-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'W');
    spacecraft.moveUp();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('S');
  });

  it('should rotate west when it rotates left from south-down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'S');
    spacecraft.moveDown();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('W');
  });

  it('should rotate east when it rotates left from north-down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.moveDown();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('E');
  });

  it('should rotate south when it rotates left from east-down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'E');
    spacecraft.moveDown();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('S');
  });

  it('should rotate north when it rotates left from west-down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'W');
    spacecraft.moveDown();
    spacecraft.moveLeft();
    expect(spacecraft.direction).to.equal('N');
  });

  //Additional Test Cases to Handle corner cases while moving Right
  it('should rotate east when it rotates right from north-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.moveUp();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('E');
  });

  it('should rotate west when it rotates right from south-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'S');
    spacecraft.moveUp();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('W');
  });

  it('should rotate south when it rotates right from east-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'E');
    spacecraft.moveUp();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('S');
  });

  it('should rotate north when it rotates right from west-up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'W');
    spacecraft.moveUp();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('N');
  });

  it('should rotate east when it rotates right from south-down correctly', () => {
    const spacecraft = new Spacecraft('0', '0', 0, 'S');
    spacecraft.moveDown();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('E');
  });

  it('should rotate west when it rotates right from north-down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.moveDown();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('W');
  });

  it('should rotate north when it rotates right from east-down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'E');
    spacecraft.moveDown();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('N');
  });

  it('should rotate south when it rotates right from west-down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'W');
    spacecraft.moveDown();
    spacecraft.moveRight();
    expect(spacecraft.direction).to.equal('S');
  });

  it('should rotate down when moving from Up direction to Up direction',()=>{
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.moveUp();
    spacecraft.moveUp();
    expect(spacecraft.direction).to.equal('D');
  })
});
