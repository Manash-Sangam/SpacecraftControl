# Chandrayaan 3 Spacecraft Control Program

Welcome to the Chandrayaan 3 Spacecraft Control Program! This program allows you to control the movements and orientations of the Chandrayaan 3 lunar spacecraft using a set of commands.

## Getting Started

To get started with the spacecraft control program, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Manash-Sangam/SpacecraftControl.git
   cd SpacecraftControl
   ```

2. Install the dependencies using 
    ```bash
    npm install
    ```

# Usage:
The spacecraft control program provides a Spacecraft class with methods for movement, rotation, and angle adjustment, as well as an executeCommands function to control the spacecraft using an array of commands.

# Create Spacecraft:

```bash
const Spacecraft = require('./src/spacecraft');
const spacecraft = new Spacecraft(0, 0, 0, 'N');
```

# Execute Commands Using:

```bash
const executeCommands = require('./src/executeCommands');

const commands = ['f', 'r', 'u', 'b', 'l'];
const result = executeCommands(spacecraft, commands);

console.log('Final Position:', result.finalPosition);
console.log('Final Direction:', result.finalDirection);
```

# Test Using:

```bash
npx mocha
```