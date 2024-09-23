// Импортируем классы
class InsuranceType {
  calculate(squareMeters, yearBuilt, term) {}
}

class Apartment extends InsuranceType {
  calculate(squareMeters, yearBuilt, term) {
    const baseRate = 5.0;
    const ageFactor = Math.max(1.0, (2024 - yearBuilt) / 100);
    return squareMeters * baseRate * ageFactor * term;
  }
}

class Townhouse extends InsuranceType {
  calculate(squareMeters, yearBuilt, term) {
    const baseRate = 7.0;
    const ageFactor = Math.max(1.0, (2024 - yearBuilt) / 80);
    return squareMeters * baseRate * ageFactor * term;
  }
}

class Cottage extends InsuranceType {
  calculate(squareMeters, yearBuilt, term) {
    const baseRate = 10.0;
    const ageFactor = Math.max(1.0, (2024 - yearBuilt) / 50);
    return squareMeters * baseRate * ageFactor * term;
  }
}

class InsuranceCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculateInsurance(squareMeters, yearBuilt, term) {
    return this.strategy.calculate(squareMeters, yearBuilt, term);
  }
}


for (let i = 1; i <= 10; i++) {
  const squareMeters = Math.floor(Math.random() * (300 - 15 + 1)) + 15;
  const yearBuilt = Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900;
  const term = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

  const strategy = getRandomStrategy();
  const calculator = new InsuranceCalculator(strategy);

  const insuranceCost = calculator.calculateInsurance(squareMeters, yearBuilt, term);
  console.log(`Вызов ${i}: Недвижимость: ${strategy.constructor.name} Площадь: ${squareMeters}, Год постройки: ${yearBuilt}, Срок: ${term} = ${insuranceCost}`);
}













// Функция для выбора случайной стратегии
function getRandomStrategy() {
  const strategies = [new Apartment(), new Townhouse(), new Cottage()];
  const randomIndex = Math.floor(Math.random() * strategies.length);
  return strategies[randomIndex];
}