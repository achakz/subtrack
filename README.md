# SubTrack - Subscription Manager

SubTrack is a MERN stack application designed to help users manage recurring subscriptions, track monthly spending, and visualize expenses.

## 🚀 Features
- **Authentication:** Secure Login and Registration (JWT).
- **Dashboard:** View all active subscriptions in a card layout.
- **Smart Tracking:** Auto-calculates total monthly spend.
- **Visual Analytics:** Interactive Pie Chart showing spending by category (Entertainment, Utilities, etc.).
- **Alerts:** Visual indicators for upcoming renewals (within 3 days).
- **Responsive Design:** Works on desktop and mobile.

## 🛠 Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Recharts, Lucide Icons.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (Atlas).
- **Deployment:** Netlify (Frontend), Render (Backend).


## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/SubTrack.git](https://github.com/yourusername/SubTrack.git)
   cd SubTrack
   ```

2. **Backend Setup**
    ```bash
    cd server
    npm install
    # Create a .env file with: MONGO_URI, JWT_SECRET, PORT=5000
    npm run dev
    ```

3. **Frontend Setup**
    ```bash
    cd client
    npm install
    # Create a .env file in /client with: VITE_API_URL=http://localhost:5000/api
    npm run dev
    ```

## ✅ Evaluation Criteria & Bonus
- **Track Attempted:** Track 3 (Full-stack Development).
- **Code Structure:** MVC Pattern used in Backend; Component-based architecture in Frontend.
- **Bonus Implemented:**
    - Deployment (Live links below).
    - Authentication (JWT).
    - Data Visualization (Charts).
    - Advanced UI (Tailwind).

## 🌐 Live Demo
- **Frontend:** https://subtrackproject.netlify.app/
- **Backend:** https://subtrack-71pt.onrender.com
- **Video Demonstration:** https://drive.google.com/file/d/1w12ffL3UI3KQ5u-hSAYJvaqJeyi5O5kf/view?usp=sharing