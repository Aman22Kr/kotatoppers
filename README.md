# KotaToppers — Premier IIT JEE, NEET & Foundation Coaching

> **Recreated & Rebranded from Reference Website:** [https://tplivekota.com/](https://tplivekota.com/)  
> **Brand Name:** KotaToppers  
> **GitHub Username:** [Aman22kr](https://github.com/Aman22kr)  
> **Deployment Target:** GitHub Pages via GitHub Actions (Static SPA)

---

## 📌 Overview

**KotaToppers** is a multi-page, high-fidelity static web application recreating and modernizing the educational coaching platform of Kota, Rajasthan. Built with React 19, Vite, Tailwind CSS, Lucide icons, and client-side `HashRouter`, this application delivers the full Kota coaching experience:

1. **Course Directory & Detail Pages**: Comprehensive curricula for JEE Main, JEE Advanced, NEET (UG), and Foundation/Olympiad batches with schedules, syllabus breakdowns, and fee matrices.
2. **Interactive CBT (Computer-Based Test) Simulator**: NTA-standard online testing engine with question palette navigation, real-time countdown timer, marking scheme (+4 / -1), instant score reports, and local storage history.
3. **Faculty Roster**: Profiles of senior Ex-IITian and doctor HODs with their educational backgrounds, years in Kota, and top ranks produced.
4. **Kota Guide & Student Life**: Essential guide covering student hostels in New Rajeev Gandhi Nagar and Vigyan Nagar, mess nutrition, daily 14-hour timetable, and 24/7 student wellness helpline (+91 9602281833).
5. **Free Study Material & Downloads**: Downloadable formula handbooks, Kota Daily Practice Problems (DPPs), and NCERT highlighted extracts.
6. **Hall of Fame & Results**: Verified toppers, AIR rankings, and college admits (IIT Bombay, AIIMS Delhi, IIT Delhi).
7. **Blank Square Spaces for Video Areas**: As requested, any section representing YouTube video previews renders a clean blank square space placeholder.
8. **Page-Bottom Ad Sections**: A responsive partner/scholarship advertisement strip (K-SAT 2027) at the bottom of every page with dismiss and recall controls.
9. **Student Portal & LocalStorage Persistence**: Bookmarked courses, scheduled demo classes, completed mock test attempts, and downloaded materials persist in the browser's `localStorage` across page refreshes.

---

## 🛠️ Technology Stack

- **Framework**: React 19 (Functional components, Hooks)
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS
- **Routing**: `react-router-dom` (`HashRouter` for zero-404 GitHub Pages static routing)
- **Icons**: `lucide-react`
- **Animations**: Normal speed, strong spring transitions (`motion`, `canvas-confetti`)
- **State & Persistence**: Browser `localStorage`

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Vite development server**:
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:3000`.

3. **Compile and build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 GitHub Pages Deployment via GitHub Actions

This repository is pre-configured with `.github/workflows/deploy.yml`.

### Step-by-Step Setup:
1. Push your repository to GitHub under username `Aman22kr`:
   ```bash
   git init
   git add .
   git commit -m "Initial release of KotaToppers"
   git branch -M main
   git remote add origin https://github.com/Aman22kr/kotatoppers.git
   git push -u origin main
   ```

2. On GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. The GitHub Actions workflow will automatically run `npm run build` and publish the `./dist` folder to:
   ```
   https://aman22kr.github.io/kotatoppers/
   ```

4. Because `HashRouter` and `base: './'` are configured, direct links, bookmarking, and page refreshes work smoothly without needing server-side redirects or 404 rewrite hacks.
