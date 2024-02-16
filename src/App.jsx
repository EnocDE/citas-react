import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";

function App() {
    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    function eliminarPaciente(id) {
        const pacientesActualizados = pacientes.filter(
            (paciente) => paciente.id !== id
        );
        setPacientes(pacientesActualizados);
    }

    return (
        <div className="container mx-auto min-h-screen">
            <Header />
            <div className="mt-12 md:flex gap-2">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
