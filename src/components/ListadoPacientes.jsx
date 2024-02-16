import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
    return (
        <div className=" mt-10 md:mt-0 md:mx-0 md:w-3/5 mx-5 sm:mx-0">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado pacientes
                    </h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y citas
                        </span>
                    </p>

                    <div className="pb-5 rounded-md md:pb-0 md:h-[641px] md:pr-2 md:overflow-y-scroll">
                        {pacientes.map((paciente) => (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay pacientes
                    </h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Agrega tus {""}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y citas
                        </span>
                    </p>
                </>
            )}
        </div>
    );
}

export default ListadoPacientes;
