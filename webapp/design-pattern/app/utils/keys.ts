export interface CountContext {
  count: Ref<number>
  increment: () => void
}

export const countKey: InjectionKey<CountContext> = Symbol('count')