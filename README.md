# Nuxt 3 To-Do App with Weather Integration

This is a simple and modern To-Do list application built using **Nuxt 3** with support for task management and **real-time weather data** powered by the [WeatherAPI](https://www.weatherapi.com/).

## 🔧 Features

- Add, delete, and mark tasks as completed
- Search tasks by title
- uto-generated task creation date
- Get real-time weather data based on user input city
- Modular architecture using composables and components
- Responsive design using TailwindCSS

---

## 🛠️ Tech Stack

- **Nuxt 3**
- **TypeScript**
- **WeatherAPI** (via `useFetch`)
- **Composition API**
- **Vite**

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-weather-nuxt3.git
cd todo-weather-nuxt3

### 2. Install Dependencies

npm install

### 3. Create .env File

WEATHER_API_KEY=your_api_key_here

### 4. Run the Development Server

npm run dev