
// NGRX Reducer

export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('ADD TODO');
      console.log(...state, action.payload);
      // debugger;
      return [...state, action.payload];

    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);

    case 'TOGGLE_COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, {
            complete: !todo.complete,
          });
        }
        return todo;
      });

    default:
      console.log('default state');
      console.log(...state, action.payload);
      return [...state];
  }
};
