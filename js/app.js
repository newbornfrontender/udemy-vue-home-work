new Vue({
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame() {
      const fullHealth = 100;

      this.gameIsRunning = true;
      this.playerHealth = fullHealth;
      this.monsterHealth = fullHealth;
    },
    attack() {
      this.monsterHealth -= this.calculateDamage(3, 10);
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
    giveUp() {},
    monsterAttacks() {
      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();
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