class Item {
  constructor(
    docId,
    name,
    openingStock,
    serial,
    barcode,
    des,
    uom,
    subunit,
    packSize,
    purchaseRate,
    saleRate,
    minLevel,
    maxLevel,
    category,
    type,
    id,
    typeSr,
    categorySr
  ) {
    this.docId = docId;
    this.name = name;
    this.openingStock = openingStock;
    this.serial = serial;
    this.barcode = barcode;
    this.des = des;
    this.uom = uom;
    this.subunit = subunit;
    this.packSize = packSize;
    this.purchaseRate = purchaseRate;
    this.saleRate = saleRate;
    this.minLevel = minLevel;
    this.maxLevel = maxLevel;
    this.category = category;
    this.type = type;
    this.id = id;
    this.typeSr = typeSr;
    this.categorySr = categorySr;
  }
}
module.exports = Item;
