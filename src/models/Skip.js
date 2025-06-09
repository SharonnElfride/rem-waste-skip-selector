class Skip {
  constructor(
    id,
    size,
    hirePeriodDays,
    transportCost,
    perTonneCost,
    priceBeforeVat,
    vat,
    postcode,
    area,
    forbidden,
    createdAt,
    updatedAt,
    allowedOnRoad,
    allowsHeavyWaste
  ) {
    this.id = id;
    this.size = size;
    this.hirePeriodDays = hirePeriodDays;
    this.transportCost = transportCost;
    this.perTonneCost = perTonneCost;
    this.priceBeforeVat = priceBeforeVat;
    this.vat = vat;
    this.postcode = postcode;
    this.area = area;
    this.forbidden = forbidden;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.allowedOnRoad = allowedOnRoad;
    this.allowsHeavyWaste = allowsHeavyWaste;
  }
}

export default Skip;
