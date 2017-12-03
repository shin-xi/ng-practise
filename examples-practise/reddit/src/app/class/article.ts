export class Article {
  constructor(public title: string,
              public link: string,
              public  votes: number = 0) {
  }

  VoteUp() {
    this.votes += 1;
  }

  VoteDown() {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
