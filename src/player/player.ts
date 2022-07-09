export default class Player {
    id: number;
    name: string;
    sixes: number;
    fours: number;
    playing: boolean;

    constructor(id: number, name: string, sixes: number, fours: number, playing: boolean = false) {
        this.id = id;
        this.name = name;
        this.sixes = sixes;
        this.fours = fours;
        this.playing = playing;
    }

    public getPlayerId(): number {
        return this.id;
    }

    public setPlayerId(id: number): void {
        this.id = id;
    }
    

    public getPlayerName(): string {
        return this.name;
    }

    public setPlayerName(name: string): void {
        this.name = name;
    }

    public getFours(): number {
        return this.fours;
    }

    public setFours(): void {
        this.fours++;
    }

    public getSixes(): number {
        return this.sixes;
    }

    public setSixes(): void {
        this.sixes++;
    }

    public isPlaying(): boolean {
        return this.playing;
    }

    public setPlaying(playing: boolean): void {
        this.playing = playing;
    }
}