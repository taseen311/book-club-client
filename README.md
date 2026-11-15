# 📚 PSTUReadingCLUB

### A Community Library Management & Book Borrowing Platform

**Discover Books. Share Knowledge. Build a Reading Community.**

PSTUReadingCLUB is a modern library management platform designed to make book discovery, collection management, and borrowing easier. Readers can explore available books, borrow their favorite titles, manage their personal book collections, and keep track of borrowed books — all in one place.

---

## 🌐 Live Demo

🔗 **Live Website:** Add your deployed website URL here.

---

## ✨ Key Features

- 🔐 **Secure Authentication:** Register and log in using email and password, with Google authentication support.
- 📚 **Explore Books:** Browse the available book collection and view individual book details.
- ➕ **Add New Books:** Authenticated users can add books to the library.
- ✏️ **Manage Your Collection:** Edit or delete books added by you.
- 📖 **Borrow Books:** Borrow books by selecting borrowing and return dates.
- 🔄 **Return Books:** Return borrowed books and update their availability.
- 📦 **Smart Stock Management:** Available book copies automatically decrease on borrowing and increase on returning.
- 🚫 **Duplicate Borrow Prevention:** Prevents users from borrowing the same book multiple times simultaneously.
- 👤 **Personal Dashboard:** View your added books and borrowing history.
- 🔒 **Protected Routes & APIs:** Private pages and backend operations require authentication.
- 🔔 **Toast Notifications:** Get instant feedback for important actions.
- 📱 **Responsive Design:** Designed to work across desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

| Category       | Technologies             |
| -------------- | ------------------------ |
| Frontend       | Next.js, React.js        |
| Styling        | Tailwind CSS, DaisyUI    |
| Authentication | Better Auth              |
| Backend        | Node.js, Express.js      |
| Database       | MongoDB                  |
| API Security   | JWT, JOSE                |
| Notifications  | React Hot Toast          |
| UI Components  | Swiper.js, Next.js Image |
| Deployment     | Vercel / Backend Hosting |

---

## 📂 Project Structure

```text
book-club-client/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── register/
│   │   ├── books/
│   │   ├── add-book/
│   │   ├── my-books/
│   │   ├── my-borrows/
│   │   ├── edit-book/
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   ├── layout.jsx
│   │   └── page.jsx
│   │
│   ├── components/
│   ├── lib/
│   └── proxy.js
│
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_CLIENT_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd book-club-client
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
MONGO_DB_URI=your_mongodb_connection_string
```

Use the actual environment variable names required by your application and never commit real secrets.

### 5. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🔗 Backend Repository

The backend is maintained separately using Express.js and MongoDB.

**Server Repository:**
[https://github.com/taseen311/book-club-server](https://github.com/taseen311/book-club-server)

The backend handles book management, borrowing operations, stock updates, and JWT-protected API requests.

---

## 🔐 Security & Authentication

- Better Auth handles user authentication.
- JWT tokens are used to authorize protected backend requests.
- Private API operations verify the authenticated user's identity.
- Users can manage only their own added books.
- Borrowing records are associated with the authenticated user.

---

## 🎯 Project Goals

PSTUReadingCLUB aims to create a convenient digital reading community where users can discover books, manage collections, and enjoy a smoother borrowing experience.

**Read More. Discover More. Connect Through Books.**

---

\<p align="center">
&#x20; Made with ❤️ for readers and book lovers.
&#x20; \<br />
&#x20; \<strong>PSTUReadingCLUB\</strong>
\</p>

