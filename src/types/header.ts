export type NavItem = {
  name: string,
  href?: string
  dropdown?: {
    name : string,
    href?: string
  }[]
}[] 