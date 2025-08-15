# 🛒 scraping-amazon

**scraping-amazon** is a simple application that allows you to search for Amazon products based on a keyword, retrieving details such as title, rating, number of reviews, and image using **web scraping** via API.  
The project is divided into **Backend** (Bun) and **Frontend** (Vite + Vanilla JavaScript).

🔗 Access the production version: [https://scraping-amazon.vercel.app](https://scraping-amazon.vercel.app)

---

## 🚀 Features

- Search for Amazon products by keyword
- Extract:
  - **Product title**
  - **Rating (stars)**
  - **Number of reviews**
  - **Product image URL**
- Simple and responsive interface to display results
- Integration with [ScraperAPI](https://www.scraperapi.com/) to bypass Amazon request blocking

---

## 🧑‍💻 Run locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/scraping-amazon.git
```

---

### 2. Backend

📂 Path: `/back`

#### ▶️ Set up environment variables

Create a `.env` file inside `/back` with:

```env
SCRAPER_API_KEY=ca92f1724bc463eb86b5ffb291839f77
FRONTEND_ORIGIN=http://localhost:5173
```

> ⚠️ You must create an account at [ScraperAPI](https://www.scraperapi.com/) to get your API key.

#### ▶️ Install dependencies and run the server

```bash
bun install
bun run dev
```

---

### 3. Frontend

📂 Path: `/front`

#### ▶️ Set up environment variables

Create a `.env` file inside `/front` with:

```env
VITE_API_URL=https://scraping-amazon-production.up.railway.app
```

#### ▶️ Install dependencies and run the frontend

```bash
npm install
npm run dev
```

---

## ✅ Done!

Open [http://localhost:5173](http://localhost:5173) in your browser and enjoy **scraping-amazon**.

---

## 🛠 Tech stack

- **Backend:** Bun, Express, Axios, JSDOM, ScraperAPI
- **Frontend:** Vite, Vanilla JavaScript, HTML, CSS
- **Others:** Fetch API, responsive styling

---

## 📌 Main endpoint

- **GET** `/api/scrape?keyword=yourKeyword` → returns a list of products found on Amazon

**Example response:**

```json
[
  {
    "title": "Sample Product Name",
    "rating": "4.5",
    "reviews": 1234,
    "image": "https://images-na.ssl-images-amazon.com/..."
  }
]
```

---

## ✨ Developer

Made with 💻 by **Rodrigo Andrade**

[LinkedIn](https://www.linkedin.com/in/rodrigo-andrade-5420b2277/) · [GitHub](https://github.com/rodrigoacm10)
