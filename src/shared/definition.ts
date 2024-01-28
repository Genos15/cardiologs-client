export type NetworkStatus = 'idle' | 'loading' | 'error' | 'success'

export type NetworkResponse<T = unknown> =
    | { success: true; data: T }
    | { success: false; error: string }
