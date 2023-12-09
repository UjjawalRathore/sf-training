const companies = [
    {name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru']},
    {name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur']}
  ];
  console.log(companies.length);
  for(let i=0;i<companies.length;i++)
      console.log(companies[i].name);
  for(let i=0;i<companies.length;i++)
      console.log("headquarter of "+companies[i].name+" is "+companies[i].hq);


function showCompanyDetails(){
    var table = document.getElementById("companyTable");
    var tbody = document.getElementById("companyBody");

    tbody.innerHTML = "";
    companies.forEach(function(company){
        var row = tbody.insertRow();
        var cell1 = tbody.insertCell(0);
        var cell2 = tbody.insertCell(1);
        var cell3 = tbody.insertCell(2);
        
        cell1.textContent = company.name;
        cell2.textContent = company.hq;
        cell3.textContent = company.indiaLocations;
    });

    table.style.display = "table";
}






