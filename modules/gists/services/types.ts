import type { Code, Headline } from '@/modules/gists/entities/Gist/Gist'

export type CreateOptions = Headline & Code & { profileId: string }
export type UpdateOptions = Partial<Headline & Code>
export type ReadAllOptions = {
  username: string
  to?: number
  from?: number
}
