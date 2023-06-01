import ButtonBuy from "./js/btn-buy"

// Abfrage damit die Animation nur in der Produkt-Detail-Seite passiert
if (document.getElementsByClassName("product-detail").length > 0) {
	window.PluginManager.override('AddToCart', ButtonBuy, '[data-add-to-cart]')
}