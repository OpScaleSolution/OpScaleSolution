// نمودار بازار هدف
const ctxMarket = document.getElementById('marketChart').getContext('2d');
new Chart(ctxMarket, {
  type: 'bar',
  data: {
    labels: ['بانک‌ها', 'دولتی', 'شرکت‌های بزرگ', 'نرم‌افزاری', 'مخابراتی'],
    datasets: [{
      label: 'سهم بازار (%)',
      data: [30, 20, 25, 15, 10],
      backgroundColor: '#e44c65',
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
  }
});

// نمودار ارزش پیشنهادی
const ctxValue = document.getElementById('valueChart').getContext('2d');
new Chart(ctxValue, {
  type: 'pie',
  data: {
    labels: ['امنیت', 'چابکی', 'کاهش هزینه', 'اتوماسیون', 'استقلال'],
    datasets: [{
      data: [25, 20, 20, 20, 15],
      backgroundColor: ['#e44c65', '#f8b195', '#355c7d', '#6c5b7b', '#c06c84'],
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  }
});
