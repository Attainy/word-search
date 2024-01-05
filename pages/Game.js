import View from "./Component.js";

export default class extends View {
  constructor() {
    super();
    this.setTitle("game");
  }

  async getHtml() {
    return `
      <h1>game</h1>
      <p>You're viewing the game!</p>
    `;
  }
}