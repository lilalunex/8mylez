import Plugin from 'src/plugin-system/plugin.class'

let buybutton = document.getElementById('productDetailPageBuyProductForm');

export default class ButtonBuy extends Plugin {
	init() {
		console.info('btn-buy.js init')

		// buybutton.addEventListener("click",
			// document.getElementsByClassName("cart-offcanvas").classList.remove("show")
		// );


		this.createElement();
	}

	createElement() {
		console.info('btn-buy.js createElement')
		// console.info(this.el)

	}
}