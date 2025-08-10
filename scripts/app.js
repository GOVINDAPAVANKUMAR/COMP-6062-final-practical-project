const app = Vue.createApp({
  data() 
  {
    return {
      user: "",
      weather: {
        city: "London",
        province: "Ontario",
        country: "Canada",
      },
      dict: {
        word: "Bottle",
      },
      dictionaryData: "",
    };
  },
  created(){
    this.userData();
    this.weatherData();
    this.dictionary();
  },
  methods:{
    userData(){ 
      fetch('https://comp6062.liamstewart.ca/random-user-data')
      .then(response => {
        if (response.ok)
          {
          return response.json();
          }
        else 
          {
          console.log('An error occured.Try again later.');
          }
        })
        .then(data => {
        this.user = data;
        })
      },
    weatherData(){
        fetch("https://comp6062.liamstewart.ca/weather-data?city=Toronto&province=Ontario&country=Canada")
        .then(response => {
          if (response.ok)
            {
            return response.json();
            }
          else 
            {
            console.log('An error occured.Try again later.');
            }
          })
        .then((data) => {
          this.weather = data;
        })
    },
    dictionary(){
        fetch('https://comp6062.liamstewart.ca/api/define?word=Bottle')
        .then(response => {
          if (response.ok)
            {
            return response.json();
            }
          else 
            {
            console.log('An error occured.Try again later.');
            }
          })
        .then((data) => {
            this.dictionaryData=data;
        }
        )},
    }
});

app.mount('#app');