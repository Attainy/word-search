import View from "./Component.js";

export default class extends View {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
		<h1>Welcome!</h1>
		<p>This is Dashboard page.</p>
		<a href="/game" data-link>
			View game
		</a>
		<a href="/admin" data-link>
			View admin
		</a>
	`
  }
}
