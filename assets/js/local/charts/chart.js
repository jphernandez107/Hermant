// chart colors
var colors = ['#007bff','#28a745','#333333','RGBA(0,117,255,1)','#dc3545','#6c757d', 'RGBA(0,117,255,0.4)', 'RGBA(255,101,80,0.4)', 'RGBA(128,117,255,1)', 'RGBA(128,117,255,0.4)', 'RGBA(255,174,80,1)', 'RGBA(255,174,80,0.4)', 'RGBA(151,212,178,1)', 'RGBA(151,212,178,0.4)'];

/* large line chart */
var a = 0.07;
var equipos = 25;
var horasPorMes = 8*30;
var costIndexChart = document.getElementById("costIndexChart");
var costIndexData = {
  labels: ["01/19", "02/19", "03/19", "04/19", "05/19", "06/19", "07/19"],
  datasets: [{
    data: [33*a, 29*a, 30*a, 28*a, 26*a, 27*a, 25*a],
    backgroundColor: colors[7],
    borderColor: colors[4],
    borderWidth: 4,
    pointBackgroundColor: colors[1]
  }]
};

if (costIndexChart) {
  new Chart(costIndexChart, {
  type: 'line',
  data: costIndexData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Promedio Indice de Costos [usd/hr]'
        }
      }]
    },
    legend: {
      display: false
    }
  }
  });
}

var dispIndexChart = document.getElementById("dispIndexChart");
var dispIndexData = {
  labels: ["01/19", "02/19", "03/19", "04/19", "05/19", "06/19", "07/19"],
  datasets: [{
    data: [67, 71, 70, 72, 74, 73, 75],
    backgroundColor: colors[6],
    borderColor: colors[3],
    borderWidth: 4,
    pointBackgroundColor: colors[1]
  }]
};

if (dispIndexChart) {
  new Chart(dispIndexChart, {
  type: 'line',
  data: dispIndexData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          min: 55,
          max: 80
        },
        scaleLabel: {
          display: true,
          labelString: 'Disponibilidad Promedio'
        }
      }]
    },
    legend: {
      display: false
    }
  }
  });
}

var generalCostsChart = document.getElementById("generalCostsChart");

generalCostsData = {
    datasets: [{
        data: [69, 31],
        backgroundColor: [
          colors[11],
          colors[13]
        ],
        borderColor: [
          colors[10],
          colors[12]
        ],
        borderWidth: 3
    }],
    labels: [
        'Costos de Mantenimientos [' + '69' + '%]',
        'Costos de Reparaciones [' + '31' + '%]'
    ]
};
if(generalCostsChart){
  new Chart(generalCostsChart, {
    type: 'doughnut',
    data: generalCostsData
  });
}

var mensualCostsChart = document.getElementById("mensualCostsChart");

mensualCostsData = {
  label: 'Gastos mensuales en reparaciones',
  data: [33*a*equipos*horasPorMes, 29*a*equipos*horasPorMes,
         30*a*equipos*horasPorMes, 28*a*equipos*horasPorMes,
         26*a*equipos*horasPorMes, 27*a*equipos*horasPorMes,
         25*a*equipos*horasPorMes],
  backgroundColor: [colors[9],
                    colors[9],
                    colors[9],
                    colors[9],
                    colors[9],
                    colors[9],
                    colors[9]],
  borderColor: [colors[8],
                colors[8],
                colors[8],
                colors[8],
                colors[8],
                colors[8],
                colors[8]],
  borderWidth: 3,
}

options = {
    scales: {
        // xAxes: [{
        //     barPercentage: 0.5,
        //     barThickness: 6,
        //     maxBarThickness: 8,
        //     minBarLength: 2,
        //     gridLines: {
        //         offsetGridLines: true
        //     }
        // }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Costo Total de Mantenimientos [usd]'
          }
        }]
    }
};
if(mensualCostsChart){
  new Chart(mensualCostsChart, {
    type: 'bar',
    data: {
      labels: ["01/19", "02/19", "03/19", "04/19", "05/19", "06/19", "07/19"],
      datasets: [mensualCostsData]
    },
    options: options
  });
}
