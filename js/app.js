new Vue({
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame() {
      const fullHealth = 100;

      this.gameIsRunning = true;
      this.playerHealth = fullHealth;
      this.monsterHealth = fullHealth;
    },
    attack() {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}`,
      });
      if (this.checkWin()) {
        return;
      };

      this.monsterAttacks();
    },
    specialAttack() {
      this.monsterHealth -= this.calculateDamage(10, 20);
      if (this.checkWin()) {
        return;
      };

      this.monsterAttacks();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        thsi.playerHealth = 100;
      };
      this.monsterAttacks();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    monsterAttacks() {
      let damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: true,
        text: `Monster hits Player for ${damage}`,
      });
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.monsterHealth < 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        };

        return true;
      } else if (this.playerHealth < 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        };

        return true;
      };

      return false;
    },
  },
}).$mount('#app');
