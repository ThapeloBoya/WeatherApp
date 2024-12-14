# Weather App

![Weather App](https://via.placeholder.com/800x400.png?text=Weather+App+Preview)

A simple and responsive weather app built using modern technologies to display current weather information for any city around the world.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Contact](#contact)

---

## Overview

The **Weather App** allows users to search for and view the weather conditions of any city in real time. The app fetches weather data from a public API and displays key details such as temperature, weather conditions, and humidity. It features a clean user interface and is fully responsive, making it accessible on any device.

---

## Features

- 🌤 **Current Weather:** View real-time weather information for any location.
- 🗺 **City Search:** Search for weather data by entering a city name.
- 📱 **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
- 🌡 **Temperature Display:** Displays temperature in Celsius or Fahrenheit.
- 📊 **Additional Info:** Includes weather conditions (e.g., clear, rain), humidity, and wind speed.
- 🎨 **User-Friendly UI:** Clean and intuitive interface with smooth animations.

---

## Technologies Used

- **Front-End:** HTML, CSS, JavaScript (ES6)
- **Framework/Library:** React / Angular (whichever applies)
- **API Integration:** OpenWeatherMap API
- **Styling:** CSS3 / TailwindCSS / Bootstrap

---

## Installation

Follow these steps to run the app locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/thapeloboya/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up API Key**
   - Sign up for an API key at [OpenWeatherMap](https://openweathermap.org/).
   - Create a `.env` file in the project root and add your API key:
     ```bash
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Start the Development Server**
   ```bash
   npm start
   ```

5. **View the App**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Use

1. Open the app.
2. Enter the name of the city you want to search in the input field.
3. Press the **Search** button.
4. View real-time weather data, including temperature, weather conditions, and more.

---

## API Integration

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data. Ensure you have an active API key to make API calls successfully.

Sample API endpoint:
```bash
https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric
```

---

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/600x400.png?text=Home+Page)

### Search Results
![Search Results](https://via.placeholder.com/600x400.png?text=Search+Results)

---

## Future Enhancements

- 🌍 Add support for displaying weather forecasts (5-day forecast).
- 🌐 Support multiple languages.
- 🔔 Add notifications for weather alerts.
- 📍 Add "Current Location" feature using Geolocation API.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Contact

👤 **Your Name**  
- GitHub: [@yourusername](https://github.com/thapeloboya)
- Email: blackpup05@gmail.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/thapeloboya)

---

Enjoy using the Weather App? ⭐ Star this repository to show your support!

---
