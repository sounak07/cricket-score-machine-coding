export default class Match {
     private players : number;
     private overs: number;
     private metaData: object = {};

   constructor(players: number, overs: number, meta: object){
        this.players = players;
        this.overs = overs;
        this.metaData = meta;
   }

     public getPlayers(): number{
          return this.players;
     }

    public getOvers(): number {
        return this.overs; 
    }

     public setPlayers(players: number): void {
          this.players = players;
     }

     public setOvers(overs: number): void {
          this.overs = overs;
     }

     public getMetaData(): object {
          return this.metaData;
     }

}