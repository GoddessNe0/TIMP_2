// Интерфейс стратегии для расчета взносов
class InsuranceType {
    calculate(squareMeters, residents, yearBuilt, term) {
      throw new Error('Method "calculate" should be implemented');
    }
  }
  
  // Реализация стратегии для квартиры
  class Apartment extends InsuranceType {
    calculate(squareMeters, residents, yearBuilt, term) {
      const baseRate = 5.0;
      const ageFactor = Math.max(1.0, (2024 - yearBuilt) / 100);
      return squareMeters * baseRate * ageFactor * term;
    }
  }
  
  // Реализация стратегии для таунхауса
  class Townhouse extends InsuranceType {
    calculate(squareMeters, residents, yearBuilt, term) {
      const baseRate = 7.0;
      const ageFactor = Math.max(1.0, (2024 - yearBuilt) / 80);
      return squareMeters * baseRate * ageFactor * term;
    }
  }
  
  // Реализация стратегии для коттеджа
  class Cottage extends InsuranceType {
    calculate(squareMeters, residents, yearBuilt, term) {
      const baseRate = 10.0;
      const ageFactor = Math.max(1.0, (2024 - yearBuilt) / 50);
      return squareMeters * baseRate * ageFactor * term;
    }
  }
  
  // Класс-контекст для выбора стратегии
  class InsuranceCalculator {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calculateInsurance(squareMeters, residents, yearBuilt, term) {
      return this.strategy.calculate(squareMeters, residents, yearBuilt, term);
    }
  }
  
  // Пример использования
  const apartmentInsurance = new InsuranceCalculator(new Apartment());
  const resultApartment = apartmentInsurance.calculateInsurance(70, 3, 2010, 5);
  console.log(`Страховой взнос для квартиры: ${resultApartment}`);
  
  const townhouseInsurance = new InsuranceCalculator(new Townhouse());
  const resultTownhouse = townhouseInsurance.calculateInsurance(150, 4, 2005, 3);
  console.log(`Страховой взнос для таунхауса: ${resultTownhouse}`);
  
  const cottageInsurance = new InsuranceCalculator(new Cottage());
  const resultCottage = cottageInsurance.calculateInsurance(200, 5, 2000, 10);
  console.log(`Страховой взнос для коттеджа: ${resultCottage}`);
  