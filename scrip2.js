function calculateCost2() {
  const material = document.getElementById("material").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const depth = document.getElementById("depth").value;
  
  let printTime;
  let buildSpeed = document.getElementById("buildSpeed").value;
  // Скорость печати
  let filamentSize = document.getElementById("filamentSize").value;
  // Размер сопла
  let printerCount = document.getElementById("printerCount").value;
  // Количество принтеров
  let densityFigure;
  // Плотность материала
  let costPrinter = document.getElementById("costPrinter").value;
  // Стоимость принтера
  let quantityАctions = document.getElementById("quantityАctions").value;
  // 1000 Моделей до первых поломок
  let deviceAmoratization = costPrinter / quantityАctions;
  // Аморатизация устройства (отбтваем стоимость принтера)
  let costPerGram;
  // Стоимость материала за грамм
  let rejectRate = document.getElementById("rejectRate").value;
  // Процент брака 15%
  let roomHire = document.getElementById("roomHire").value;
  // Стоимость аренды
  let workingHours = document.getElementById("workingHours").value;
  // Рабочих часов в месяц
  let costWorkingHours = roomHire / workingHours;
  // Стоимость одного рабочего часа

  let costConsumables = document.getElementById("costConsumables").value;
  // Стоимость расходников для обслуживания принтера на месяц
  
  let artService = 500;
  // Услуги художника  не подходит!
  let markup = document.getElementById("markup").value;
  //  Наценка

  
  switch(material) {
    case "pla":
      costPerGram = 1.5;
      densityFigure = 1250;
      break;
    case "abs":
      costPerGram = 2.0;
      densityFigure = 1040;
      break;
    case "pol":
      costPerGram = 1.75;
      densityFigure = 1200;
      break;
    case "rez":
        costPerGram = 2.25;
        densityFigure = 1500;
        break;
    case "fot":
        costPerGram = 2.50;
        densityFigure = 1160;
        break;
    
  }
  let volumeFigure = width * height * depth;
  //Обьем фигуры
  let massFigure = (densityFigure * (volumeFigure / 1000000000)) * 1000;
  //Масса в граммах (обьем фигуры в м3 а было в мм3)
  printTime = (width / buildSpeed ) * (depth / filamentSize ) * (height / filamentSize);
  //Время печати 
  let costE = document.getElementById("costE").value;
  let costEnergy = (printTime / 60) * costE;
  // Потраченные деньги на энергию за время печати
  let costMaterialFigure = massFigure * costPerGram;
  
  // Стоимость пластика затраченного на изделие(масса изделия * стоимость материала за грамм)
  let rentalCostsPrinter = costWorkingHours * ((printTime / 60) / printerCount);
  // затраты на аренду для 1 принтера
  let costConsumablesPrinter = (costConsumables / workingHours) * (printTime / 60 );
  // Обслуживание принтера 
  

  const totalCost = (costMaterialFigure 
    + costEnergy + rentalCostsPrinter 
    + (costMaterialFigure / 100 * rejectRate) 
    + deviceAmoratization 
    + costConsumablesPrinter 
    + artService) * markup;
  // Финальная цена продукта


  const resultElement = document.getElementById("result2");
  resultElement.innerHTML = `Предварительная цена: ${totalCost.toFixed(2)} рублей`;
  resultElement.style.display = "block";
}