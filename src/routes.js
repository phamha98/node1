'use strict'
import productsCtrl from './controllers.js'
export function routes (app) {
  app.route('/products').get(productsCtrl.get).post(productsCtrl.store)
  app
    .route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete)
}
