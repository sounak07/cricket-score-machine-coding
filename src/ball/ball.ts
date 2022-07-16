import Player from "../player/player";

export default class Ball {
    private playedBy: Player;
    private bowledBy: Player;
    private run: number;
    private wicket: boolean;

   
    constructor(playedBy: Player, bowledBy: Player, run: number, wicket:boolean){
        this.playedBy = playedBy;
        this.bowledBy = bowledBy;
        this.run = run;
        this.wicket = wicket;
    }

    public getBallPlayedBy(): Player {
        return this.playedBy;
    }

    public setBallPlayedBy(player: Player): void {
        this.playedBy = player;
    }


    public getBallBowledBy(): Player {
        return this.bowledBy;
    }

    public setBallBowledBy(player: Player): void {
        this.bowledBy = player;
    }

    public getRuns(): number {
        return this.run;
    }

    public setRuns(runs: number): void {
        this.run = runs;
    }

    public setWicket(wicket: boolean): void {
        this.wicket = wicket;
    }

    public getWicket(): boolean {
        return this.wicket;
    }


}



// Player -> batsman and bowler
// Ball -> Each ball , "NO",
// Match -> game (t20, odi, test match)