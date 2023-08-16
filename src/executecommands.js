function executeCommands(SpaceCraft,commands){
    for (const command of commands) {
        if (command === 'f') {
            SpaceCraft.moveForward();
        } else if (command === 'b') {
            SpaceCraft.moveBackward();
        } else if (command === 'l') {
            SpaceCraft.moveLeft();
        } else if (command === 'r') {
            SpaceCraft.moveRight();
        } else if (command === 'u') {
            SpaceCraft.moveUp();
        } else if (command === 'd') {
            SpaceCraft.moveDown();
        }
    }

    return {
        finalPosition: [SpaceCraft.x, SpaceCraft.y, SpaceCraft.z],
        finalDirection: SpaceCraft.direction
    };
}
module.exports=executeCommands;