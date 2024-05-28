import InventoryItem from "./models/Inventoryitem";

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

const calculateInventoryValue = (
  arrayOfInventroyItems: InventoryItem[]
): number => {
  let totalVal: number = 0;
  arrayOfInventroyItems.forEach(
    (item) => (totalVal = totalVal + item.product.price * item.quantity)
  );

  return arrayOfInventroyItems.length < 1 ? 0 : totalVal;
};

export { calculateInventoryValue, inventory };
