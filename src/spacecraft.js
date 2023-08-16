class Spacecraft {
    //Spacecraft Structur
    constructor(x, y, z, direction) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction;
        this.horizontaldirection = direction;
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
        } else if (this.direction === 'U') {
            this.z += 1;
        } else if (this.direction === 'D') {
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
        } else if (this.direction === 'U') {
            this.z -= 1;
        } else if (this.direction === 'D') {
            this.z += 1;
        }
    }

    //Rotate in the Left Direction
    moveLeft() {
        if (this.direction === 'N') {
            this.direction = 'W';
            this.horizontaldirection='W'
        } else if (this.direction === 'S') {
            this.direction = 'E';
            this.horizontaldirection='E';
        } else if (this.direction === 'E') {
            this.direction = 'N';
            this.horizontaldirection='N';
        } else if (this.direction === 'W') {
            this.direction = 'S';
            this.horizontaldirection='S'
        } 
        
        // Special Cases to Handle Up and Down with the help of Horizontal Direction of the Spacecraft
        else if(this.direction==='U'){ 
            if (this.horizontaldirection === 'N') {
                this.direction = 'W';
                this.horizontaldirection='W'
            } else if (this.horizontaldirection === 'S') {
                this.direction = 'E';
                this.horizontaldirection='E';
            } else if (this.horizontaldirection === 'E') {
                this.direction = 'N';
                this.horizontaldirection='N';
            } else if (this.horizontaldirection === 'W') {
                this.direction = 'S';
                this.horizontaldirection='S'
            }
        } else if(this.direction === 'D'){
            if (this.horizontaldirection === 'N') {
                this.direction = 'E';
                this.horizontaldirection='E'
            } else if (this.horizontaldirection === 'S') {
                this.direction = 'W';
                this.horizontaldirection='W';
            } else if (this.horizontaldirection === 'E') {
                this.direction = 'S';
                this.horizontaldirection='S';
            } else if (this.horizontaldirection === 'W') {
                this.direction = 'N';
                this.horizontaldirection='N'
            }
        }
    }

    //Rotate in the Right Direction
    moveRight() {
        if (this.direction === 'N') {
            this.direction = 'E';
            this.horizontaldirection='E'
        } else if (this.direction === 'S') {
            this.direction = 'W';
            this.horizontaldirection='W';
        } else if (this.direction === 'E') {
            this.direction = 'S';
            this.horizontaldirection='S';
        } else if (this.direction === 'W') {
            this.direction = 'N';
            this.horizontaldirection='N'
        } 
        
        //Special
        else if(this.direction==='U'){
            if (this.horizontaldirection === 'N') {
                this.direction = 'E';
                this.horizontaldirection='E'
            } else if (this.horizontaldirection === 'S') {
                this.direction = 'W';
                this.horizontaldirection='W';
            } else if (this.horizontaldirection === 'E') {
                this.direction = 'S';
                this.horizontaldirection='S';
            } else if (this.horizontaldirection === 'W') {
                this.direction = 'N';
                this.horizontaldirection='N'
            }
        } else if(this.direction === 'D'){
            if (this.horizontaldirection === 'N') {
                this.direction = 'W';
                this.horizontaldirection='W'
            } else if (this.horizontaldirection === 'S') {
                this.direction = 'E';
                this.horizontaldirection='E';
            } else if (this.horizontaldirection === 'E') {
                this.direction = 'N';
                this.horizontaldirection='N';
            } else if (this.horizontaldirection === 'W') {
                this.direction = 'S';
                this.horizontaldirection='S'
            }
        }
    }

        //Rotate in the Up Direction
        moveUp() {
            this.direction='U';
        }
    
        //Rotate in the Down Direction
        moveDown(){
            this.direction='D';
        }
}

module.exports = Spacecraft;