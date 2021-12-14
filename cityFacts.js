function cityFacts(obj){
      let  string = `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
    return string
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
    }));