import Ball from "../ball/ball";
import Player from "../player/player";

export default class Batsman extends Player {
    private onStrike: boolean;
    private Balls: Array<Ball> = [];

    constructor(id: number, name: string, sixes: number, fours: number, ballPlayed: Array<Ball> ,onStrike: boolean) {
        super(id, name, fours, sixes);
        this.onStrike = onStrike;
        this.Balls = ballPlayed;
    }

    // public getRuns(): number {
    //     return this.runs;
    // }

    public isOnStrike(): boolean {
        return this.onStrike;
    }

    public setStrike(): void {
        this.onStrike = !this.onStrike;
    }

    // public setRuns(runs: number){
    //     this.runs += runs;

    //     if (runs === 4) super.setFours();
    //     if (runs === 6) super.setSixes();
    // }

    public getBallPlayed(): Array<Ball> {
        return this.Balls;
    }

    public setBallPlayed(playedBy: Player, bowledBy: Player, runs: number, wicket: boolean): void {
        if (runs === 4) super.setFours();
        if (runs === 6) super.setSixes();

        const ball = new Ball(playedBy, bowledBy, runs, wicket);
        this.Balls.push(ball);
    }
}