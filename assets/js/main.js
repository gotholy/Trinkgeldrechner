function trinkgeld() {
  const bill = Number(document.querySelector("#rechnung").value);
  const people = Number(document.querySelector("#menschen").value);
  const service = Number(document.querySelector("#service").value);

  document.querySelector(".outputTrinkgeld").innerHTML =
    "Trinkgeld: " + (bill * service - bill).toFixed(2) + "€";

  document.querySelector(".outputGesamt").innerHTML =
    "Rechnung Gesamt: " + (bill * service).toFixed(2) + "€";

  document.querySelector(".outputEinzel").innerHTML =
    "Rechnung Einzeln: " + ((bill * service) / people).toFixed(2) + "€";
}
