// writing your own middleware
// export const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentState", store.getState());

//   next(action);

//   console.log("next state: ", store.getState());
// };

// thunk middleware
//const thunkMiddleware = (store) => (next) => (action) => {
//   if(typeOf(action) === 'function') {
//     action(dispatch)
//   }
// }
