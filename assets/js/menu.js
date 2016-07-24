var Menu = {
  
  preload : function() {
    // Load images for creating sprites based on them
    // 1st argument is how image will be refered to
    // 2nd argument is path to file
    game.load.image('menu', '.assets/images/menu.png');
  },
  
  create: function () {
    // Add sprite for game's logo
    // Parameters are : X, Y, image name
    this.add.sprite(0, 0, 'menu');
  }
  
};