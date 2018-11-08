import Chart from 'chart.js/dist/Chart.min'

class DashboardChart {
  constructor(options) {
    const {
      id,
      data,
      type
    } = options
    this.id = id
    this.data = data
    this.type = type
    this._setColors()
    this._randomizeColors()
  }

  render() {
    new Chart(this.id, {
      type: this.type,
      data: this._configuration(),
      options: {
        display: true
      }
    })
  }

  _configuration() {
    return {
      labels: this.data['keys'],
      datasets: [{
        data: this.data['values'],
        backgroundColor: this._colors(0.7),
        hoverBackgroundColor: this._colors(1.0)
      }]
    }
  }

  _setColors() {
    this._color_list = [
      'rgb(181,181,13)',
      'rgb(213,142,58)',
      'rgb(127,170,79)',
      'rgb(36,10,147)',
      'rgb(94,11,23)',
      'rgb(76,54,55)',
      'rgb(188,195,110)',
      'rgb(150,238,8)',
      'rgb(223,113,232)',
      'rgb(25,225,60)',
      'rgb(80,39,106)',
      'rgb(237,169,32)',
      'rgb(152,110,15)',
      'rgb(218,15,219)',
      'rgb(237,166,246)',
      'rgb(12,189,114)',
      'rgb(228,40,137)',
      'rgb(125,244,204)',
      'rgb(167,226,8)',
      'rgb(5,10,176)',
      'rgb(136,125,102)',
      'rgb(240,182,83)',
      'rgb(81,82,151)',
      'rgb(171,51,100)',
      'rgb(67,237,56)',
      'rgb(119,22,186)',
      'rgb(34,205,149)',
      'rgb(201,73,146)',
      'rgb(73,249,144)',
      'rgb(2,232,24)',
      'rgb(174,179,45)',
      'rgb(95,83,167)',
      'rgb(250,66,147)',
      'rgb(222,241,230)',
      'rgb(199,239,24)',
      'rgb(56,102,230)',
      'rgb(80,222,224)',
      'rgb(252,77,254)',
      'rgb(185,58,83)',
      'rgb(157,209,212)',
      'rgb(235,29,199)',
      'rgb(38,138,16)',
      'rgb(56,168,253)',
      'rgb(178,248,8)',
      'rgb(166,76,86)',
      'rgb(43,158,108)',
      'rgb(98,174,171)',
      'rgb(213,115,99)',
      'rgb(251,207,33)',
      'rgb(32,42,204)',
      'rgb(224,98,110)',
      'rgb(150,138,190)',
      'rgb(44,200,239)',
      'rgb(190,40,219)',
      'rgb(51,87,238)',
      'rgb(37,207,13)',
      'rgb(47,147,139)',
      'rgb(74,150,11)',
      'rgb(227,188,130)',
      'rgb(3,219,66)'
    ]
  }

  _randomizeColors() {
    this._color_list = this._color_list.sort(function() {
      return 0.5 - Math.random()
    })
  }

  _colors(opacity) {
    return this._color_list.map( (color) => this._setOpacity(color, opacity) )
  }

  _setOpacity(color, opacity) {
    const [ r, g, b ] = color.match(/\d+/g)
    return 'rgb(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')'
  }

}

export default DashboardChart
