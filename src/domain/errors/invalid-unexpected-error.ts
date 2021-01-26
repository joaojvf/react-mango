export class UnexpectedError extends Error {
  constructor () {
    super('Alguma coisa deu xabu')
    this.name = 'UnexpectedError'
  }
}
