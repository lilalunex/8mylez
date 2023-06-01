import AddToCart from 'src/plugin/add-to-cart/add-to-cart.plugin'
import DomAccess from 'src/helper/dom-access.helper'
import HttpClient from 'src/service/http-client.service'

export default class ButtonBuy extends AddToCart {

	init() {
		this.PluginManager = window.PluginManager
		this._client = new HttpClient(window.accesKey, window.contextToken)

		// Den Gesamtbeitrag holen um ihn später zu manipulieren
		this._cartValue = DomAccess.querySelector(document, '.header-cart')

		// Der Button der animiert werden soll
		this._addToCartButton = DomAccess.querySelector(document, '.btn.btn-primary.btn-buy')

		// Die anzuzeigenden Texte holen
		this._snippetDefault = DomAccess.querySelector(document, '.btn-buy').innerHTML
		this._snippetAnimation = DomAccess.querySelector(document, '.btn-buy-animation').innerHTML

		// Methoden vererben
		super.init()
	}

	// Die gewünschte Animation
	_doAnimation() {
		this._addToCartButton.classList.add('putting-in-cart-animation')
		this._addToCartButton.innerHTML = this._snippetAnimation
		window.setTimeout(() => {
			this._addToCartButton.classList.remove('putting-in-cart-animation')
			this._addToCartButton.innerHTML = this._snippetDefault
		}, 1000)
	}

	// Das öffnen des Canvas verhindern indem wir die Funktion überschreiben
	_openOffCanvasCart(instance, requestUrl, formData) {
		this._client.post(requestUrl, formData, this._afterAddItemToCart.bind(this))
	}

	// Unsere Animation aufrufen nachdem der In den Warenkorb Button geklickt wurde
	// Und den Gesamtbeitrag aktualisieren
	_afterAddItemToCart() {
		this._doAnimation()
		this._refreshCardValue()
	}

	// Den Gesamtbeitrag aktualisieren
	_refreshCardValue() {
		const cartWidgetEl = DomAccess.querySelector(this._cartValue, '[data-cart-widget]')
		const cartWidgetInstance = this.PluginManager.getPluginInstanceFromElement(cartWidgetEl, 'CartWidget')
		cartWidgetInstance.fetch()
	}
}