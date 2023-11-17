/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}
function isWeekend(weekday: WeekDays): boolean {
  if (weekday === WeekDays.saturday || weekday === WeekDays.sunday) {
    return true;
  }
  return false;
}
