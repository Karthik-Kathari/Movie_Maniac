✨ **Movie Maniac — Movie Explorer Web App**

Movie Maniac is a modern movie discovery web application built with  **React + Vite** , featuring **TMDB API integration** to fetch real-time movie data. Users can explore popular, top-rated, and upcoming movies, apply filters, sort results, and experience a smooth horizontal card slider UI with interactive navigation dots.

Live Site:

**[https://moviemaniaoffical.netlify.app/]()**

---

## 🖼 **Website Preview / Screenshots**


---

## 🔥 **Key Features**

* Real-time movie data from **TMDB API**
* **Filter Options**
* **Sort movies** by Release Date or Rating (Ascending / Descending)
* **Smooth horizontal scroll** with clickable navigation dots
* **Light & Dark mode toggle**
* Fully responsive UI
* Clean & modern card UI with hover animations

---

## 🛠 **Tech Stack**

| Category   | Technology                |
| ---------- | ------------------------- |
| Frontend   | React.js, Vite            |
| Styling    | CSS                       |
| API        | The Movie Database (TMDB) |
| Deployment | Netlify                   |
| Icons      | FontAwesome               |
| Utilities  | Lodash                    |

---

## 📦 **Installation & Setup**

**Clone the repo**:

https://github.com/Karthik-Kathari/Movie_Maniac.git

Install dependencies:

<pre class="overflow-visible!" data-start="1368" data-end="1391"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
</span></span></code></div></div></pre>

**Create `.env` file in root:**

<pre class="overflow-visible!" data-start="1422" data-end="1468"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span>VITE_TMDB_API_KEY=your_api_key_here
</span></code></div></div></pre>

**Run project:**

<pre class="overflow-visible!" data-start="1484" data-end="1507"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
</span></span></code></div></div></pre>

**Build for production:**

<pre class="overflow-visible!" data-start="1532" data-end="1557"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run build
</span></span></code></div></div></pre>

**Preview production build:**

<pre class="overflow-visible!" data-start="1586" data-end="1613"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run preview
</span></span></code></div></div></pre>

---

## 🌍 **Environment Variables**

| Key                   | Description       |
| --------------------- | ----------------- |
| `VITE_TMDB_API_KEY` | Your TMDB API key |

You can generate it from:

[https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

---

## 🚀 **Deployment**

The project is deployed on  **Netlify** , using:

<pre class="overflow-visible!" data-start="1887" data-end="1912"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run build
</span></span></code></div></div></pre>

Publish directory:

<pre class="overflow-visible!" data-start="1934" data-end="1946"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>dist</span><span>
</span></span></code></div></div></pre>

---

## 📁 Folder Structure

<pre class="overflow-visible!" data-start="1977" data-end="2211"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>Movie_Maniac/
├── </span><span>public</span><span>/
│   └── favicon, assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MovieList.jsx
│   │   └── MovieCard.jsx
│   ├── assets/img/
│   └── utils/api.js
├── </span><span>index</span><span>.html
└── package.json
</span></span></code></div></div></pre>

---

## 🤝 Contributions

Contributions are welcome.

Fork the repo, create your feature branch, and submit a PR.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👤 Author

**Karthik Kathari**

Web Development Enthusiast

* GitHub: **[https://github.com/Karthik-Kathari](https://github.com/Karthik-Kathari)**
* LinkedIn: **[https://www.linkedin.com/in/karthik-kathari]()**

---

## 💬 Feedback

Have suggestions or ideas? Open an **issue** or drop feedback anytime.

---

### ⭐ If you like this project, consider giving it a star on GitHub!
