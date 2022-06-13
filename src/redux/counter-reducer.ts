export type StatusType = 'set' | 'count' | 'error'

const INC_VALUE = 'INC-VALUE'
const RESET_VALUE = 'RESET-VALUE'
const CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE'
const CHANGE_MIN_VALUE = 'CHANGE-MIN-VALUE'
const CHANGE_STATUS = 'CHANGE-STATUS'

const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    status: 'count' as StatusType,
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type){
        case INC_VALUE:
           return {...state, count: state.count + 1}
        case RESET_VALUE:
            return {...state, count: action.minValue}
        case CHANGE_MAX_VALUE:
            return {...state, maxValue: action.maxValue }
        case CHANGE_MIN_VALUE:
            return {...state, minValue: action.minValue}
        case CHANGE_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const incCounterValueAC = () => ({type:INC_VALUE}) as const;
export const resCounterValueAC = (minValue:number) => ({type:RESET_VALUE, minValue}) as const
export const ChangeMaxValueAC = (maxValue:number) =>  ({type: CHANGE_MAX_VALUE , maxValue}) as const;
export const ChangeMinValueAC = (minValue:number) => ({type:CHANGE_MIN_VALUE,  minValue}) as const;
export const ChangeStatusAC = (status:StatusType)=> ({type: CHANGE_STATUS, status}) as const;

export type IncCountActionType = ReturnType<typeof incCounterValueAC>
export type ResCounterActionType = ReturnType<typeof resCounterValueAC>
export type ChangeMaxValueActionType = ReturnType<typeof ChangeMaxValueAC>
export type ChangeMinValueActionType = ReturnType<typeof ChangeMinValueAC>
export type ChangeStatusActionType = ReturnType<typeof ChangeStatusAC>

export type ActionTypes = IncCountActionType | ResCounterActionType | ChangeMaxValueActionType | ChangeMinValueActionType | ChangeStatusActionType