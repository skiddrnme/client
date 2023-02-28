const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

function downloadCSV() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');
    let csv = '';

    // Loop through rows
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll('td, th');
      let row = '';

      // Loop through cells
      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j].innerText.replace(',', ''); // Remove commas from cells
        row += `"${cell}",`;
      }

      csv += `${row.slice(0, -1)}\n`; // Remove last comma and add newline
    }

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'genius-charts-data.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})