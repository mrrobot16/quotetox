export class Quote {
  id: number;
  quote: string;
  author: string;

  constructor(id, quote, author){
    this.id = id
    this.quote = quote
    this.author = author
  }
}
