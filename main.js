const targetDate = new Date('2024-07-14T00:00:00');

// Funkcja odliczania
function countdown() {
  // Aktualna data i czas
  const currentDate = new Date();

  // Różnica między zadaną datą a aktualną datą
  const timeDiff = targetDate - currentDate;

  // Konwersja różnicy na odpowiednie jednostki czasu
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Wyświetlanie odliczania
  const countdownText = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  document.getElementById("countdown").innerHTML = countdownText;

  // Sprawdzenie warunku zakończenia odliczania
  if (timeDiff <= 0) {
    document.getElementById("countdown").innerHTML = "Szczęśliwego dnia kebaba!";
    clearInterval(timer);
    
  }
}

countdown();

// Uruchomienie funkcji odliczania co sekundę
const timer = setInterval(countdown, 1000);