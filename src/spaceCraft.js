class Spacecraft {
  //Spacecraft Structure
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
    this.horizontalDirection = direction;
  }

  //Move Forward
  moveForward() {
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
      this.horizontalDirection = 'W';
    } else if (this.direction === 'S') {
      this.direction = 'E';
      this.horizontalDirection = 'E';
    } else if (this.direction === 'E') {
      this.direction = 'N';
      this.horizontalDirection = 'N';
    } else if (this.direction === 'W') {
      this.direction = 'S';
      this.horizontalDirection = 'S';
    }

    // Special Cases to Handle Up and Down with the help of Horizontal Direction of the Spacecraft
    else if (this.direction === 'U') {
      if (this.horizontalDirection === 'N') {
        this.direction = 'W';
        this.horizontalDirection = 'W';
      } else if (this.horizontalDirection === 'S') {
        this.direction = 'E';
        this.horizontalDirection = 'E';
      } else if (this.horizontalDirection === 'E') {
        this.direction = 'N';
        this.horizontalDirection = 'N';
      } else if (this.horizontalDirection === 'W') {
        this.direction = 'S';
        this.horizontalDirection = 'S';
      }
    } else if (this.direction === 'D') {
      if (this.horizontalDirection === 'N') {
        this.direction = 'E';
        this.horizontalDirection = 'E';
      } else if (this.horizontalDirection === 'S') {
        this.direction = 'W';
        this.horizontalDirection = 'W';
      } else if (this.horizontalDirection === 'E') {
        this.direction = 'S';
        this.horizontalDirection = 'S';
      } else if (this.horizontalDirection === 'W') {
        this.direction = 'N';
        this.horizontalDirection = 'N';
      }
    }
  }

  //Rotate in the Right Direction
  moveRight() {
    if (this.direction === 'N') {
      this.direction = 'E';
      this.horizontalDirection = 'E';
    } else if (this.direction === 'S') {
      this.direction = 'W';
      this.horizontalDirection = 'W';
    } else if (this.direction === 'E') {
      this.direction = 'S';
      this.horizontalDirection = 'S';
    } else if (this.direction === 'W') {
      this.direction = 'N';
      this.horizontalDirection = 'N';
    }

    //Special Cases to Handle Up and Down with the help of Horizontal Direction of the Spacecraft
    else if (this.direction === 'U') {
      if (this.horizontalDirection === 'N') {
        this.direction = 'E';
        this.horizontalDirection = 'E';
      } else if (this.horizontalDirection === 'S') {
        this.direction = 'W';
        this.horizontalDirection = 'W';
      } else if (this.horizontalDirection === 'E') {
        this.direction = 'S';
        this.horizontalDirection = 'S';
      } else if (this.horizontalDirection === 'W') {
        this.direction = 'N';
        this.horizontalDirection = 'N';
      }
    } else if (this.direction === 'D') {
      if (this.horizontalDirection === 'N') {
        this.direction = 'W';
        this.horizontalDirection = 'W';
      } else if (this.horizontalDirection === 'S') {
        this.direction = 'E';
        this.horizontalDirection = 'E';
      } else if (this.horizontalDirection === 'E') {
        this.direction = 'N';
        this.horizontalDirection = 'N';
      } else if (this.horizontalDirection === 'W') {
        this.direction = 'S';
        this.horizontalDirection = 'S';
      }
    }
  }

  //Rotate in the Up Direction
  moveUp() {
    if(this.direction === 'U'){
        this.direction = 'D';
    }
    else {
        this.direction = 'U';
    }
  }

  //Rotate in the Down Direction
  moveDown() {
    this.direction = 'D';
  }
}

module.exports = Spacecraft;
