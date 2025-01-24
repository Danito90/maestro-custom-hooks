function App() {
  return (
    <>
      <h1 className="main-title">Archivo maestro</h1>
      <h2 className="sub-title">Custom Hooks React</h2>
      <ol className="content-list">
        <li>
          <details className="details">
            <summary className="summary">useCounter</summary>
            <p className="details-content">
              El hook useCounter es un hook personalizado de React que proporciona funcionalidad para manejar un contador. Aquí está el desglose de lo que hace:
              <p className="details-subtitle">Inicialización del estado:</p>
              Usa el hook useState para crear una variable de estado counter y una función setCounter para actualizar ese estado. El estado inicial se establece en initialValue, que por defecto es 10.
              <p className="details-subtitle">Incrementar: </p>
              La función increment aumenta el valor del contador en una cantidad especificada (por defecto 1).
              <p className="details-subtitle">Decrementar: </p>
              La función decrement disminuye el valor del contador en una cantidad especificada (por defecto 1).
              <p className="details-subtitle">Resetear: </p>
              La función reset restablece el contador a su valor inicial.
              <p className="details-subtitle">Retorno: </p>
              El hook devuelve un objeto que contiene el valor actual del contador (counter) y las funciones increment, decrement y reset.
            </p>
          </details>
        </li>
        <li>
          <details className="details">
            <summary className="summary">useFetch</summary>
            <p className="details-content">
              El hook useFetch es un hook personalizado de React que se utiliza para realizar solicitudes HTTP y manejar el estado de la solicitud. Aquí está el desglose de lo que hace:
              <p className="details-subtitle">Inicialización del estado: </p>Usa el hook useState para crear una variable de estado state y una función setState para actualizar ese estado. El estado inicial contiene:
              <p className="details-subtitle">data:</p> inicialmente null, donde se almacenarán los datos obtenidos de la solicitud.
              <p className="details-subtitle">isLoading: </p>inicialmente true, indica si la solicitud está en curso.
              <p className="details-subtitle">hasError:</p> inicialmente null, para almacenar cualquier error que ocurra durante la solicitud.
              <p className="details-subtitle">Función getFetch:</p> Esta función realiza la solicitud HTTP:
              Primero, actualiza el estado para indicar que la solicitud está en curso (isLoading: true). Luego, realiza la solicitud fetch a la URL proporcionada y convierte la respuesta a formato JSON.
              Finalmente, actualiza el estado con los datos obtenidos (data), establece isLoading a false y hasError a null. Efecto useEffect:
              Usa el hook useEffect para llamar a getFetch cuando el componente se monta o cuando la URL (url) cambia.
              <p className="details-subtitle">Retorno:</p> El hook devuelve un objeto que contiene:
              <p className="details-subtitle">data: </p>los datos obtenidos de la solicitud.
              <p className="details-subtitle">isLoading: </p>un booleano que indica si la solicitud está en curso.
              <p className="details-subtitle">hasError:</p> cualquier error que haya ocurrido durante la solicitud.
            </p>
          </details>
        </li>
        <li>
          <details className="details">
            <summary className="summary">useForm</summary>
            <p className="details-content">
              El hook useForm es un hook personalizado de React que se utiliza para manejar el estado de un formulario. Aquí está el desglose de lo que hace:
              <p className="details-subtitle">Inicialización del estado:</p> Usa el hook useState para crear una variable de estado formState y una función setFormState para actualizar ese estado. El estado inicial se establece en initialForm, que es un objeto que representa los valores iniciales del formulario.
              <p className="details-subtitle">Cambio de entrada: </p>La función onInputChange se encarga de actualizar el estado del formulario cuando se cambia un valor en un campo de entrada. Esta función: Extrae el name y value del evento de cambio (target). Actualiza el estado del formulario (formState) con el nuevo valor del campo correspondiente.
              <p className="details-subtitle">Reiniciar formulario:</p> La función onResetForm restablece el estado del formulario a su valor inicial (initialForm).
              <p className="details-subtitle">Retorno: </p>El hook devuelve un objeto que contiene: Todos los valores actuales del formulario (desestructurados desde formState).
              <p className="details-subtitle">formState:</p> el estado completo del formulario.
              <p className="details-subtitle">onInputChange:</p> la función para manejar cambios en los campos de entrada.
              <p className="details-subtitle">onResetForm:</p> la función para reiniciar el formulario.
            </p>
          </details>
        </li>
        <li>
          <details className="details">
            <summary className="summary">useTodos</summary>
            <p className="details-content">
              El hook useTodos es un hook personalizado de React que se utiliza para manejar una lista de tareas (todos). Aquí está el desglose de lo que hace:
              <p className="details-subtitle">Inicialización del estado:</p> Usa el hook useReducer para manejar el estado de las tareas. El todoReducer es una función reductora que define cómo se actualiza el estado en respuesta a las acciones. El estado inicial se obtiene de localStorage mediante la función init.
              <p className="details-subtitle">Efecto useEffect:</p> Usa el hook useEffect para guardar la lista de tareas en localStorage cada vez que el estado de las tareas (todos) cambia.
              <p className="details-subtitle">Agregar tarea:</p> La función handleNewTodo crea una acción con el tipo [TODO] Add Todo y la tarea (todo) como carga útil (payload). Luego, despacha esta acción al reductor (dispatch).
              <p className="details-subtitle">Eliminar tarea:</p> La función handleDeleteTodo crea una acción con el tipo [TODO] Remove Todo y el ID de la tarea a eliminar como carga útil (payload). Luego, despacha esta acción al reductor (dispatch).
              <p className="details-subtitle">Alternar tarea:</p> La función handleToggleTodo crea una acción con el tipo [TODO] Toggle Todo y el ID de la tarea a alternar como carga útil (payload). Luego, despacha esta acción al reductor (dispatch).
              <p className="details-subtitle">Retorno:</p> El hook devuelve un objeto que contiene:
              <p className="details-subtitle">todos:</p> la lista actual de tareas.
              <p className="details-subtitle">todosCount:</p> el número total de tareas.
              <p className="details-subtitle">pendingTodosCount:</p> el número de tareas pendientes (no completadas).
              <p className="details-subtitle">handleNewTodo: </p>la función para agregar una nueva tarea.
              <p className="details-subtitle">handleDeleteTodo:</p> la función para eliminar una tarea.
              <p className="details-subtitle">handleToggleTodo:</p> la función para alternar el estado de una tarea (completada/no completada). Este hook se puede utilizar en componentes de React para manejar la lógica de una lista de tareas de una manera reutilizable.
            </p>
          </details>
        </li>
      </ol>
    </>
  );
}

export default App;
