import { Action } from "../store"

export const asyncActions = () => (next: (action: Action) => any) => (action: Action) =>
    Promise.resolve(action.payload).then(payload => next({...action, payload: payload}))