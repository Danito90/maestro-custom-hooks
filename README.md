# Custom Hooks

1. Repositorio de custom hooks
- useCounter: 
El hook useCounter es un hook personalizado de React que proporciona funcionalidad para manejar un contador. Aquí está el desglose de lo que hace:

Inicialización del estado: Usa el hook useState para crear una variable de estado counter y una función setCounter para actualizar ese estado. El estado inicial se establece en initialValue, que por defecto es 10.

Incrementar: La función increment aumenta el valor del contador en una cantidad especificada (por defecto 1).

Decrementar: La función decrement disminuye el valor del contador en una cantidad especificada (por defecto 1).

Resetear: La función reset restablece el contador a su valor inicial.

Retorno: El hook devuelve un objeto que contiene el valor actual del contador (counter) y las funciones increment, decrement y reset.

- useFetch: 
El hook useFetch es un hook personalizado de React que se utiliza para realizar solicitudes HTTP y manejar el estado de la solicitud. Aquí está el desglose de lo que hace:

Inicialización del estado: Usa el hook useState para crear una variable de estado state y una función setState para actualizar ese estado. El estado inicial contiene:

data: inicialmente null, donde se almacenarán los datos obtenidos de la solicitud.
isLoading: inicialmente true, indica si la solicitud está en curso.
hasError: inicialmente null, para almacenar cualquier error que ocurra durante la solicitud.
Función getFetch: Esta función realiza la solicitud HTTP:

Primero, actualiza el estado para indicar que la solicitud está en curso (isLoading: true).
Luego, realiza la solicitud fetch a la URL proporcionada y convierte la respuesta a formato JSON.
Finalmente, actualiza el estado con los datos obtenidos (data), establece isLoading a false y hasError a null.
Efecto useEffect: Usa el hook useEffect para llamar a getFetch cuando el componente se monta o cuando la URL (url) cambia.

Retorno: El hook devuelve un objeto que contiene:

data: los datos obtenidos de la solicitud.
isLoading: un booleano que indica si la solicitud está en curso.
hasError: cualquier error que haya ocurrido durante la solicitud.

- useForm
El hook useForm es un hook personalizado de React que se utiliza para manejar el estado de un formulario. Aquí está el desglose de lo que hace:

Inicialización del estado: Usa el hook useState para crear una variable de estado formState y una función setFormState para actualizar ese estado. El estado inicial se establece en initialForm, que es un objeto que representa los valores iniciales del formulario.

Cambio de entrada: La función onInputChange se encarga de actualizar el estado del formulario cuando se cambia un valor en un campo de entrada. Esta función:

Extrae el name y value del evento de cambio (target).
Actualiza el estado del formulario (formState) con el nuevo valor del campo correspondiente.
Reiniciar formulario: La función onResetForm restablece el estado del formulario a su valor inicial (initialForm).

Retorno: El hook devuelve un objeto que contiene:

Todos los valores actuales del formulario (desestructurados desde formState).
formState: el estado completo del formulario.
onInputChange: la función para manejar cambios en los campos de entrada.
onResetForm: la función para reiniciar el formulario.

- useTodos
El hook useTodos es un hook personalizado de React que se utiliza para manejar una lista de tareas (todos). Aquí está el desglose de lo que hace:

Inicialización del estado: Usa el hook useReducer para manejar el estado de las tareas. El todoReducer es una función reductora que define cómo se actualiza el estado en respuesta a las acciones. El estado inicial se obtiene de localStorage mediante la función init.

Efecto useEffect: Usa el hook useEffect para guardar la lista de tareas en localStorage cada vez que el estado de las tareas (todos) cambia.

Agregar tarea: La función handleNewTodo crea una acción con el tipo [TODO] Add Todo y la tarea (todo) como carga útil (payload). Luego, despacha esta acción al reductor (dispatch).

Eliminar tarea: La función handleDeleteTodo crea una acción con el tipo [TODO] Remove Todo y el ID de la tarea a eliminar como carga útil (payload). Luego, despacha esta acción al reductor (dispatch).

Alternar tarea: La función handleToggleTodo crea una acción con el tipo [TODO] Toggle Todo y el ID de la tarea a alternar como carga útil (payload). Luego, despacha esta acción al reductor (dispatch).

Retorno: El hook devuelve un objeto que contiene:

todos: la lista actual de tareas.
todosCount: el número total de tareas.
pendingTodosCount: el número de tareas pendientes (no completadas).
handleNewTodo: la función para agregar una nueva tarea.
handleDeleteTodo: la función para eliminar una tarea.
handleToggleTodo: la función para alternar el estado de una tarea (completada/no completada).
Este hook se puede utilizar en componentes de React para manejar la lógica de una lista de tareas de una manera reutilizable.


