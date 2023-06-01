import ButtonBuy from "./js/btn-buy";

// Damit wir ganz sicher das richtige Element ansprechen, hänge ich das hier an die ID an
window.PluginManager.register('ButtonBuy', ButtonBuy, '#productDetailPageBuyProductForm')

console.info('main.js loaded')