function plotGraphs(equations) {
  const xValues = numeric.linspace(-1000, 1000, 10000); // Adjust range here
  const traces = [];

  equations.forEach((equation, index) => {
    if (equation.trim()) {
      try {
        const formattedEquation = equation.replace(/([0-9])([a-zA-Z])/g, "$1 * $2");
        const scope = { x: 0 };
        const code = math.compile(formattedEquation);
        const yValues = xValues.map((x) => {
          scope.x = x;
          return code.evaluate(scope);
        });

        traces.push({
          x: xValues,
          y: yValues,
          mode: "lines",
          name: `Equation ${index + 1}`,
          text: yValues.map((y, i) => `(${xValues[i]}, ${y})`),
          hovertemplate: `Equation ${index + 1}: %{text}<extra></extra>`,
          line: { color: `hsl(${(index * 50) % 360}, 100%, 50%)` },
        });
      } catch (error) {
        console.error(error);
        alert(`Invalid equation (${index + 1}). Please check your input.`);
      }
    }
  });

  if (traces.length) {
    Plotly.react(graphDiv, traces, {
      xaxis: { title: "X-axis" },
      yaxis: { title: "Y-axis" },
      margin: { t: 20 },
      hovermode: "closest",
      dragmode: "pan",
      showlegend: true,
    }, {
      responsive: true,
      displayModeBar: true,
      displaylogo: false,
      scrollZoom: true,
    });
  }
}

const inputContainer = document.getElementById("inputContainer") || {};
const addEquationBtn = document.getElementById("addEquationBtn");
const plotBtn = document.getElementById("plotBtn");
const graphDiv = document.getElementById("graph");

Plotly.newPlot(graphDiv, [], {
  xaxis: { title: "X-axis" },
  yaxis: { title: "Y-axis" },
  margin: { t: 20 },
  hovermode: "closest",
  dragmode: "pan",
  showlegend: false,
}, {
  responsive: true,
  displayModeBar: true,
  displaylogo: false,
  scrollZoom: true,
});

addEquationBtn.addEventListener("click", () => {
  const newInputArea = document.createElement("div");
  newInputArea.className = "input-area";
  newInputArea.innerHTML = '<input type="text" class="equation" placeholder="Enter your equation...">';
  inputContainer.appendChild(newInputArea);
});

plotBtn.addEventListener("click", () => {
  const equations = Array.from(document.getElementsByClassName("equation")).map(input => input.value);
  console.log('Equations: ', equations);
  if (equations.some(equation => equation)) {
    plotGraphs(equations);
  } else {
    alert("Please enter at least one equation to plot.");
  }
});