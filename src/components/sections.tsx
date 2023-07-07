import { HeroProps } from "./hero"

export { default as ContentfulHomepageHero } from "./hero"

export type SectionProps =
  | HeroProps

type Blocktypes =
  | "ContentfulHomepageHero"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"ContentfulHomepageHero", HeroProps>