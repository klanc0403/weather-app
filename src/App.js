function App() {
  return (
    <div className="weather-app">
      <header>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/178/769/original/ChatGPT_Image_Mar_2__2026__04_48_00_PM.png?1772488088"
          alt="KSL Intel Logo"
          className="weather-logo"
          width="60"
        />

        <form id="search-form" onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>

      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city" id="current-city">
              Enter City
            </h1>
            <p className="current-details">
              <span id="time"></span>, <span id="description"></span> <br />
              Humidity: <strong id="humidity"></strong>, Wind:{" "}
              <strong id="wind"></strong>
            </p>
          </div>
          <div className="current-temperature">
            <div className="current-temperature-icon" id="icon"></div>
            <span
              className="current-temperature-value"
              id="current-temperature"
            ></span>
            <span className="current-temperature-unit">°F</span>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>

      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/klanc0403"
            target="_blank"
            rel="noreferrer"
          >
            Kelly S. Lançon
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/klanc0403/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-weather-proj.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
