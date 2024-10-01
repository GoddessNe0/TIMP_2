// Базовый класс недвижимости
// [1] Создание объектов недвижимости
class Property {
  constructor(area, residents, yearBuilt) {
    this.area = area; // Жилая площадь (м²)
    this.residents = residents; // Число проживающих
    this.yearBuilt = yearBuilt; // Год постройки
  }

  // Метод для расчета базовой стоимости
  // [2] Расчёт базовой стоимости
  getBasePremium() {
    let baseRate = 50; // Базовая ставка на м²
    let depreciationFactor = this.calculateDepreciation(); // [3]
    return this.area * baseRate * depreciationFactor;
  }

  // Расчет коэффициента износа в зависимости от года постройки
  // [4]
  calculateDepreciation() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.yearBuilt;
    if (age < 10) {
      return 1.0; // Здание новое, без износа
    } else if (age < 30) {
      return 0.9; // Небольшой износ
    } else if (age < 50) {
      return 0.7; // Значительный износ
    } else {
      return 0.5; // Сильно изношено
    }
  }

  // Метод для расчета коэффициента по числу проживающих
  // [5]
  calculateResidentFactor() {
    if (this.residents <= 2) {
      return 1.0;
    } else if (this.residents <= 4) {
      return 1.2;
    } else {
      return 1.5;
    }
  }

  // Финальный расчет страхового взноса
  calculatePremium(insurancePeriod) { // [6]
    let basePremium = this.getBasePremium(); //[2]
    let residentFactor = this.calculateResidentFactor(); // [5]
    let periodFactor = this.getPeriodFactor(insurancePeriod); // [7]

    return basePremium * residentFactor * periodFactor;
  }

  // Коэффициент по сроку страхования
  getPeriodFactor(insurancePeriod) { // [7]
    if (insurancePeriod < 1) {
      return 1.1; // Краткосрочное страхование
    } else if (insurancePeriod <= 3) {
      return 1.0; // Средний срок
    } else {
      return 0.9; // Долгосрочное страхование
    }
  }
}

// Класс для квартиры
class Apartment extends Property {
  constructor(area, residents, yearBuilt) { // [1]
    super(area, residents, yearBuilt);
  }
}

// Класс для таунхауса
class Townhouse extends Property {
  constructor(area, residents, yearBuilt) { // [1]
    super(area, residents, yearBuilt);
  }
}

// Класс для коттеджа
class Cottage extends Property {
  constructor(area, residents, yearBuilt) { // [1]
    super(area, residents, yearBuilt);
  }
}

// В конец файлsа script.js
//module.exports = { Apartment, Townhouse, Cottage };

// Пример использования
const myApartment = new Apartment(80, 3, 2005);
const myTownhouse = new Townhouse(120, 4, 1995);
const myCottage = new Cottage(150, 5, 1985);

console.log("Страховой взнос за квартиру: " + myApartment.calculatePremium(2)); // Средний срок
console.log("Страховой взнос за таунхаус: " + myTownhouse.calculatePremium(4)); // Долгий срок
console.log("Страховой взнос за коттедж: " + myCottage.calculatePremium(1)); // Краткосрочное
