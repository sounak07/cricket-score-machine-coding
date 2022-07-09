import Player from "../player/player";

export default class Batsman extends Player {
    private runs: number;
    private onStrike: boolean;
    private ballPlayed: number;

    constructor(id: number, name: string, sixes: number, fours: number,runs: number, ballPlayed: number ,onStrike: boolean) {
        super(id, name, fours, sixes);
        this.runs = runs;
        this.onStrike = onStrike;
        this.ballPlayed = ballPlayed;
    }

    public getRuns(): number {
        return this.runs;
    }

    public isOnStrike(): boolean {
        return this.onStrike;
    }

    public setStrike(): void {
        this.onStrike = !this.onStrike;
    }

    public setRuns(runs: number){
        this.runs += runs;

        if (runs === 4) super.setFours();
        if (runs === 6) super.setSixes();
    }

    public getBallPlayed(): number {
        return this.ballPlayed;
    }

    public setBallPlayed(): void {
        this.ballPlayed++;
    }
}