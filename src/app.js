const app = Vue.createApp({
  data() {
    return {
      round: 0,
      turnMarker: 1,
      playerOne: {
        settlers: 0
      },
      playerTwo: {
        settlers: 0
      }
    };
  },
  methods: {
    startGame() {
      this.round = 1

      this.playerOne.settlers = 100;
      this.playerTwo.settlers = 100;
    },
    help() {
      alert("[SHOW HELP SCREEN]")
    }
  }
});

app.mount("#game");