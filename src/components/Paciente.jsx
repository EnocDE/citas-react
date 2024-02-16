function Paciente({ paciente, setPaciente, eliminarPaciente }) {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('¿Realmente deseas eliminarlo?');
        if (respuesta) {
            eliminarPaciente(id);
        } 
    }

    return (
        <div className="mt-6 bg-white shadow-md px-5 py-10 rounded-lg first-of-type:mt-0">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-5">
                <button
                    className="uppercase px-10 py-2 bg-yellow-500 text-white font-semibold rounded-md transition-colors hover:bg-yellow-600"
                    type="button"
                    onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button
                    className="uppercase px-10 py-2 bg-red-600 text-white font-semibold rounded-md transition-colors hover:bg-red-700"
                    type="button"
                    onClick={ handleEliminar }>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;
