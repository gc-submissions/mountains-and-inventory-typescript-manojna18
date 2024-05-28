import Mountain from "./models/Mountains";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (arrOfMtns: Mountain[]): string => {
  if (arrOfMtns.length < 1) {
    return "";
  }
  const tallestMtn = arrOfMtns.reduce((acc, mtn) => {
    return mtn.height > acc.height ? mtn : acc;
  });
  return tallestMtn.name;
};
