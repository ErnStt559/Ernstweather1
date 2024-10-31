function generateReport() {
    // Fetch data from the dashboard fields
    const temperature = document.getElementById('temperature').innerText;
    const humidity = document.getElementById('humidity').innerText;
    const windSpeed = document.getElementById('wind-speed').innerText;
    const pressure = document.getElementById('pressure').innerText;

    const entry1 = document.getElementById('entry1').value;
    const entry2 = document.getElementById('entry2').value;
    const entry3 = document.getElementById('entry3').value;
    const entry4 = document.getElementById('entry4').value;

    // Create a new PDF document
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Daily Weather & Activity Report", 20, 20);

    // Weather Data Section
    doc.setFontSize(14);
    doc.text("Weather Data:", 20, 40);
    doc.setFontSize(12);
    doc.text(`Temperature: ${temperature}`, 20, 50);
    doc.text(`Humidity: ${humidity}`, 20, 60);
    doc.text(`Wind Speed: ${windSpeed}`, 20, 70);
    doc.text(`Pressure: ${pressure}`, 20, 80);

    // Manual Entries Section
    doc.setFontSize(14);
    doc.text("Manual Data Entries:", 20, 100);
    doc.setFontSize(12);
    doc.text(`Entry 1: ${entry1}`, 20, 110);
    doc.text(`Entry 2: ${entry2}`, 20, 120);
    doc.text(`Entry 3: ${entry3}`, 20, 130);
    doc.text(`Entry 4: ${entry4}`, 20, 140);

    // Save the PDF
    doc.save("Weather_Report.pdf");
}
