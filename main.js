function calculate()
{
  Number_1 = Number(document.getElementById("sideOfTheFarm").value);
  var area = Number_1 * Number_1;
  var perimeter = 4 * Number_1;
  document.getElementById("areaAnswer").innerHTML = area;
   document.getElementById("perimeterAnswer").innerHTML = perimeter;
}