import './assets/styles/reset.css';
import './assets/styles/main.css';

const submitButton = document.getElementById('submitButton');
const temperatureUnitToggleButton = document.getElementById(
  'temperatureUnitToggleButton'
);
const fahrenheitSection = document.getElementById('fahrenheitSection');
const celciusSection = document.getElementById('celciusSection');

submitButton.addEventListener('click', (ev) => {
  // prevent page from refreshing
  ev.preventDefault();

  // gets data from Open Weather API based on input location
  weatherSearch();
});

temperatureUnitToggleButton.addEventListener(
  'click',
  toggleTemperatureUnitDisplay
);

// gets data from Open Weather API
async function weatherSearch() {
  const weatherContent = document.getElementById('weatherContent');
  const location = document.getElementById('searchInput').value;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`,
      { mode: 'cors' } 
	);
	console.log(OPEN_process.env.OPEN_WEATHER_API_KEY);
    const weatherData = await response.json();
    // will be a general weather type such as Rain, Snow, etc
    const weatherSummary = weatherData.weather[0].main;
    const celciusTemperature = weatherData.main.temp;

    displayWeatherData(weatherSummary, celciusTemperature);
    // gets image from Pixabay API based on type of weather at user input location
    imageSearch(weatherSummary);
  } catch (error) {
    displayErrorMessage();
    // hide any existing weather content
    hideWeatherContent();
    // gets default image from Pixabay API
    imageSearch('earth');
  }

  function displayErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
  }

  function displayWeatherData(weatherSummary, celciusTemperature) {
    const weatherSummaryContainer = document.getElementById(
      'weatherSummaryContainer'
    );
    const celciusContainer = document.getElementById('celciusContainer');
    const fahrenheitContainer = document.getElementById('fahrenheitContainer');

    setCelciusTemperatureDisplay();
    setFahrenheitTemperatureDisplay();
    // display celcius and hide fahrenheit default
    updateDisplayToCelcius();

    // set the main weather condition: Rain, Clear, Overcast, etc
    setMainWeatherConditionDisplay();
    // display all weather data
    displayWeatherContent();
    // hide any existing error messages
    hideErrorMessages();

    function hideErrorMessages() {
      errorMessage.style.display = 'none';
    }

    function displayWeatherContent() {
      weatherContent.style.display = 'block';
    }

    function setMainWeatherConditionDisplay() {
      weatherSummaryContainer.innerHTML = weatherSummary;
    }

    function setFahrenheitTemperatureDisplay() {
      fahrenheitContainer.innerHTML = celciusToFahrenheit(celciusTemperature);
    }

    function setCelciusTemperatureDisplay() {
      celciusContainer.innerHTML = celciusTemperature;
    }

    // converts celcius to fahrenheit
    function celciusToFahrenheit(celciusTemperature) {
      const fahrenheitTemperature = celciusTemperature * (9 / 5) + 32;
      return Math.round(fahrenheitTemperature * 10) / 10;
    }
  }

  function hideWeatherContent() {
    weatherContent.style.display = 'none';
  }
}

// gets an image from the Pixabay API
async function imageSearch(searchText) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${searchText}&image_type=photo`,
      { mode: 'cors' }
    );
    const imageData = await response.json();
    setImageContent(imageData);
    displayImageContent();
  } catch (error) {
    // hide the image content section
    hideImageContent();
  }

  function hideImageContent() {
    imageContent.style.display = 'block';
  }

  function setImageContent(imageData) {
    const weatherImage = document.getElementById('weatherImage');
    const imageCredit = document.getElementById('imageCredit');

    setWeatherImage();
    setCreditForImage();

    function setCreditForImage() {
      imageCredit.innerHTML = imageData.hits[0].user;
      imageCredit.href = imageData.hits[0].pageURL;
    }

    function setWeatherImage() {
      weatherImage.src = imageData.hits[0].webformatURL;
    }
  }

  function displayImageContent() {
    const imageContent = document.getElementById('imageContent');
    imageContent.style.display = 'block';
  }
}

// updates display and toggle button text between fahrenheit and celcius units
function toggleTemperatureUnitDisplay() {
  if (fahrenheitSection.style.display === 'none') {
    updateDisplayToFahrenheit();
  } else {
    updateDisplayToCelcius();
  }

  function updateDisplayToFahrenheit() {
    temperatureUnitToggleButton.innerHTML = 'Switch to Celcius';
    fahrenheitSection.style.display = 'block';
    celciusSection.style.display = 'none';
  }
}

function updateDisplayToCelcius() {
  temperatureUnitToggleButton.innerHTML = 'Switch to Fahrenheit';
  fahrenheitSection.style.display = 'none';
  celciusSection.style.display = 'block';
}
