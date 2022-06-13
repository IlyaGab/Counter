export type StatusType = 'set' | 'count' | 'error'

const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    status: 'count' as StatusType,
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type){
        case 'INC-VALUE':
           return {...state, count: state.count + 1}
        case 'RESET-VALUE':
            return {...state, count: action.minValue}
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.maxValue }
        case 'CHANGE-MIN-VALUE':
            return {...state, minValue: action.minValue}
        case 'CHANGE-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const incCounterValueAC = () => ({type:'INC-VALUE'}) as const;
export const resCounterValueAC = (minValue:number) => ({type:'RESET-VALUE', minValue}) as const
export const ChangeMaxValueAC = (maxValue:number) =>  ({type:'CHANGE-MAX-VALUE' , maxValue}) as const;
export const ChangeMinValueAC = (minValue:number) => ({type:'CHANGE-MIN-VALUE',  minValue}) as const;
export const ChangeStatusAC = (status:StatusType)=> ({type: 'CHANGE-STATUS', status}) as const;

export type IncCountActionType = ReturnType<typeof incCounterValueAC>
export type ResCounterActionType = ReturnType<typeof resCounterValueAC>
export type ChangeMaxValueActionType = ReturnType<typeof ChangeMaxValueAC>
export type ChangeMinValueActionType = ReturnType<typeof ChangeMinValueAC>
export type ChangeStatusActionType = ReturnType<typeof ChangeStatusAC>

export type ActionTypes = IncCountActionType | ResCounterActionType | ChangeMaxValueActionType | ChangeMinValueActionType | ChangeStatusActionType