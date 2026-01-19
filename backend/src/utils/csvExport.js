import { createObjectCsvWriter } from "csv-writer";
import path from "path";
import fs from "fs";

export const generateCSV = async (products) => {
  const filePath = path.join("reports", "low-stock-report.csv");

  // Ensure reports folder exists
  if (!fs.existsSync("reports")) {
    fs.mkdirSync("reports");
  }

  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: "name", title: "Name" },
      { id: "sku", title: "SKU" },
      { id: "quantity", title: "Quantity" },
      { id: "price", title: "Price" },
    ],
  });

  await csvWriter.writeRecords(products);
  return filePath;
};
