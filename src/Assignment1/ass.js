const companies = [
    {name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru']},
    {name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur']}
  ];
  console.log(companies.length);
  for(let i=0;i<companies.length;i++)
      console.log(companies[i].name);
  for(let i=0;i<companies.length;i++)
      console.log("headquarter of "+companies[i].name+" is "+companies[i].hq);