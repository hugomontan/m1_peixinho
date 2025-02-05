var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixe_serio.png');
    this.load.image('milho', 'assets/milho.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);

    // guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    // transformando a variável
    peixinho.setFlip(true, false);

    // adicionando o milho no canto direito com tamanho reduzido
    this.add.image(790, 300, 'milho')
        .setOrigin(1, 0.5) // Canto direito
        .setScale(0.5);    // Reduzindo o tamanho pela metade
}

function update() {
    // adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
