import Ball from "../ball/ball";
import Player from "../player/player";

export default class Bowler extends Player {
    private bowling: boolean;
    private Balls: Array<Ball> = [];

    constructor(id: number, name: string, sixes: number, fours: number, ballPlayed: Array<Ball>, bowling: boolean) {
        super(id, name, fours, sixes);
        this.bowling = bowling;
        this.Balls = ballPlayed;
    }

    // public getRuns(): number {
    //     return this.runs;
    // }

    public isBowling(): boolean {
        return this.bowling;
    }

    public setBowling(): void {
        this.bowling = !this.bowling;
    }

    // public setRuns(runs: number) {
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