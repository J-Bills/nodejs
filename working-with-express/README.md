# Express.js Routing & Middleware Practice

This project demonstrates how to build a simple web server using **Node.js** and **Express**, with structured routing, static HTML file delivery, basic middleware, and error handling.

---

## 📁 Project Structure

```
.
├── app.js                # Main entry file for the Express server
├── routes/
│   ├── admin.js          # Routes prefixed with /admin
│   └── shop.js           # Main shop routes
├── helpers/
│   └── path.js           # Utility for resolving the base directory
├── views/
│   ├── add-product.html  # HTML form served by /admin/add-product
│   ├── shop.html         # HTML page served by /shop
│   └── 404.html          # Fallback page for undefined routes
```

---

## 🚀 What This Project Covers

### ✅ Express Middleware

- Used `app.use()` to define general middleware.
- Used `body-parser` middleware to parse form submissions.
- Demonstrated how middleware flows with `next()`.

### ✅ Routing

- Routes are separated into two files:
  - `admin.js` handles routes under `/admin`
  - `shop.js` handles all general user-facing routes
- Both route files use `express.Router()` for modularity.

### ✅ HTML File Handling with `res.sendFile()`

- Served static HTML files using `path.join()` and `res.sendFile()`.
- Created helper module `path.js` to dynamically get the base directory using:
  ```js
  module.exports = path.dirname(require.main.filename);
  ```

### ✅ 404 Page

- Added a final `app.use()` middleware as a **catch-all 404 route**:
  ```js
  app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
  });
  ```

---

## 🧠 Key Learnings (from inline comments)

- **Middleware** executes in order, and you must call `next()` to pass control to the next handler.
- **Request body parsing** is handled by `body-parser.urlencoded()`.
- `res.sendFile()` requires absolute paths, so we use `path.join(__dirname, ...)` or a shared `rootDir`.
- Routes are filtered using path prefixes (e.g., `app.use('/admin', adminRoutes)`).
- The last `app.use()` without a path acts as a default fallback route (e.g., 404).

---

## 📚 Technologies Used

- Node.js
- Express.js
- body-parser
- path module

---

## ✅ Example Snippets

### `admin.js` Route File
```js
router.get('/add-product', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
```

### `shop.js` Route File
```js
router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
```

---
