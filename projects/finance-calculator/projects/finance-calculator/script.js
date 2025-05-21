document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  app.innerHTML = `
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-400">Calculadora de Ahorro</h1>
    <form id="calc-form" class="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
      <div>
        <label class="block mb-1">Monto inicial ($)</label>
        <input type="number" id="initial" class="w-full p-2 rounded bg-gray-700 text-white" required />
      </div>
      <div>
        <label class="block mb-1">Aporte mensual ($)</label>
        <input type="number" id="monthly" class="w-full p-2 rounded bg-gray-700 text-white" required />
      </div>
      <div>
        <label class="block mb-1">Tasa de interés anual (%)</label>
        <input type="number" id="rate" class="w-full p-2 rounded bg-gray-700 text-white" required />
      </div>
      <div>
        <label class="block mb-1">Plazo (años)</label>
        <input type="number" id="years" class="w-full p-2 rounded bg-gray-700 text-white" required />
      </div>
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Calcular</button>
    </form>
    <div id="result" class="mt-6 text-center"></div>
  `;

  document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const P = parseFloat(document.getElementById('initial').value);
    const PMT = parseFloat(document.getElementById('monthly').value);
    const r = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const n = parseFloat(document.getElementById('years').value) * 12;

    const futureValue = (P * Math.pow(1 + r, n)) + (PMT * ((Math.pow(1 + r, n) - 1) / r));
    const totalContributions = P + (PMT * n);
    const interestEarned = futureValue - totalContributions;

    document.getElementById('result').innerHTML = `
      <div class="bg-gray-800 p-4 rounded shadow mt-4">
        <p class="text-xl mb-2">Resultado:</p>
        <p><strong>Total Acumulado:</strong> $${futureValue.toFixed(2)}</p>
        <p><strong>Total Aportado:</strong> $${totalContributions.toFixed(2)}</p>
        <p><strong>Intereses Generados:</strong> $${interestEarned.toFixed(2)}</p>
      </div>
    `;
  });
});
