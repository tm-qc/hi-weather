export default {
  props: ['weatherInfo'],
  template:`
  <div>
    <div v-html="selectIcon(weatherInfo)"></div>
  </div>
  `,
  computed:{
    selectIcon(){
      return function(name){
        let svg = ''
        switch(true){
          case name === 'clear-day'://晴れ昼 Sun.svg　元はviewBox="0 0 100 100"
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="15 15 70 70">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.997,51.999h-3.998c-1.105,0-2-0.895-2-1.999s0.895-2,2-2h3.998
                  c1.105,0,2,0.896,2,2S73.103,51.999,71.997,51.999z M64.142,38.688c-0.781,0.781-2.049,0.781-2.828,0
                  c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.142,38.688z
                    M50.001,61.998c-6.627,0-12-5.372-12-11.998c0-6.627,5.372-11.999,12-11.999c6.627,0,11.998,5.372,11.998,11.999
                  C61.999,56.626,56.628,61.998,50.001,61.998z M50.001,42.001c-4.418,0-8,3.581-8,7.999c0,4.417,3.583,7.999,8,7.999
                  s7.998-3.582,7.998-7.999C57.999,45.582,54.419,42.001,50.001,42.001z M50.001,34.002c-1.105,0-2-0.896-2-2v-3.999
                  c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.001,33.106,51.104,34.002,50.001,34.002z M35.86,38.688l-2.828-2.828
                  c-0.781-0.781-0.781-2.047,0-2.828s2.047-0.781,2.828,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828S36.641,39.469,35.86,38.688z
                    M34.002,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.895-1.999-1.999s0.896-2,1.999-2h4C33.107,48,34.002,48.896,34.002,50
                  z M35.86,61.312c0.781-0.78,2.047-0.78,2.828,0c0.781,0.781,0.781,2.048,0,2.828l-2.828,2.828c-0.781,0.781-2.047,0.781-2.828,0
                  c-0.781-0.78-0.781-2.047,0-2.828L35.86,61.312z M50.001,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2
                  c-1.105,0-2-0.896-2-2v-4C48.001,66.893,48.896,65.998,50.001,65.998z M64.142,61.312l2.828,2.828c0.779,0.781,0.779,2.048,0,2.828
                  c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.828c-0.781-0.78-0.781-2.047,0-2.828C62.093,60.531,63.36,60.531,64.142,61.312z"/>
                </svg>`
          break;
          case name === 'clear-night'://晴れ夜 Moon.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="33 33 35 35" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998
                  c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788
                  c0,4.418,3.582,7.999,8,7.999c0.615,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208
                  C61.998,56.626,56.626,61.998,50,61.998z M48.212,42.208c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999
                  c3.802,0,6.978-2.655,7.791-6.211C52.937,50.884,49.115,47.062,48.212,42.208z"/>
                </svg>
                `
          break;
          case name === 'partly-cloudy-day'://晴れ時々曇り昼 Cloud-Sun.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="20 10 70 70" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M79.941,43.641h-4c-1.104,0-2-0.895-2-2c0-1.104,0.896-1.998,2-1.998h4
                  c1.104,0,2,0.895,2,1.998C81.941,42.746,81.045,43.641,79.941,43.641z M72.084,30.329c-0.781,0.781-2.047,0.781-2.828,0
                  c-0.781-0.78-0.781-2.047,0-2.827l2.828-2.828c0.781-0.781,2.047-0.781,2.828,0c0.781,0.78,0.781,2.047,0,2.828L72.084,30.329z
                    M69.137,45.936L69.137,45.936c1.749,2.086,2.806,4.77,2.806,7.705c0,6.625-5.372,11.998-11.999,11.998c-2.775,0-12.801,0-15.998,0
                  c-8.835,0-15.998-7.162-15.998-15.998s7.163-15.998,15.998-15.998c1.572,0,3.09,0.232,4.523,0.654
                  c2.195-2.827,5.618-4.654,9.475-4.654c6.627,0,11.999,5.373,11.999,11.998C69.942,43.156,69.649,44.602,69.137,45.936z
                    M31.947,49.641c0,6.627,5.371,11.998,11.998,11.998c3.616,0,12.979,0,15.998,0c4.418,0,7.999-3.582,7.999-7.998
                  c0-4.418-3.581-8-7.999-8c-1.6,0-3.083,0.482-4.333,1.291c-1.231-5.316-5.974-9.289-11.665-9.289
                  C37.318,37.643,31.947,43.014,31.947,49.641z M57.943,33.643c-2.212,0-4.215,0.898-5.662,2.349c2.34,1.436,4.285,3.453,5.629,5.854
                  c0.664-0.113,1.337-0.205,2.033-0.205c2.125,0,4.119,0.559,5.85,1.527l0,0c0.096-0.494,0.15-1.004,0.15-1.527
                  C65.943,37.225,62.361,33.643,57.943,33.643z M57.943,25.643c-1.104,0-1.999-0.895-1.999-1.999v-3.999c0-1.105,0.896-2,1.999-2
                  c1.105,0,2,0.895,2,2v3.999C59.943,24.749,59.049,25.643,57.943,25.643z M43.803,30.329l-2.827-2.827
                  c-0.781-0.781-0.781-2.048,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.828,2.828c0.781,0.78,0.781,2.047,0,2.827
                  C45.851,31.11,44.584,31.11,43.803,30.329z"/>
                </svg>
                `
          break;
          case name === 'partly-cloudy-night'://晴れ時々曇り夜 Cloud-Moon.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="17 12 70 70" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M69.763,46.758L69.763,46.758c1.368,1.949,2.179,4.318,2.179,6.883
                  c0,6.625-5.371,11.998-11.998,11.998c-2.775,0-12.801,0-15.998,0c-8.836,0-15.998-7.162-15.998-15.998s7.162-15.998,15.998-15.998
                  c2.002,0,3.914,0.375,5.68,1.047l0,0c1.635-4.682,6.078-8.047,11.318-8.047c0.755,0,1.491,0.078,2.207,0.212
                  c-0.131,0.575-0.207,1.173-0.207,1.788c0,4.418,3.581,7.999,7.998,7.999c0.616,0,1.213-0.076,1.789-0.208
                  c0.133,0.717,0.211,1.453,0.211,2.208C72.941,41.775,71.73,44.621,69.763,46.758z M31.947,49.641
                  c0,6.627,5.371,11.998,11.998,11.998c3.616,0,12.979,0,15.998,0c4.418,0,7.999-3.582,7.999-7.998c0-4.418-3.581-8-7.999-8
                  c-1.6,0-3.083,0.482-4.334,1.291c-1.231-5.316-5.973-9.29-11.664-9.29C37.318,37.642,31.947,43.014,31.947,49.641z M51.496,35.545
                  c0.001,0,0.002,0,0.002,0S51.497,35.545,51.496,35.545z M59.155,30.85c-2.9,0.664-5.175,2.91-5.925,5.775l0,0
                  c1.918,1.372,3.523,3.152,4.68,5.22c0.664-0.113,1.337-0.205,2.033-0.205c2.618,0,5.033,0.85,7.005,2.271l0,0
                  c0.858-0.979,1.485-2.168,1.786-3.482C63.881,39.525,60.059,35.706,59.155,30.85z"/>
                </svg>
                `
          break;
          case name === 'rain'://雨 Cloud-Drizzle.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="15 15 70 70" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.943,64.941v-4.381c2.387-1.385,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8
                  c-1.602,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.627,0-11.998,5.372-11.998,11.999
                  c0,3.549,1.549,6.729,3.998,8.926v4.914c-4.777-2.768-7.998-7.922-7.998-13.84c0-8.836,7.162-15.998,15.998-15.998
                  c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12
                  C71.941,58.861,68.6,63.293,63.943,64.941z M41.945,53.641c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2
                  v-3.998C39.945,54.535,40.84,53.641,41.945,53.641z M41.945,65.639c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2
                  c-1.105,0-2-0.895-2-2v-3.998C39.945,66.533,40.84,65.639,41.945,65.639z M49.943,57.639c1.105,0,2,0.896,2,2v4c0,1.104-0.895,2-2,2
                  c-1.104,0-1.998-0.896-1.998-2v-4C47.945,58.535,48.84,57.639,49.943,57.639z M49.943,69.639c1.105,0,2,0.895,2,1.998v4
                  c0,1.105-0.895,2-2,2c-1.104,0-1.998-0.895-1.998-2v-4C47.945,70.533,48.84,69.639,49.943,69.639z M57.943,53.641
                  c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.943,54.535,56.838,53.641,57.943,53.641z
                    M57.943,65.639c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998
                  C55.943,66.533,56.838,65.639,57.943,65.639z"/>
                </svg>`
          break;
          case name === 'cloudy'://曇り Cloud.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="15 15 70 70" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998
                  c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205
                  c6.627,0,11.999,5.373,11.999,12c0,6.625-5.372,11.998-11.999,11.998C57.168,65.639,47.143,65.639,43.945,65.639z M59.943,61.639
                  c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.333,1.291c-1.231-5.316-5.974-9.29-11.665-9.29
                  c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
                </svg>`
          break;
          case name === 'snow'://雪 Snowflake.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="33 33 35 35" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.659,46.733l-1.958,1.13c0.188,0.682,0.298,1.396,0.298,2.137
                  c0,0.742-0.109,1.456-0.298,2.138l1.958,1.13c0.956,0.553,1.284,1.775,0.731,2.732c-0.552,0.956-1.774,1.284-2.731,0.731
                  l-1.954-1.128c-1.003,1.02-2.277,1.766-3.705,2.134v2.262c0,1.104-0.896,2-2,2s-2-0.896-2-2v-2.262
                  c-1.428-0.368-2.703-1.114-3.705-2.134l-1.954,1.128c-0.957,0.553-2.18,0.225-2.731-0.731c-0.553-0.957-0.225-2.18,0.731-2.732
                  l1.958-1.13c-0.189-0.682-0.298-1.396-0.298-2.138c0-0.741,0.108-1.455,0.298-2.137l-1.958-1.13
                  c-0.956-0.553-1.284-1.775-0.731-2.732c0.552-0.956,1.774-1.284,2.731-0.731l1.954,1.128c1.002-1.02,2.277-1.766,3.705-2.134v-2.262
                  c0-1.104,0.896-2,2-2s2,0.896,2,2v2.262c1.428,0.368,2.702,1.114,3.705,2.134l1.954-1.128c0.957-0.553,2.18-0.225,2.731,0.731
                  C60.943,44.958,60.615,46.181,59.659,46.733z M50,46.001c-2.209,0-4,1.791-4,3.999c0,2.209,1.791,4,4,4s3.999-1.791,3.999-4
                  C53.999,47.792,52.209,46.001,50,46.001z"/>
                </svg>`
          break;
          case name === 'sleet'://ミゾレ Cloud-Hail.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="15 15 70 70" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.999,64.941v-4.381c2.389-1.383,3.999-3.961,3.999-6.92
                  c0-4.417-3.581-7.999-7.998-7.999c-1.601,0-3.084,0.48-4.334,1.291c-1.231-5.317-5.974-9.29-11.665-9.29
                  c-6.626,0-11.998,5.372-11.998,11.998c0,3.55,1.55,6.728,3.999,8.925v4.916c-4.776-2.768-7.998-7.922-7.998-13.841
                  c0-8.835,7.162-15.997,15.997-15.997c6.004,0,11.229,3.311,13.966,8.203c0.663-0.113,1.336-0.205,2.033-0.205
                  c6.626,0,11.998,5.372,11.998,11.999C71.998,58.863,68.656,63.293,63.999,64.941z M42.002,65.639c-1.104,0-1-0.895-1-1.998v-8
                  c0-1.104-0.104-2,1-2s1,0.896,1,2v8C43.002,64.744,43.106,65.639,42.002,65.639z M42.002,69.639c1.104,0,1.999,0.896,1.999,2
                  c0,1.105-0.895,2-1.999,2s-2-0.895-2-2C40.002,70.535,40.897,69.639,42.002,69.639z M50.001,69.639c-1.104,0-1-0.895-1-2v-7.998
                  c0-1.105-0.104-2,1-2s1,0.895,1,2v7.998C51.001,68.744,51.105,69.639,50.001,69.639z M50.001,73.639c1.104,0,1.999,0.895,1.999,2
                  c0,1.104-0.895,2-1.999,2s-2-0.896-2-2C48.001,74.533,48.896,73.639,50.001,73.639z M58,65.639c-1.104,0-1-0.895-1-1.998v-8
                  c0-1.104-0.104-2,1-2s1,0.896,1,2v8C59,64.744,59.104,65.639,58,65.639z M58,69.639c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2
                  s-2-0.895-2-2C56,70.535,56.896,69.639,58,69.639z"/>
                </svg>`
          break;
          case name === 'wind'://風 Wind.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50" height="40" viewBox="40 25 25 45">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M65.999,52L65.999,52h-3c-1.105,0-2-0.895-2-1.999s0.895-2,2-2h3
                  c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2c-1.105,0-2-0.896-2-2s0.895-2,2-2c0.137,0,0.271,0.014,0.402,0.041
                  c3.121,0.211,5.596,2.783,5.596,5.959C71.997,49.314,69.312,52,65.999,52z M55.999,48.001h-2h-6.998H34.002
                  c-1.104,0-1.999,0.896-1.999,2S32.898,52,34.002,52h2h3.999h3h4h3h3.998h2c3.314,0,6,2.687,6,6c0,3.176-2.475,5.748-5.596,5.959
                  C56.272,63.986,56.138,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2c1.105,0,2-0.896,2-2s-0.895-2-2-2h-2h-3.998h-3h-4h-3
                  h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998
                  h2c1.105,0,2-0.896,2-2s-0.895-2-2-2c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2c0.139,0,0.273,0.015,0.404,0.041
                  c3.121,0.211,5.596,2.783,5.596,5.959C61.999,45.314,59.313,48.001,55.999,48.001z"/>
                </svg>`
          break;
          case name === 'fog'://霧 Cloud-Fog-Sun-Alt.svg
          svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="100px" height="100px" viewBox="20 10 70 70" xml:space="preserve">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M79.997,43.643h-4c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h4
                c1.104,0,2,0.896,2,2C81.997,42.746,81.101,43.643,79.997,43.643z M72.14,30.33c-0.781,0.781-2.047,0.781-2.828,0
                s-0.781-2.047,0-2.828l2.828-2.828c0.781-0.781,2.047-0.781,2.828,0s0.781,2.047,0,2.828L72.14,30.33z M69.818,43.643H29.177
                c0.281-0.693,0.613-1.359,0.984-2h27.672c0.041,0.07,0.094,0.134,0.133,0.205c0.664-0.114,1.337-0.205,2.033-0.205
                c2.125,0,4.119,0.559,5.85,1.527l0,0c0.096-0.494,0.15-1.006,0.15-1.527c0-4.418-3.582-7.999-8-7.999
                c-2.025,0-3.869,0.759-5.277,1.999H36.263c2.294-1.271,4.93-1.999,7.738-1.999c1.572,0,3.09,0.232,4.523,0.655
                c2.195-2.828,5.618-4.654,9.475-4.654c6.627,0,11.999,5.371,11.999,11.998C69.998,42.326,69.931,42.992,69.818,43.643z
                  M57.999,25.645c-1.104,0-1.999-0.896-1.999-2v-3.999c0-1.104,0.896-2,1.999-2c1.105,0,2,0.896,2,2v3.999
                C59.999,24.749,59.104,25.645,57.999,25.645z M43.858,30.33l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828
                c0.78-0.781,2.047-0.781,2.827,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828C45.906,31.111,44.64,31.111,43.858,30.33z
                  M33.444,37.643h21.081c0.696,0.611,1.337,1.278,1.918,2H31.524C32.104,38.92,32.749,38.255,33.444,37.643z M71.825,51.641H28.142
                c-0.082-0.656-0.139-1.32-0.139-2h43.303C71.534,50.285,71.71,50.953,71.825,51.641z M33.444,61.641h35.48
                c-0.68,0.758-1.447,1.434-2.299,1.998H36.263C35.247,63.078,34.308,62.4,33.444,61.641z M30.161,57.641H71.3
                c-0.246,0.699-0.555,1.367-0.92,2H31.524C31.02,59.012,30.567,58.342,30.161,57.641z M28.142,47.641
                c0.085-0.682,0.218-1.346,0.387-1.998h40.764c-0.035,0.098-0.062,0.197-0.1,0.295l0,0c0.445,0.529,0.845,1.102,1.194,1.703H28.142z
                  M28.528,53.641h43.47c0,0.684-0.071,1.348-0.181,2H29.177C28.915,54.994,28.704,54.324,28.528,53.641z"/>
              </svg>`
          break;
          case name === 'temp': //温度C
            svg = `<svg version="1.1" id="Layer_1" class="svgColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40" height="40" viewBox="30 35 30 45">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.999,42.001c-2.209,0-4,1.791-4,4V54c0,2.209,1.791,3.999,4,3.999
                    s4-1.79,4-3.999h3.998c0,4.418-3.58,7.999-7.998,7.999s-8-3.581-8-7.999v-7.999c0-4.418,3.582-7.999,8-7.999
                    s7.998,3.581,7.998,7.999h-3.998C62.999,43.792,61.208,42.001,58.999,42.001z M40,52c-3.865,0-6.998-3.134-6.998-6.999
                    s3.133-6.999,6.998-6.999c3.866,0,7,3.134,7,6.999S43.867,52,40,52z M40,42.001c-1.656,0-2.999,1.344-2.999,3s1.343,3,2.999,3
                    c1.657,0,3-1.344,3-3S41.658,42.001,40,42.001z"/>
                  </svg>`
          break;
          default://対象アイコンがない場合
            svg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" y="0px" width="50" height="50" viewBox="17 12 70 70">
                  <style type="text/css">
                    .st0{font-family:'KozGoPr6N-Regular-90ms-RKSJ-H';}
                    .st1{font-size:20px;}
                  </style>
                  <text transform="matrix(1 0 0 1 28.4345 40.6959)"><tspan x="0" y="0" class="st0 st1">None</tspan><tspan x="0" y="24" class="st0 st1">Icon</tspan></text>
                  </svg>
                  `
          break;
        }
        return svg
      }
    }
  }
}