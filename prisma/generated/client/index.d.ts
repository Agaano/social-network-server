
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model friendship
 * 
 */
export type friendship = $Result.DefaultSelection<Prisma.$friendshipPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.friendshipDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    friendship: 'friendship'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'friendship'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      friendship: {
        payload: Prisma.$friendshipPayload<ExtArgs>
        fields: Prisma.friendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendshipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendshipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload>
          }
          findFirst: {
            args: Prisma.friendshipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendshipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload>
          }
          findMany: {
            args: Prisma.friendshipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload>[]
          }
          create: {
            args: Prisma.friendshipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload>
          }
          createMany: {
            args: Prisma.friendshipCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.friendshipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload>
          }
          update: {
            args: Prisma.friendshipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload>
          }
          deleteMany: {
            args: Prisma.friendshipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.friendshipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.friendshipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.friendshipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendshipCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    friendship_UserToFriend: number
    friendship_FriendToUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    friendship_UserToFriend?: boolean | UserCountOutputTypeCountFriendship_UserToFriendArgs
    friendship_FriendToUser?: boolean | UserCountOutputTypeCountFriendship_FriendToUserArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendship_UserToFriendArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: friendshipWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendship_FriendToUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: friendshipWhereInput
  }



  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    service: number
    avatar: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    service?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string | null
    email: string
    password: string
    service: JsonValue
    avatar: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    service?: boolean
    avatar?: boolean
    friendship_UserToFriend?: boolean | user$friendship_UserToFriendArgs<ExtArgs>
    friendship_FriendToUser?: boolean | user$friendship_FriendToUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    service?: boolean
    avatar?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    friendship_UserToFriend?: boolean | user$friendship_UserToFriendArgs<ExtArgs>
    friendship_FriendToUser?: boolean | user$friendship_FriendToUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      friendship_UserToFriend: Prisma.$friendshipPayload<ExtArgs>[]
      friendship_FriendToUser: Prisma.$friendshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      username: string | null
      email: string
      password: string
      service: Prisma.JsonValue
      avatar: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    friendship_UserToFriend<T extends user$friendship_UserToFriendArgs<ExtArgs> = {}>(args?: Subset<T, user$friendship_UserToFriendArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    friendship_FriendToUser<T extends user$friendship_FriendToUserArgs<ExtArgs> = {}>(args?: Subset<T, user$friendship_FriendToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly service: FieldRef<"user", 'Json'>
    readonly avatar: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.friendship_UserToFriend
   */
  export type user$friendship_UserToFriendArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    where?: friendshipWhereInput
    orderBy?: friendshipOrderByWithRelationInput | friendshipOrderByWithRelationInput[]
    cursor?: friendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * user.friendship_FriendToUser
   */
  export type user$friendship_FriendToUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    where?: friendshipWhereInput
    orderBy?: friendshipOrderByWithRelationInput | friendshipOrderByWithRelationInput[]
    cursor?: friendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Model friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipAvgAggregateOutputType = {
    id: number | null
    user: number | null
    friend: number | null
  }

  export type FriendshipSumAggregateOutputType = {
    id: number | null
    user: number | null
    friend: number | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: number | null
    user: number | null
    friend: number | null
    type: string | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: number | null
    user: number | null
    friend: number | null
    type: string | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    user: number
    friend: number
    type: number
    _all: number
  }


  export type FriendshipAvgAggregateInputType = {
    id?: true
    user?: true
    friend?: true
  }

  export type FriendshipSumAggregateInputType = {
    id?: true
    user?: true
    friend?: true
  }

  export type FriendshipMinAggregateInputType = {
    id?: true
    user?: true
    friend?: true
    type?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    user?: true
    friend?: true
    type?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    user?: true
    friend?: true
    type?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which friendship to aggregate.
     */
    where?: friendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipOrderByWithRelationInput | friendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type friendshipGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: friendshipWhereInput
    orderBy?: friendshipOrderByWithAggregationInput | friendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: friendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _avg?: FriendshipAvgAggregateInputType
    _sum?: FriendshipSumAggregateInputType
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: number
    user: number
    friend: number
    type: string
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends friendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type friendshipSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    friend?: boolean
    type?: boolean
    user_friendship_userTouser?: boolean | userDefaultArgs<ExtArgs>
    user_friendship_friendTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type friendshipSelectScalar = {
    id?: boolean
    user?: boolean
    friend?: boolean
    type?: boolean
  }

  export type friendshipInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user_friendship_userTouser?: boolean | userDefaultArgs<ExtArgs>
    user_friendship_friendTouser?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $friendshipPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "friendship"
    objects: {
      user_friendship_userTouser: Prisma.$userPayload<ExtArgs>
      user_friendship_friendTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      user: number
      friend: number
      type: string
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }


  type friendshipGetPayload<S extends boolean | null | undefined | friendshipDefaultArgs> = $Result.GetResult<Prisma.$friendshipPayload, S>

  type friendshipCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<friendshipFindManyArgs, 'select' | 'include'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface friendshipDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friendship'], meta: { name: 'friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {friendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends friendshipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, friendshipFindUniqueArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Friendship that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {friendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends friendshipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friendshipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends friendshipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, friendshipFindFirstArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends friendshipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friendshipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends friendshipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendshipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Friendship.
     * @param {friendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
    **/
    create<T extends friendshipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, friendshipCreateArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Friendships.
     *     @param {friendshipCreateManyArgs} args - Arguments to create many Friendships.
     *     @example
     *     // Create many Friendships
     *     const friendship = await prisma.friendship.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends friendshipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendshipCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friendship.
     * @param {friendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
    **/
    delete<T extends friendshipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, friendshipDeleteArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Friendship.
     * @param {friendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends friendshipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, friendshipUpdateArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Friendships.
     * @param {friendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends friendshipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendshipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends friendshipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, friendshipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friendship.
     * @param {friendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
    **/
    upsert<T extends friendshipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, friendshipUpsertArgs<ExtArgs>>
    ): Prisma__friendshipClient<$Result.GetResult<Prisma.$friendshipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends friendshipCountArgs>(
      args?: Subset<T, friendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends friendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendshipGroupByArgs['orderBy'] }
        : { orderBy?: friendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, friendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friendship model
   */
  readonly fields: friendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendshipClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_friendship_userTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user_friendship_friendTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the friendship model
   */ 
  interface friendshipFieldRefs {
    readonly id: FieldRef<"friendship", 'Int'>
    readonly user: FieldRef<"friendship", 'Int'>
    readonly friend: FieldRef<"friendship", 'Int'>
    readonly type: FieldRef<"friendship", 'String'>
  }
    

  // Custom InputTypes

  /**
   * friendship findUnique
   */
  export type friendshipFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * Filter, which friendship to fetch.
     */
    where: friendshipWhereUniqueInput
  }


  /**
   * friendship findUniqueOrThrow
   */
  export type friendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * Filter, which friendship to fetch.
     */
    where: friendshipWhereUniqueInput
  }


  /**
   * friendship findFirst
   */
  export type friendshipFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * Filter, which friendship to fetch.
     */
    where?: friendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipOrderByWithRelationInput | friendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friendships.
     */
    cursor?: friendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * friendship findFirstOrThrow
   */
  export type friendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * Filter, which friendship to fetch.
     */
    where?: friendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipOrderByWithRelationInput | friendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friendships.
     */
    cursor?: friendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * friendship findMany
   */
  export type friendshipFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where?: friendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipOrderByWithRelationInput | friendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friendships.
     */
    cursor?: friendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * friendship create
   */
  export type friendshipCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a friendship.
     */
    data: XOR<friendshipCreateInput, friendshipUncheckedCreateInput>
  }


  /**
   * friendship createMany
   */
  export type friendshipCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friendships.
     */
    data: friendshipCreateManyInput | friendshipCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * friendship update
   */
  export type friendshipUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a friendship.
     */
    data: XOR<friendshipUpdateInput, friendshipUncheckedUpdateInput>
    /**
     * Choose, which friendship to update.
     */
    where: friendshipWhereUniqueInput
  }


  /**
   * friendship updateMany
   */
  export type friendshipUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friendships.
     */
    data: XOR<friendshipUpdateManyMutationInput, friendshipUncheckedUpdateManyInput>
    /**
     * Filter which friendships to update
     */
    where?: friendshipWhereInput
  }


  /**
   * friendship upsert
   */
  export type friendshipUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the friendship to update in case it exists.
     */
    where: friendshipWhereUniqueInput
    /**
     * In case the friendship found by the `where` argument doesn't exist, create a new friendship with this data.
     */
    create: XOR<friendshipCreateInput, friendshipUncheckedCreateInput>
    /**
     * In case the friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendshipUpdateInput, friendshipUncheckedUpdateInput>
  }


  /**
   * friendship delete
   */
  export type friendshipDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
    /**
     * Filter which friendship to delete.
     */
    where: friendshipWhereUniqueInput
  }


  /**
   * friendship deleteMany
   */
  export type friendshipDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which friendships to delete
     */
    where?: friendshipWhereInput
  }


  /**
   * friendship without action
   */
  export type friendshipDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendship
     */
    select?: friendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendshipInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    service: 'service',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    user: 'user',
    friend: 'friend',
    type: 'type'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    service?: JsonFilter<"user">
    avatar?: StringNullableFilter<"user"> | string | null
    friendship_UserToFriend?: FriendshipListRelationFilter
    friendship_FriendToUser?: FriendshipListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    service?: SortOrder
    avatar?: SortOrderInput | SortOrder
    friendship_UserToFriend?: friendshipOrderByRelationAggregateInput
    friendship_FriendToUser?: friendshipOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    service?: JsonFilter<"user">
    avatar?: StringNullableFilter<"user"> | string | null
    friendship_UserToFriend?: FriendshipListRelationFilter
    friendship_FriendToUser?: FriendshipListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    service?: SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    service?: JsonWithAggregatesFilter<"user">
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type friendshipWhereInput = {
    AND?: friendshipWhereInput | friendshipWhereInput[]
    OR?: friendshipWhereInput[]
    NOT?: friendshipWhereInput | friendshipWhereInput[]
    id?: IntFilter<"friendship"> | number
    user?: IntFilter<"friendship"> | number
    friend?: IntFilter<"friendship"> | number
    type?: StringFilter<"friendship"> | string
    user_friendship_userTouser?: XOR<UserRelationFilter, userWhereInput>
    user_friendship_friendTouser?: XOR<UserRelationFilter, userWhereInput>
  }

  export type friendshipOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    friend?: SortOrder
    type?: SortOrder
    user_friendship_userTouser?: userOrderByWithRelationInput
    user_friendship_friendTouser?: userOrderByWithRelationInput
  }

  export type friendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: friendshipWhereInput | friendshipWhereInput[]
    OR?: friendshipWhereInput[]
    NOT?: friendshipWhereInput | friendshipWhereInput[]
    user?: IntFilter<"friendship"> | number
    friend?: IntFilter<"friendship"> | number
    type?: StringFilter<"friendship"> | string
    user_friendship_userTouser?: XOR<UserRelationFilter, userWhereInput>
    user_friendship_friendTouser?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type friendshipOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    friend?: SortOrder
    type?: SortOrder
    _count?: friendshipCountOrderByAggregateInput
    _avg?: friendshipAvgOrderByAggregateInput
    _max?: friendshipMaxOrderByAggregateInput
    _min?: friendshipMinOrderByAggregateInput
    _sum?: friendshipSumOrderByAggregateInput
  }

  export type friendshipScalarWhereWithAggregatesInput = {
    AND?: friendshipScalarWhereWithAggregatesInput | friendshipScalarWhereWithAggregatesInput[]
    OR?: friendshipScalarWhereWithAggregatesInput[]
    NOT?: friendshipScalarWhereWithAggregatesInput | friendshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"friendship"> | number
    user?: IntWithAggregatesFilter<"friendship"> | number
    friend?: IntWithAggregatesFilter<"friendship"> | number
    type?: StringWithAggregatesFilter<"friendship"> | string
  }

  export type userCreateInput = {
    username?: string | null
    email: string
    password: string
    service: JsonNullValueInput | InputJsonValue
    avatar?: string | null
    friendship_UserToFriend?: friendshipCreateNestedManyWithoutUser_friendship_userTouserInput
    friendship_FriendToUser?: friendshipCreateNestedManyWithoutUser_friendship_friendTouserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username?: string | null
    email: string
    password: string
    service: JsonNullValueInput | InputJsonValue
    avatar?: string | null
    friendship_UserToFriend?: friendshipUncheckedCreateNestedManyWithoutUser_friendship_userTouserInput
    friendship_FriendToUser?: friendshipUncheckedCreateNestedManyWithoutUser_friendship_friendTouserInput
  }

  export type userUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    friendship_UserToFriend?: friendshipUpdateManyWithoutUser_friendship_userTouserNestedInput
    friendship_FriendToUser?: friendshipUpdateManyWithoutUser_friendship_friendTouserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    friendship_UserToFriend?: friendshipUncheckedUpdateManyWithoutUser_friendship_userTouserNestedInput
    friendship_FriendToUser?: friendshipUncheckedUpdateManyWithoutUser_friendship_friendTouserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username?: string | null
    email: string
    password: string
    service: JsonNullValueInput | InputJsonValue
    avatar?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type friendshipCreateInput = {
    type: string
    user_friendship_userTouser: userCreateNestedOneWithoutFriendship_UserToFriendInput
    user_friendship_friendTouser: userCreateNestedOneWithoutFriendship_FriendToUserInput
  }

  export type friendshipUncheckedCreateInput = {
    id?: number
    user: number
    friend: number
    type: string
  }

  export type friendshipUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    user_friendship_userTouser?: userUpdateOneRequiredWithoutFriendship_UserToFriendNestedInput
    user_friendship_friendTouser?: userUpdateOneRequiredWithoutFriendship_FriendToUserNestedInput
  }

  export type friendshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    friend?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type friendshipCreateManyInput = {
    id?: number
    user: number
    friend: number
    type: string
  }

  export type friendshipUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type friendshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    friend?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FriendshipListRelationFilter = {
    every?: friendshipWhereInput
    some?: friendshipWhereInput
    none?: friendshipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type friendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    service?: SortOrder
    avatar?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type friendshipCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    friend?: SortOrder
    type?: SortOrder
  }

  export type friendshipAvgOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    friend?: SortOrder
  }

  export type friendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    friend?: SortOrder
    type?: SortOrder
  }

  export type friendshipMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    friend?: SortOrder
    type?: SortOrder
  }

  export type friendshipSumOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    friend?: SortOrder
  }

  export type friendshipCreateNestedManyWithoutUser_friendship_userTouserInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_userTouserInput, friendshipUncheckedCreateWithoutUser_friendship_userTouserInput> | friendshipCreateWithoutUser_friendship_userTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_userTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_userTouserInput | friendshipCreateOrConnectWithoutUser_friendship_userTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_userTouserInputEnvelope
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
  }

  export type friendshipCreateNestedManyWithoutUser_friendship_friendTouserInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_friendTouserInput, friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput> | friendshipCreateWithoutUser_friendship_friendTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput | friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_friendTouserInputEnvelope
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
  }

  export type friendshipUncheckedCreateNestedManyWithoutUser_friendship_userTouserInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_userTouserInput, friendshipUncheckedCreateWithoutUser_friendship_userTouserInput> | friendshipCreateWithoutUser_friendship_userTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_userTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_userTouserInput | friendshipCreateOrConnectWithoutUser_friendship_userTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_userTouserInputEnvelope
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
  }

  export type friendshipUncheckedCreateNestedManyWithoutUser_friendship_friendTouserInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_friendTouserInput, friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput> | friendshipCreateWithoutUser_friendship_friendTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput | friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_friendTouserInputEnvelope
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type friendshipUpdateManyWithoutUser_friendship_userTouserNestedInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_userTouserInput, friendshipUncheckedCreateWithoutUser_friendship_userTouserInput> | friendshipCreateWithoutUser_friendship_userTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_userTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_userTouserInput | friendshipCreateOrConnectWithoutUser_friendship_userTouserInput[]
    upsert?: friendshipUpsertWithWhereUniqueWithoutUser_friendship_userTouserInput | friendshipUpsertWithWhereUniqueWithoutUser_friendship_userTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_userTouserInputEnvelope
    set?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    disconnect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    delete?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    update?: friendshipUpdateWithWhereUniqueWithoutUser_friendship_userTouserInput | friendshipUpdateWithWhereUniqueWithoutUser_friendship_userTouserInput[]
    updateMany?: friendshipUpdateManyWithWhereWithoutUser_friendship_userTouserInput | friendshipUpdateManyWithWhereWithoutUser_friendship_userTouserInput[]
    deleteMany?: friendshipScalarWhereInput | friendshipScalarWhereInput[]
  }

  export type friendshipUpdateManyWithoutUser_friendship_friendTouserNestedInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_friendTouserInput, friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput> | friendshipCreateWithoutUser_friendship_friendTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput | friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput[]
    upsert?: friendshipUpsertWithWhereUniqueWithoutUser_friendship_friendTouserInput | friendshipUpsertWithWhereUniqueWithoutUser_friendship_friendTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_friendTouserInputEnvelope
    set?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    disconnect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    delete?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    update?: friendshipUpdateWithWhereUniqueWithoutUser_friendship_friendTouserInput | friendshipUpdateWithWhereUniqueWithoutUser_friendship_friendTouserInput[]
    updateMany?: friendshipUpdateManyWithWhereWithoutUser_friendship_friendTouserInput | friendshipUpdateManyWithWhereWithoutUser_friendship_friendTouserInput[]
    deleteMany?: friendshipScalarWhereInput | friendshipScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type friendshipUncheckedUpdateManyWithoutUser_friendship_userTouserNestedInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_userTouserInput, friendshipUncheckedCreateWithoutUser_friendship_userTouserInput> | friendshipCreateWithoutUser_friendship_userTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_userTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_userTouserInput | friendshipCreateOrConnectWithoutUser_friendship_userTouserInput[]
    upsert?: friendshipUpsertWithWhereUniqueWithoutUser_friendship_userTouserInput | friendshipUpsertWithWhereUniqueWithoutUser_friendship_userTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_userTouserInputEnvelope
    set?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    disconnect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    delete?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    update?: friendshipUpdateWithWhereUniqueWithoutUser_friendship_userTouserInput | friendshipUpdateWithWhereUniqueWithoutUser_friendship_userTouserInput[]
    updateMany?: friendshipUpdateManyWithWhereWithoutUser_friendship_userTouserInput | friendshipUpdateManyWithWhereWithoutUser_friendship_userTouserInput[]
    deleteMany?: friendshipScalarWhereInput | friendshipScalarWhereInput[]
  }

  export type friendshipUncheckedUpdateManyWithoutUser_friendship_friendTouserNestedInput = {
    create?: XOR<friendshipCreateWithoutUser_friendship_friendTouserInput, friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput> | friendshipCreateWithoutUser_friendship_friendTouserInput[] | friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput[]
    connectOrCreate?: friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput | friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput[]
    upsert?: friendshipUpsertWithWhereUniqueWithoutUser_friendship_friendTouserInput | friendshipUpsertWithWhereUniqueWithoutUser_friendship_friendTouserInput[]
    createMany?: friendshipCreateManyUser_friendship_friendTouserInputEnvelope
    set?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    disconnect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    delete?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    connect?: friendshipWhereUniqueInput | friendshipWhereUniqueInput[]
    update?: friendshipUpdateWithWhereUniqueWithoutUser_friendship_friendTouserInput | friendshipUpdateWithWhereUniqueWithoutUser_friendship_friendTouserInput[]
    updateMany?: friendshipUpdateManyWithWhereWithoutUser_friendship_friendTouserInput | friendshipUpdateManyWithWhereWithoutUser_friendship_friendTouserInput[]
    deleteMany?: friendshipScalarWhereInput | friendshipScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutFriendship_UserToFriendInput = {
    create?: XOR<userCreateWithoutFriendship_UserToFriendInput, userUncheckedCreateWithoutFriendship_UserToFriendInput>
    connectOrCreate?: userCreateOrConnectWithoutFriendship_UserToFriendInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFriendship_FriendToUserInput = {
    create?: XOR<userCreateWithoutFriendship_FriendToUserInput, userUncheckedCreateWithoutFriendship_FriendToUserInput>
    connectOrCreate?: userCreateOrConnectWithoutFriendship_FriendToUserInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFriendship_UserToFriendNestedInput = {
    create?: XOR<userCreateWithoutFriendship_UserToFriendInput, userUncheckedCreateWithoutFriendship_UserToFriendInput>
    connectOrCreate?: userCreateOrConnectWithoutFriendship_UserToFriendInput
    upsert?: userUpsertWithoutFriendship_UserToFriendInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFriendship_UserToFriendInput, userUpdateWithoutFriendship_UserToFriendInput>, userUncheckedUpdateWithoutFriendship_UserToFriendInput>
  }

  export type userUpdateOneRequiredWithoutFriendship_FriendToUserNestedInput = {
    create?: XOR<userCreateWithoutFriendship_FriendToUserInput, userUncheckedCreateWithoutFriendship_FriendToUserInput>
    connectOrCreate?: userCreateOrConnectWithoutFriendship_FriendToUserInput
    upsert?: userUpsertWithoutFriendship_FriendToUserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFriendship_FriendToUserInput, userUpdateWithoutFriendship_FriendToUserInput>, userUncheckedUpdateWithoutFriendship_FriendToUserInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type friendshipCreateWithoutUser_friendship_userTouserInput = {
    type: string
    user_friendship_friendTouser: userCreateNestedOneWithoutFriendship_FriendToUserInput
  }

  export type friendshipUncheckedCreateWithoutUser_friendship_userTouserInput = {
    id?: number
    friend: number
    type: string
  }

  export type friendshipCreateOrConnectWithoutUser_friendship_userTouserInput = {
    where: friendshipWhereUniqueInput
    create: XOR<friendshipCreateWithoutUser_friendship_userTouserInput, friendshipUncheckedCreateWithoutUser_friendship_userTouserInput>
  }

  export type friendshipCreateManyUser_friendship_userTouserInputEnvelope = {
    data: friendshipCreateManyUser_friendship_userTouserInput | friendshipCreateManyUser_friendship_userTouserInput[]
    skipDuplicates?: boolean
  }

  export type friendshipCreateWithoutUser_friendship_friendTouserInput = {
    type: string
    user_friendship_userTouser: userCreateNestedOneWithoutFriendship_UserToFriendInput
  }

  export type friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput = {
    id?: number
    user: number
    type: string
  }

  export type friendshipCreateOrConnectWithoutUser_friendship_friendTouserInput = {
    where: friendshipWhereUniqueInput
    create: XOR<friendshipCreateWithoutUser_friendship_friendTouserInput, friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput>
  }

  export type friendshipCreateManyUser_friendship_friendTouserInputEnvelope = {
    data: friendshipCreateManyUser_friendship_friendTouserInput | friendshipCreateManyUser_friendship_friendTouserInput[]
    skipDuplicates?: boolean
  }

  export type friendshipUpsertWithWhereUniqueWithoutUser_friendship_userTouserInput = {
    where: friendshipWhereUniqueInput
    update: XOR<friendshipUpdateWithoutUser_friendship_userTouserInput, friendshipUncheckedUpdateWithoutUser_friendship_userTouserInput>
    create: XOR<friendshipCreateWithoutUser_friendship_userTouserInput, friendshipUncheckedCreateWithoutUser_friendship_userTouserInput>
  }

  export type friendshipUpdateWithWhereUniqueWithoutUser_friendship_userTouserInput = {
    where: friendshipWhereUniqueInput
    data: XOR<friendshipUpdateWithoutUser_friendship_userTouserInput, friendshipUncheckedUpdateWithoutUser_friendship_userTouserInput>
  }

  export type friendshipUpdateManyWithWhereWithoutUser_friendship_userTouserInput = {
    where: friendshipScalarWhereInput
    data: XOR<friendshipUpdateManyMutationInput, friendshipUncheckedUpdateManyWithoutUser_friendship_userTouserInput>
  }

  export type friendshipScalarWhereInput = {
    AND?: friendshipScalarWhereInput | friendshipScalarWhereInput[]
    OR?: friendshipScalarWhereInput[]
    NOT?: friendshipScalarWhereInput | friendshipScalarWhereInput[]
    id?: IntFilter<"friendship"> | number
    user?: IntFilter<"friendship"> | number
    friend?: IntFilter<"friendship"> | number
    type?: StringFilter<"friendship"> | string
  }

  export type friendshipUpsertWithWhereUniqueWithoutUser_friendship_friendTouserInput = {
    where: friendshipWhereUniqueInput
    update: XOR<friendshipUpdateWithoutUser_friendship_friendTouserInput, friendshipUncheckedUpdateWithoutUser_friendship_friendTouserInput>
    create: XOR<friendshipCreateWithoutUser_friendship_friendTouserInput, friendshipUncheckedCreateWithoutUser_friendship_friendTouserInput>
  }

  export type friendshipUpdateWithWhereUniqueWithoutUser_friendship_friendTouserInput = {
    where: friendshipWhereUniqueInput
    data: XOR<friendshipUpdateWithoutUser_friendship_friendTouserInput, friendshipUncheckedUpdateWithoutUser_friendship_friendTouserInput>
  }

  export type friendshipUpdateManyWithWhereWithoutUser_friendship_friendTouserInput = {
    where: friendshipScalarWhereInput
    data: XOR<friendshipUpdateManyMutationInput, friendshipUncheckedUpdateManyWithoutUser_friendship_friendTouserInput>
  }

  export type userCreateWithoutFriendship_UserToFriendInput = {
    username?: string | null
    email: string
    password: string
    service: JsonNullValueInput | InputJsonValue
    avatar?: string | null
    friendship_FriendToUser?: friendshipCreateNestedManyWithoutUser_friendship_friendTouserInput
  }

  export type userUncheckedCreateWithoutFriendship_UserToFriendInput = {
    id?: number
    username?: string | null
    email: string
    password: string
    service: JsonNullValueInput | InputJsonValue
    avatar?: string | null
    friendship_FriendToUser?: friendshipUncheckedCreateNestedManyWithoutUser_friendship_friendTouserInput
  }

  export type userCreateOrConnectWithoutFriendship_UserToFriendInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFriendship_UserToFriendInput, userUncheckedCreateWithoutFriendship_UserToFriendInput>
  }

  export type userCreateWithoutFriendship_FriendToUserInput = {
    username?: string | null
    email: string
    password: string
    service: JsonNullValueInput | InputJsonValue
    avatar?: string | null
    friendship_UserToFriend?: friendshipCreateNestedManyWithoutUser_friendship_userTouserInput
  }

  export type userUncheckedCreateWithoutFriendship_FriendToUserInput = {
    id?: number
    username?: string | null
    email: string
    password: string
    service: JsonNullValueInput | InputJsonValue
    avatar?: string | null
    friendship_UserToFriend?: friendshipUncheckedCreateNestedManyWithoutUser_friendship_userTouserInput
  }

  export type userCreateOrConnectWithoutFriendship_FriendToUserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFriendship_FriendToUserInput, userUncheckedCreateWithoutFriendship_FriendToUserInput>
  }

  export type userUpsertWithoutFriendship_UserToFriendInput = {
    update: XOR<userUpdateWithoutFriendship_UserToFriendInput, userUncheckedUpdateWithoutFriendship_UserToFriendInput>
    create: XOR<userCreateWithoutFriendship_UserToFriendInput, userUncheckedCreateWithoutFriendship_UserToFriendInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFriendship_UserToFriendInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFriendship_UserToFriendInput, userUncheckedUpdateWithoutFriendship_UserToFriendInput>
  }

  export type userUpdateWithoutFriendship_UserToFriendInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    friendship_FriendToUser?: friendshipUpdateManyWithoutUser_friendship_friendTouserNestedInput
  }

  export type userUncheckedUpdateWithoutFriendship_UserToFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    friendship_FriendToUser?: friendshipUncheckedUpdateManyWithoutUser_friendship_friendTouserNestedInput
  }

  export type userUpsertWithoutFriendship_FriendToUserInput = {
    update: XOR<userUpdateWithoutFriendship_FriendToUserInput, userUncheckedUpdateWithoutFriendship_FriendToUserInput>
    create: XOR<userCreateWithoutFriendship_FriendToUserInput, userUncheckedCreateWithoutFriendship_FriendToUserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFriendship_FriendToUserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFriendship_FriendToUserInput, userUncheckedUpdateWithoutFriendship_FriendToUserInput>
  }

  export type userUpdateWithoutFriendship_FriendToUserInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    friendship_UserToFriend?: friendshipUpdateManyWithoutUser_friendship_userTouserNestedInput
  }

  export type userUncheckedUpdateWithoutFriendship_FriendToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    service?: JsonNullValueInput | InputJsonValue
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    friendship_UserToFriend?: friendshipUncheckedUpdateManyWithoutUser_friendship_userTouserNestedInput
  }

  export type friendshipCreateManyUser_friendship_userTouserInput = {
    id?: number
    friend: number
    type: string
  }

  export type friendshipCreateManyUser_friendship_friendTouserInput = {
    id?: number
    user: number
    type: string
  }

  export type friendshipUpdateWithoutUser_friendship_userTouserInput = {
    type?: StringFieldUpdateOperationsInput | string
    user_friendship_friendTouser?: userUpdateOneRequiredWithoutFriendship_FriendToUserNestedInput
  }

  export type friendshipUncheckedUpdateWithoutUser_friendship_userTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type friendshipUncheckedUpdateManyWithoutUser_friendship_userTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type friendshipUpdateWithoutUser_friendship_friendTouserInput = {
    type?: StringFieldUpdateOperationsInput | string
    user_friendship_userTouser?: userUpdateOneRequiredWithoutFriendship_UserToFriendNestedInput
  }

  export type friendshipUncheckedUpdateWithoutUser_friendship_friendTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type friendshipUncheckedUpdateManyWithoutUser_friendship_friendTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use friendshipDefaultArgs instead
     */
    export type friendshipArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = friendshipDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}