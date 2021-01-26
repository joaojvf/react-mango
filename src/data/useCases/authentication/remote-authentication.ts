import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/invalid-unexpected-error'
import { AuthenticationParams } from '../../../domain/useCases/authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      case HttpStatusCode.badRequest:
        throw new UnexpectedError()
      case HttpStatusCode.ok:
        break
      default:
        throw new UnexpectedError()
    }
  }
}
