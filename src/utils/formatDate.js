export default function convertUnixTimestamp(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

  return {
    time: formattedTime,
    date: formattedDate,
  };
}
