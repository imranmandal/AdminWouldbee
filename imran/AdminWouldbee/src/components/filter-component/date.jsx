import {
  formatISO,
  endOfDay,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  startOfDay,
} from "date-fns";
import { startOfMonth } from "date-fns/esm";

const today = new Date();
// ----- TODAY

export const todayDisplay ={
  start: formatISO(startOfDay(today), "MM/dd/yyyy"),
  end: formatISO(endOfDay(today), "MM/dd/yyyy")
};
// --------- TODAY DATE END


export const weekDisplay = {
  start: formatISO(startOfWeek(today), "MM/dd/yyyy"),
  end: formatISO(endOfWeek(today), "MM/dd/yyyy"),
};
// --------- CURRENT WEEK END


export const lastWeekDisplay = {
  start: formatISO(startOfWeek(startOfWeek(today)-1), "MM/dd/yyyy"),
  end: formatISO(endOfWeek(startOfWeek(today)-1), "MM/dd/yyyy"),
};
// ----- LAST WEEK END


export const currentMonthDisplay = {
  start: formatISO(startOfMonth(today), "MM/dd/yyyy"),
  end: formatISO(endOfMonth(today), "MM/dd/yyyy")
}
// ----- CURRENT MONTH END


export const lastMonthDisplay = {
  start: formatISO(startOfMonth(startOfMonth(today)-1), "MM/dd/yyyy"),
  end: formatISO(endOfMonth(startOfMonth(today)-1), "MM/dd/yyyy"),
}
// ----- LAST MONTH END


export const customFromDisplay= (date) => ({
  start: formatISO(startOfDay(date), "MM/dd/yyyy"),
});


export const customToDisplay= (date) => ({
  end: formatISO(startOfDay(date), "MM/dd/yyyy"),
});