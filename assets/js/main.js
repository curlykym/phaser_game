var game;

// Create new game instance 600px wide and 450px tall
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First parameter is how state will be called
// Second parameter is an object with methods needed for state functionality
game.state.add('Menu', Menu);

game.state.start('Menu');