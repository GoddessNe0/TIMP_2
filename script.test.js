const { Apartment, Townhouse, Cottage } = require('./script'); // Убедитесь, что путь корректен

describe('Тестирование расчета страхового взноса', () => {

  test('Расчет для квартиры с базовыми параметрами', () => {
    const myApartment = new Apartment(80, 3, 2005);
    const premium = myApartment.calculatePremium(2); // Средний срок
    expect(premium).toBeCloseTo(4320); // Ожидаемое значение премии (пример)
  });

  test('Расчет для таунхауса с долгим сроком страхования', () => {
    const myTownhouse = new Townhouse(120, 4, 1995);
    const premium = myTownhouse.calculatePremium(4); // Долгий срок
    expect(premium).toBeCloseTo(5832); // Ожидаемое значение премии (пример)
  });

  test('Расчет для коттеджа с краткосрочным страхованием', () => {
    const myCottage = new Cottage(150, 5, 1985);
    const premium = myCottage.calculatePremium(1); // Краткосрочный период
    expect(premium).toBeCloseTo(7875); // Ожидаемое значение премии (пример)
  });
  
});
