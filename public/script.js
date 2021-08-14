//jshint esversion:6
$(document).ready(function() {
  const url = "https://api.covid19india.org/data.json";
  $.getJSON(url, function(data) {
    // console.log(data);

    var total_active, total_recovered, total_deaths, total_confirmed;
    var state = []
    var confirmed = []
    var recovered = []
    var deaths = []
    var active = []

    //loop for add element to the arrays
    $.each(data.statewise, function(id, obj) {
      state.push(obj.state)
      confirmed.push(obj.confirmed)
      recovered.push(obj.recovered)
      deaths.push(obj.deaths)
      active.push(obj.active)
    })
    // console.log(state)

    //shift() ignores first element of the array
    state.shift()
    confirmed.shift()
    recovered.shift()
    deaths.shift()
    active.shift()

    total_active = data.statewise[0].active;
    total_confirmed = data.statewise[0].confirmed;
    total_recovered = data.statewise[0].recovered;
    total_deaths = data.statewise[0].deaths;

    $("#active").append(total_active)
    $("#confirmed").append(total_confirmed)
    $("#recovered").append(total_recovered)
    $("#deaths").append(total_deaths)

    $("#1a").append(data.statewise[1].state)
    $("#1b").append(data.statewise[1].confirmed)
    $("#1c").append(data.statewise[1].recovered)
    $("#1d").append(data.statewise[1].deaths)
    $("#1e").append(data.statewise[1].lastupdatedtime)

    $("#2a").append(data.statewise[2].state)
    $("#2b").append(data.statewise[2].confirmed)
    $("#2c").append(data.statewise[2].recovered)
    $("#2d").append(data.statewise[2].deaths)
    $("#2e").append(data.statewise[2].lastupdatedtime)

    $("#3a").append(data.statewise[3].state)
    $("#3b").append(data.statewise[3].confirmed)
    $("#3c").append(data.statewise[3].recovered)
    $("#3d").append(data.statewise[3].deaths)
    $("#3e").append(data.statewise[3].lastupdatedtime)

    $("#4a").append(data.statewise[4].state)
    $("#4b").append(data.statewise[4].confirmed)
    $("#4c").append(data.statewise[4].recovered)
    $("#4d").append(data.statewise[4].deaths)
    $("#4e").append(data.statewise[4].lastupdatedtime)

    $("#5a").append(data.statewise[5].state)
    $("#5b").append(data.statewise[5].confirmed)
    $("#5c").append(data.statewise[5].recovered)
    $("#5d").append(data.statewise[5].deaths)
    $("#5e").append(data.statewise[5].lastupdatedtime)

    $("#6a").append(data.statewise[6].state)
    $("#6b").append(data.statewise[6].confirmed)
    $("#6c").append(data.statewise[6].recovered)
    $("#6d").append(data.statewise[6].deaths)
    $("#6e").append(data.statewise[6].lastupdatedtime)

    $("#7a").append(data.statewise[7].state)
    $("#7b").append(data.statewise[7].confirmed)
    $("#7c").append(data.statewise[7].recovered)
    $("#7d").append(data.statewise[7].deaths)
    $("#7e").append(data.statewise[7].lastupdatedtime)

    $("#8a").append(data.statewise[8].state)
    $("#8b").append(data.statewise[8].confirmed)
    $("#8c").append(data.statewise[8].recovered)
    $("#8d").append(data.statewise[8].deaths)
    $("#8e").append(data.statewise[8].lastupdatedtime)

    $("#9a").append(data.statewise[9].state)
    $("#9b").append(data.statewise[9].confirmed)
    $("#9c").append(data.statewise[9].recovered)
    $("#9d").append(data.statewise[9].deaths)
    $("#9e").append(data.statewise[9].lastupdatedtime)

    $("#10a").append(data.statewise[10].state)
    $("#10b").append(data.statewise[10].confirmed)
    $("#10c").append(data.statewise[10].recovered)
    $("#10d").append(data.statewise[10].deaths)
    $("#10e").append(data.statewise[10].lastupdatedtime)

    $("#11a").append(data.statewise[11].state)
    $("#11b").append(data.statewise[11].confirmed)
    $("#11c").append(data.statewise[11].recovered)
    $("#11d").append(data.statewise[11].deaths)
    $("#11e").append(data.statewise[11].lastupdatedtime)

    $("#12a").append(data.statewise[12].state)
    $("#12b").append(data.statewise[12].confirmed)
    $("#12c").append(data.statewise[12].recovered)
    $("#12d").append(data.statewise[12].deaths)
    $("#12e").append(data.statewise[12].lastupdatedtime)

    $("#13a").append(data.statewise[13].state)
    $("#13b").append(data.statewise[13].confirmed)
    $("#13c").append(data.statewise[13].recovered)
    $("#13d").append(data.statewise[13].deaths)
    $("#13e").append(data.statewise[13].lastupdatedtime)

    $("#14a").append(data.statewise[14].state)
    $("#14b").append(data.statewise[14].confirmed)
    $("#14c").append(data.statewise[14].recovered)
    $("#14d").append(data.statewise[14].deaths)
    $("#14e").append(data.statewise[14].lastupdatedtime)

    $("#15a").append(data.statewise[15].state)
    $("#15b").append(data.statewise[15].confirmed)
    $("#15c").append(data.statewise[15].recovered)
    $("#15d").append(data.statewise[15].deaths)
    $("#15e").append(data.statewise[15].lastupdatedtime)

    $("#16a").append(data.statewise[16].state)
    $("#16b").append(data.statewise[16].confirmed)
    $("#16c").append(data.statewise[16].recovered)
    $("#16d").append(data.statewise[16].deaths)
    $("#16e").append(data.statewise[16].lastupdatedtime)

    $("#17a").append(data.statewise[17].state)
    $("#17b").append(data.statewise[17].confirmed)
    $("#17c").append(data.statewise[17].recovered)
    $("#17d").append(data.statewise[17].deaths)
    $("#17e").append(data.statewise[17].lastupdatedtime)

    $("#18a").append(data.statewise[18].state)
    $("#18b").append(data.statewise[18].confirmed)
    $("#18c").append(data.statewise[18].recovered)
    $("#18d").append(data.statewise[18].deaths)
    $("#18e").append(data.statewise[18].lastupdatedtime)

    $("#19a").append(data.statewise[19].state)
    $("#19b").append(data.statewise[19].confirmed)
    $("#19c").append(data.statewise[19].recovered)
    $("#19d").append(data.statewise[19].deaths)
    $("#19e").append(data.statewise[19].lastupdatedtime)

    $("#20a").append(data.statewise[20].state)
    $("#20b").append(data.statewise[20].confirmed)
    $("#20c").append(data.statewise[20].recovered)
    $("#20d").append(data.statewise[20].deaths)
    $("#20e").append(data.statewise[20].lastupdatedtime)

    $("#21a").append(data.statewise[21].state)
    $("#21b").append(data.statewise[21].confirmed)
    $("#21c").append(data.statewise[21].recovered)
    $("#21d").append(data.statewise[21].deaths)
    $("#21e").append(data.statewise[21].lastupdatedtime)

    $("#22a").append(data.statewise[22].state)
    $("#22b").append(data.statewise[22].confirmed)
    $("#22c").append(data.statewise[22].recovered)
    $("#22d").append(data.statewise[22].deaths)
    $("#22e").append(data.statewise[22].lastupdatedtime)

    $("#23a").append(data.statewise[23].state)
    $("#23b").append(data.statewise[23].confirmed)
    $("#23c").append(data.statewise[23].recovered)
    $("#23d").append(data.statewise[23].deaths)
    $("#23e").append(data.statewise[23].lastupdatedtime)

    $("#24a").append(data.statewise[24].state)
    $("#24b").append(data.statewise[24].confirmed)
    $("#24c").append(data.statewise[24].recovered)
    $("#24d").append(data.statewise[24].deaths)
    $("#24e").append(data.statewise[24].lastupdatedtime)

    $("#25a").append(data.statewise[25].state)
    $("#25b").append(data.statewise[25].confirmed)
    $("#25c").append(data.statewise[25].recovered)
    $("#25d").append(data.statewise[25].deaths)
    $("#25e").append(data.statewise[25].lastupdatedtime)

    $("#26a").append(data.statewise[26].state)
    $("#26b").append(data.statewise[26].confirmed)
    $("#26c").append(data.statewise[26].recovered)
    $("#26d").append(data.statewise[26].deaths)
    $("#26e").append(data.statewise[26].lastupdatedtime)

    $("#27a").append(data.statewise[27].state)
    $("#27b").append(data.statewise[27].confirmed)
    $("#27c").append(data.statewise[27].recovered)
    $("#27d").append(data.statewise[27].deaths)
    $("#27e").append(data.statewise[27].lastupdatedtime)

    $("#28a").append(data.statewise[28].state)
    $("#28b").append(data.statewise[28].confirmed)
    $("#28c").append(data.statewise[28].recovered)
    $("#28d").append(data.statewise[28].deaths)
    $("#28e").append(data.statewise[28].lastupdatedtime)

    $("#29a").append(data.statewise[29].state)
    $("#29b").append(data.statewise[29].confirmed)
    $("#29c").append(data.statewise[29].recovered)
    $("#29d").append(data.statewise[29].deaths)
    $("#29e").append(data.statewise[29].lastupdatedtime)

    $("#30a").append(data.statewise[30].state)
    $("#30b").append(data.statewise[30].confirmed)
    $("#30c").append(data.statewise[30].recovered)
    $("#30d").append(data.statewise[30].deaths)
    $("#30e").append(data.statewise[30].lastupdatedtime)

    $("#31a").append(data.statewise[31].state)
    $("#31b").append(data.statewise[31].confirmed)
    $("#31c").append(data.statewise[31].recovered)
    $("#31d").append(data.statewise[31].deaths)
    $("#31e").append(data.statewise[31].lastupdatedtime)

    $("#32a").append(data.statewise[32].state)
    $("#32b").append(data.statewise[32].confirmed)
    $("#32c").append(data.statewise[32].recovered)
    $("#32d").append(data.statewise[32].deaths)
    $("#32e").append(data.statewise[32].lastupdatedtime)


    $("#33a").append(data.statewise[33].state)
    $("#33b").append(data.statewise[33].confirmed)
    $("#33c").append(data.statewise[33].recovered)
    $("#33d").append(data.statewise[33].deaths)
    $("#33e").append(data.statewise[33].lastupdatedtime)

    $("#34a").append(data.statewise[34].state)
    $("#34b").append(data.statewise[34].confirmed)
    $("#34c").append(data.statewise[34].recovered)
    $("#34d").append(data.statewise[34].deaths)
    $("#34e").append(data.statewise[34].lastupdatedtime)

    $("#35a").append(data.statewise[35].state)
    $("#35b").append(data.statewise[35].confirmed)
    $("#35c").append(data.statewise[35].recovered)
    $("#35d").append(data.statewise[35].deaths)
    $("#35e").append(data.statewise[35].lastupdatedtime)

    $("#36a").append(data.statewise[36].state)
    $("#36b").append(data.statewise[36].confirmed)
    $("#36c").append(data.statewise[36].recovered)
    $("#36d").append(data.statewise[36].deaths)
    $("#36e").append(data.statewise[36].lastupdatedtime)

    $("#37a").append(data.statewise[37].state)
    $("#37b").append(data.statewise[37].confirmed)
    $("#37c").append(data.statewise[37].recovered)
    $("#37d").append(data.statewise[37].deaths)
    $("#37e").append(data.statewise[37].lastupdatedtime)

    const myChart = document.getElementById("myChart").getContext('2d')

    const chart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: state,
        datasets: [{
            label: "Confirmed cases",
            data: confirmed,
            backgroundColor: "yellow",
            minBarLength: 100
          },
          {
            label: "Active cases",
            data: active,
            backgroundColor: "blue",
            minBarLength: 100
          },
          {
            label: "Recovered cases",
            data: recovered,
            backgroundColor: "green",
            minBarLength: 100
          },
          {
            label: "Deaths cases",
            data: deaths,
            backgroundColor: "red",
            minBarLength: 100
          }
        ]
      }, //for below options read samples of chart.js
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Live visulaization'
          }
        },
        scales: {
          y: {
            stacked: true
          }
        }
      },
    })
  })
})
