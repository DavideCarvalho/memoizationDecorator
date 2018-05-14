declare const memozation: (memoizationDuration?: number | undefined) => (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
export default memozation;
