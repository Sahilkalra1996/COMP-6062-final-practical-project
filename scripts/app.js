console.log('Js Loaded!');

const app= Vue.createApp({
    data(){
        return{
            title: 'Sahil Kalra- 1225040',
            user_profile:[], 
            weatherdata:[],
            city:'London',
            province: 'Ontario',
            country: 'Canada',
            Dictionary:[],
            word:'',

            };
        },

        created(){
        this.fetchuserprofile();
        this.fetchweatherData();
        this.fetchDictionary();
        },

     methods: {
        fetchuserprofile(){
            fetch('https://comp6062.liamstewart.ca/random-user-data')
            .then(response => {
                    return response.json();
            })

            .then(data => {
                this.user_profile=data.user_profile;
            })
            .catch(error => {
                console.log('Total Failure');

            });
        },
        fetchweatherData(){
            fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.city}&province=${this.province}&country=${this.country}`)
            .then(response => {
                 return response.json();
             })

            .then(data => {
                this.weatherdata= data.weather_data;
            })
            .catch(error => {
                console.log('Total Failure');

            });
            },

            fetchDictionary(){
            fetch(`https://comp6062.liamstewart.ca/api/define?word=${this.word}`)
            .then(response => {
                return response.json();
                
            })

            .then(data => {
                this.Dictionary= data;
            })
            .catch(error => {
                console.log('Total Failure');

            });
        },
       
    }
    
});

app.mount('#app');