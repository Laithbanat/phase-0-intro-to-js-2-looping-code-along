// Define the function writeCards to create thank you messages for each name provided
function writeCards(names, eventName) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouMessages;
}

// Define the function countDown to count down from a given number and log each number
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

module.exports = { writeCards, countDown };
