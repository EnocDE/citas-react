
function Alerta({children}) {

    return (
        <div className='px-4 py-4 bg-red-600 rounded-md animate-pulse mb-5 text-white font-semibold text-center'>
            {children}
        </div>
    )
}

export default Alerta
