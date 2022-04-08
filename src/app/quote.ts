export class Quote {
    showDetails: boolean;
    constructor(
      public id:number,
      public submitter:string,
      public title:string,
      public quote:string,
      public author:string,
      public datePosted: Date,
      public upVotes:number,
      public downVotes:number){
    this.showDetails=false;
    }

}
