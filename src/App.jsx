import { useState } from "react"

function App() {
	
	const [result, setResult] = useState(0);
	const [input, setInput] = useState("");
	const [error, setError] = useState("");

	// Función para realizar el cálculo
	
	function calcular() {
		try {
		  const result = eval(input);
		  console.log(result);
		  setResult(result);
		  setError("");
		} catch (e) {
		  setResult(0);
		  setError("Invalid input.");
		}
	  }

	// Función para limpiar el input, el resultado y el error
	const AC = () => {
		setInput("");
		setResult(0);
		setError("");
	};

	/*Este return regresa la interfaz de usuario para que se despliegue en el html, despliega cada boton y los operadores 
	o teclas especiales tienen un estilo especial que los hace ver de otro color, además cada boton tiene su animación cuando 
	se le pica o pone el raton por encima. 
	*/
	return (
		<div className="">
			<div className="bg-gray-700 rounded-xl">
				<h3 className="text-right">{input}</h3>
				<h2 className="text-right">{result}</h2>
				<h2 className="text-right">{error}</h2>
				<div className="grid grid-cols-4 bg-blue-400 rounded-xl">					
					<button className="buttonOp" onClick={AC}>AC</button>					
					<button className="buttonOp" onClick={() => setInput(prev => prev + " / ")}>/</button>
					<button className="buttonOp" onClick={() => setInput(prev => prev + " * ")}>x</button>
					<button className="buttonOp" onClick={() => setInput(prev => prev.slice(0, -1))}>Delete</button>

					<button onClick={() => setInput(prev => prev + "7")}>7</button>
					<button onClick={() => setInput(prev => prev + "8")}>8</button>
					<button onClick={() => setInput(prev => prev + "9")}>9</button>
					<button className="buttonOp" onClick={() => setInput(prev => prev + " - ")}>-</button>

					<button onClick={() => setInput(prev => prev + "4")}>4</button>
					<button onClick={() => setInput(prev => prev + "5")}>5</button>
					<button onClick={() => setInput(prev => prev + "6")}>6</button>
					<button className="buttonOp" onClick={() => setInput(prev => prev + " + ")}>+</button>

					<button onClick={() => setInput(prev => prev + "1")}>1</button>
					<button onClick={() => setInput(prev => prev + "2")}>2</button>
					<button onClick={() => setInput(prev => prev + "3")}>3</button>
					<button className="row-span-2 buttonOp" onClick={calcular}>=</button>

					<button onClick={() => setInput(prev => prev + ".")}>.</button>
					<button onClick={() => setInput(prev => prev + "0")}>0</button>
					<button className="buttonOp" onClick={() => setInput(prev => prev + " % ")}>%</button>
				</div>
			</div>
		</div>
	)
}

export default App
