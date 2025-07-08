# What's MVC?

MVC stands for **Model-View-Controller** — a software design pattern that helps structure application code and enforce **separation of concerns**.

---

## Separation of Concerns

### 🧠 Models
- Represent the **data** in your application.
- Handle data operations like **saving**, **fetching**, and **querying**.
- In this project, `models/product.js` handles the creation and storage of product data.
  - It includes logic to:
    - Parse incoming form data
    - Store data in memory (or a file/db)
    - Retrieve product lists

### 🎨 Views
- Define **what the users see**.
- Consist of HTML templates rendered via the controller.
- Views are completely **decoupled from business logic**.
  - For example:
    - The form to add a product is rendered from `views/add-product.html`
    - The product list is rendered from `views/shop.html`

### 🎮 Controllers
- Connect **models** and **views**.
- Contain **application logic** that interprets user input and updates models or views accordingly.
- In this project:
  - The `routes/admin.js` file uses controller logic to process form submissions.
  - The `routes/shop.js` file connects views with product data.

---

## 🧱 Project Overview

### Entry Point

- `app.js` sets up the Express application:
  - Imports body-parser and routes
  - Registers middleware
  - Uses controllers to serve views
  - Includes a catch-all error handler via `controllers/error.js`

### Routes

- `routes/admin.js` handles routes under `/admin`, including:
  - Displaying a product form (`GET /admin/add-product`)
  - Handling product submission (`POST /admin/add-product`)
- `routes/shop.js` handles the front-facing `/` route:
  - Displays a list of products from the model

---

## 🔁 How It Works

1. **User visits `/admin/add-product`**
   - View (HTML form) is rendered
   - Submits a POST request to `/admin/add-product`

2. **Controller receives POST**
   - Extracts data from the request body
   - Passes it to the `Product` model for saving

3. **User visits `/`**
   - Controller pulls product list from `Product` model
   - Renders `shop.html` with the product data

---

## 🚧 Error Handling

- `controllers/error.js` contains a fallback controller for undefined routes.
- Used in `app.js` as a final middleware:
  ```js
  app.use(errorController.get404);
  ```

---

## 📁 File Structure

```
.
├── app.js                  # Express entry point
├── controllers/
│   └── error.js            # Handles 404 responses
├── models/
│   └── product.js          # Product model logic
├── routes/
│   ├── admin.js            # Admin routes (add product)
│   └── shop.js             # Shop routes (list products)
├── views/
│   ├── add-product.html    # View for adding a product
│   └── shop.html           # View for listing products
```

---

## 🧠 Key Learnings

- How to apply the **MVC pattern** in a Node/Express app.
- How to separate concerns between data, logic, and presentation.
- How to use Express middleware and route-specific logic.
- How to use `res.sendFile()` and `path.join()` for file-based rendering.
- How to create and connect custom models and controllers.

---

Let me know if you'd like this saved as a file or updated to include EJS view engine support!
