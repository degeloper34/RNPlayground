# Welcome to RNPlayground

It’s an e-commerce tutorial mobile app created by degeloper (Ege Barış Akyürek)

## Tech Stack

- CLI: Expo
- Language: TypeScript, JavaScript
- State Management: Context API
- Backend: https://fakestoreapi.com
- Testing: Jest
- HTTP Client: Axios
- Navigation: react-navigation

## Features

- Login with prefilled username and password. (username: johnd, password: m38rmF$)
- Auto-Login if you already logged in before.
- Logout.
- Expo-secure-store for encrypt and securely store the user token.
- All products screen.
- Category screen filtered by product category.
- Search product by name in category screen.
- Product detail modal.
- Add to cart the product with quantity from the product detail screen.
- Cart screen for the products whose already been added to the basket.
- Discount calculations for the categories jewelery and electronics.
- SubTotal and Total price calculations.
- DeepLinking for the spesific product and category screens.
- Unit and Snapshot tests for components and screens.
- SplashScreen, loading and empty states
- Error handler for the service requests

## Deep Linking

- npx uri-scheme open "exp://127.0.0.1:19000/--/product/1" --ios
- npx uri-scheme open "exp://127.0.0.1:19000/--/category/jewelery" --ios
