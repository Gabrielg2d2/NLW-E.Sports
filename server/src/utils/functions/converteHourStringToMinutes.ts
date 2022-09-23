// 18:00 => ["18", "00"] => [18, 00] => 1080

export function converteHourStringToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;
  return timeInMinutes;
}
