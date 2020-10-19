export interface Coords {
    x: number,
    y: number
}

export interface Game {
    name: ''
    width: number
    heigth: number
    difficulty: string
    start_time: any
    end_time: any
    total_time?: any
    mines: Coords[] 
    flags: Coords[]
    board: any[][]
    state: string
}