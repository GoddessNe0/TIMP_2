// Базовый класс недвижимости
// [1] Создание объектов недвижимости
class Property {
  constructor(area, residents, yearBuilt) {
    this.area = area; 
    this.residents = residents; 
    this.yearBuilt = yearBuilt;
  }

  // Метод для расчета базовой стоимости
  // [2] Расчёт базовой стоимости
  getBasePremium() {
    let baseRate = 50; // Базовая ставка
    let depreciationFactor = this.calculateDepreciation(); //
    return this.area * baseRate * depreciationFactor;
  }

  // Расчет коэффициента износа в зависимости от года постройки
  // [3]
  calculateDepreciation() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.yearBuilt;
    if (age < 10) { //[4]
      return 1.0; // Здание новое [5]
    } else if (age < 30) { //[6]
      return 0.9; // Небольшой износ //[7]
    } else if (age < 50) {//[8]
      return 0.7; // Значительный износ [9]
    } else {
      return 0.5; // Сильно изношено [10]
    }
  }

  // Метод для расчета коэффициента по числу проживающих
  // [11]
  calculateResidentFactor() {
    if (this.residents <= 2) { //[12]
      return 1.0; //[13]
    } else if (this.residents <= 4) { //[14]
      return 1.2; //[15]
    } else {
      return 1.5; //[16]
    }
  }


  // Коэффициент по сроку страхования
  //[17]
  getPeriodFactor(insurancePeriod) { 
    if (insurancePeriod < 1) { //[18]
      return 1.1; // Краткосрочное страхование [19]
    } else if (insurancePeriod <= 3) { //[20]
      return 1.0; // Средний срок //[21]
    } else {
      return 0.9; // Долгосрочное страхование [22]
    }
  }

  // Финальный расчет страхового взноса
  //[23]
  calculatePremium(insurancePeriod) { // [6]
    let basePremium = this.getBasePremium(); //[2]
    let residentFactor = this.calculateResidentFactor(); // [5]
    let periodFactor = this.getPeriodFactor(insurancePeriod); // [7]

    return basePremium * residentFactor * periodFactor;
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

module.exports = { Apartment, Townhouse, Cottage };

const myApartment = new Apartment(80, 3, 2005);
const myTownhouse = new Townhouse(120, 4, 1995);
const myCottage = new Cottage(150, 5, 1985);

console.log("Страховой взнос за квартиру: " + myApartment.calculatePremium(2)); // Средний срок
console.log("Страховой взнос за таунхаус: " + myTownhouse.calculatePremium(4)); // Долгий срок
console.log("Страховой взнос за коттедж: " + myCottage.calculatePremium(1)); // Краткосрочное
