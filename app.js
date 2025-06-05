// Lai varētu izvēlēties kuru no tabiem atvērt
function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((el) => {
    el.style.display = "none";
  });
// Izvēlētais tab active, tātad izvēlētā tab tabulas atvēršana
  const tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((el) => {
    el.classList.remove("active");
  });
// Atvert to tab, kuru lietotājs izvēlējās
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Automātiski atver pirmo tad, kad lapa tiek atvērta
document.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.querySelector(".tablinks");
  if (defaultTab) defaultTab.click();
});

// Garuma pārvēršana vienā mērvienībā (Šajā gadījumā uz metriem)
function convertLength() {
  const value = parseFloat(document.getElementById("garums").value);
  const from = document.getElementById("nogar").value;
  const to = document.getElementById("uzgar").value;

  const factors = {
    mm: 0.001,
    cm: 0.01,
    dm: 0.1,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.34,
    nmi: 1852
  };

  const meters = value * factors[from];
  const result = meters / factors[to];
// Rezultāta parādīšana
  document.getElementById("rezGarums").innerText = `${value} ${from} = ${result.toFixed(4)} ${to}`;
}

// Ātruma pārveidošana (metri sekundē)
function convertSpeed() {
  const value = parseFloat(document.getElementById("atrums").value);
  const from = document.getElementById("noatr").value;
  const to = document.getElementById("uzatr").value;

  const factors = {
    ms: 1,
    kmh: 0.277778,
    cms: 0.01,
    mph: 0.44704,
    fps: 0.3048,
    ips: 0.0254,
    yds: 0.9144,
    knot: 0.514444,
    mach: 343,
    c: 299792458
  };

  const base = value * factors[from];
  const result = base / factors[to];
// Rezultāta parādīšana
  document.getElementById("rezAtrums").innerText = `${value} ${from} = ${result.toFixed(4)} ${to}`;
}

// Temperatūras pārveidošana (Celsija)
function convertTemperature() {
  const value = parseFloat(document.getElementById("temp").value);
  const from = document.getElementById("notemp").value;
  const to = document.getElementById("uztemp").value;

  function toCelsius(val, unit) {
    switch (unit) {
      case "C": return val;
      case "F": return (val - 32) * 5 / 9;
      case "K": return val - 273.15;
      case "R": return (val - 491.67) * 5 / 9;
      case "Re": return val * 1.25;
      case "N": return val * 100 / 33;
      case "De": return 100 - val * 2 / 3;
      case "Ro": return (val - 7.5) * 40 / 21;
      default: return NaN;
    }
  }

  function fromCelsius(val, unit) {
    switch (unit) {
      case "C": return val;
      case "F": return val * 9 / 5 + 32;
      case "K": return val + 273.15;
      case "R": return (val + 273.15) * 9 / 5;
      case "Re": return val * 0.8;
      case "N": return val * 33 / 100;
      case "De": return (100 - val) * 1.5;
      case "Ro": return val * 21 / 40 + 7.5;
      default: return NaN;
    }
  }

  const celsius = toCelsius(value, from);
  const result = fromCelsius(celsius, to);
// Rezultāta parādīšana
  document.getElementById("rezTemp").innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
}
