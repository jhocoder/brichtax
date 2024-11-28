const Cuartobanner = () => {
    return (
      <section id="cuartobanner" className="h-[80vh] flex items-center  bg-teal-100">
        <form
          action=""
          className="h-96 flex flex-col items-center gap-6 justify-center w-[90vh] bg-teal-800 rounded-lg shadow-xl shadow-teal-600 transition-shadow duration-500 hover:shadow-xl ml-9"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full max-w-[300px] py-2 px-4 rounded-md border-solid border-2 border-amber-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full max-w-[300px] py-2 px-4 rounded-md border-solid border-2 border-amber-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
          />
          <input
            type="text"
            placeholder="Asunto"
            className="w-full max-w-[300px] py-2 px-4 rounded-md border-solid border-2 border-amber-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full max-w-[300px] py-2 px-4 rounded-md border-solid border-2 border-amber-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
          />
        </form>
      </section>
    );
  }
  
  export default Cuartobanner;
  