export default function Menu() {
    return (
        <div 
            className="bg-[url('/cocteles-verano.webp')] bg-cover bg-center bg-no-repeat min-h-screen p-8"
        >
            <header className="container mx-auto px-5">
                <div className="flex justify-between items-center w-full py-5">
                    <div>
                        <img className="w-48" src="/IDrinksinfond.png" alt="logotipo" /> 
                    </div>
                </div>
            </header>
            
            <form
                className='w-full md:w-3/4 lg:w-1/2 bg-slate-800 p-10 rounded-xl shadow-lg space-y-8 mx-auto'
            >
                <div className='space-y-6'>
                    <label 
                        htmlFor="ingredient"
                        className='block text-white uppercase font-extrabold text-lg'
                    >Nombre o Ingredientes</label>

                    <input
                        id='ingredient'
                        type='text'
                        name='ingredient'
                        className='p-3 w-full rounded-lg focus:outline-none bg-white'
                        placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'
                    />
                </div>
                <div className='space-y-6'>
                    <label 
                        htmlFor="category"
                        className='block text-white uppercase font-extrabold text-lg'
                    >Categoría</label>

                    <select
                        id='category'
                        name='category'
                        className='p-3 w-full rounded-lg focus:outline-none bg-white'
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="1">Categoría 1</option>
                        <option value="2">Categoría 2</option>
                        <option value="3">Categoría 3</option>
                    </select>
                </div>
                <input
                    type='submit'
                    value='Buscar Recetas'
                    className='cursor-pointer hover:bg-blue-600 bg-blue-500 text-white font-extrabold w-full p-2 rounded-lg uppercase'
                />
            </form>
        </div>
    );
}