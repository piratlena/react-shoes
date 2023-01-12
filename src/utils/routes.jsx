import Admin from './pages/Admin'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import WishlistPage from './consts/WishlistPage'
import { PROFILE_ROUTE, CART_ROUTE, HOME_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, WISHLIST_ROUTE } from './utils/consts'


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: CART_ROUTE,
        Component: CartPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: WISHLIST_ROUTE + '/:id',
        Component: WishlistPage
    },
    {
        path: PROFILE_ROUTE + '/:id',
        Component: ProductPage
    }
]