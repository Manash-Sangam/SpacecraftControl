class Spacecraft {
    //Spacecraft Structur
    constructor(x, y, z, direction) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction;
    }

    //Move Forward
    moveForward(){
        if (this.direction === 'N') {
            this.y += 1;
        } else if (this.direction === 'S') {
            this.y -= 1;
        } else if (this.direction === 'E') {
            this.x += 1;
        } else if (this.direction === 'W') {
            this.x -= 1;
        } else if (this.direction === 'Up') {
            this.z += 1;
        } else if (this.direction === 'Down') {
            this.z -= 1;
        }
    }
    
    //Move Backward
    moveBackward() {
        if (this.direction === 'N') {
            this.y -= 1;
        } else if (this.direction === 'S') {
            this.y += 1;
        } else if (this.direction === 'E') {
            this.x -= 1;
        } else if (this.direction === 'W') {
            this.x += 1;
        } else if (this.direction === 'Up') {
            this.z -= 1;
        } else if (this.direction === 'Down') {
            this.z += 1;
        }
    }

    //Rotate in the Left Direction
    moveLeft() {
        if (this.direction === 'N') {
            this.direction = 'W';
        } else if (this.direction === 'S') {
            this.direction = 'E';
        } else if (this.direction === 'E') {
            this.direction = 'N';
        } else if (this.direction === 'W') {
            this.direction = 'S';
        }
    }

    //Rotate in the Right Direction
    moveRight() {
        if (this.direction === 'N') {
            this.direction = 'E';
        } else if (this.direction === 'S') {
            this.direction = 'W';
        } else if (this.direction === 'E') {
            this.direction = 'S';
        } else if (this.direction === 'W') {
            this.direction = 'N';
        }
    }
}

module.exports = Spacecraft;