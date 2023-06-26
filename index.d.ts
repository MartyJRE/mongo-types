export declare type AnyObject = {
  [key: string]: any
}

export declare type Abs = number | AggregationOperator | AnyObject | null;

export declare type Add = Array<string | number | AggregationOperator | AnyObject | null>;

export declare type AddToSet = string | AggregationOperator | AnyObject | null;

export declare type And = Array<string | number | AggregationOperator | AnyObject | Array<any> | boolean | null>;

export declare type ArrayElemAt = [ string | AggregationOperator | AnyObject | Array<any>, number | AggregationOperator | AnyObject ];

export declare type Avg =
  | string
  | AggregationOperator
  | AnyObject
  | number
  | Array<string | AggregationOperator | AnyObject | number | null>
  | null;

export declare type Concat = Array<string | AggregationOperator | AnyObject | null>;

export declare type ConcatArrays = Array<string | AggregationOperator | AnyObject | Array<any> | null>;

export declare type Cond =
  | {
  if: string | number | boolean | AggregationOperator | AnyObject | Array<any> | null;
  then: string | number | boolean | AggregationOperator | AnyObject | Array<any> | null | undefined;
  else: string | number | boolean | AggregationOperator | AnyObject | Array<any> | null | undefined;
}
  | [
    string | number | boolean | AggregationOperator | AnyObject | Array<any> | null,
    string | number | boolean | AggregationOperator | AnyObject | Array<any> | null | undefined,
    string | number | boolean | AggregationOperator | AnyObject | Array<any> | null | undefined,
];

export declare type Eq = [
    string | number | boolean | AggregationOperator | AnyObject | null,
    string | number | boolean | AggregationOperator | AnyObject | null,
];

export declare type Filter = {
  input: string | Array<any> | AggregationOperator | AnyObject | null;
  as?: string;
  cond: AggregationOperator | AnyObject;
};

export declare type First = string | AggregationOperator | AnyObject | Array<any> | null;

export declare type GT = [
    string | number | boolean | AggregationOperator | AnyObject | null,
    string | number | boolean | AggregationOperator | AnyObject | null,
];

export declare type GTE = [
    string | number | boolean | AggregationOperator | AnyObject | null,
    string | number | boolean | AggregationOperator | AnyObject | null,
];

export declare type LT = [
    string | number | boolean | AggregationOperator | AnyObject | null,
    string | number | boolean | AggregationOperator | AnyObject | null,
];

export declare type LTE = [
    string | number | boolean | AggregationOperator | AnyObject | null,
    string | number | boolean | AggregationOperator | AnyObject | null,
];

export declare type IfNull = [ string | number | boolean | AggregationOperator | AnyObject | null, string | number | boolean | AggregationOperator | AnyObject | null ]

export declare type In = [ string | number | boolean | AggregationOperator | AnyObject | null, string | AggregationOperator | AnyObject | Array<any> ]

export declare type Last = string | AggregationOperator | AnyObject | Array<any> | null

export declare type Map = {
  input: string | AggregationOperator | AnyObject | Array<any>,
  as?: string,
  in: AggregationOperator | AnyObject
}

export declare type  Not = [ string | AggregationOperator | AnyObject | null ]

export declare type  NE = [
    string | number | boolean | AggregationOperator | AnyObject | null,
    string | number | boolean | AggregationOperator | AnyObject | null,
];

export declare type Or = Array<string | number | AggregationOperator | AnyObject | Array<any> | boolean | null>;

export declare type Reduce = {
  input: string | Array<any> | AggregationOperator | AnyObject | null
  initialValue: string | Array<any> | AggregationOperator | AnyObject | null
  in: AggregationOperator | AnyObject
}

export declare type  Size = string | AggregationOperator | AnyObject | Array<any> | null

export declare type AbsOperator = {
  $abs: Abs;
};

export declare type AddOperator = {
  $add: Add;
};

export declare type AndOperator = {
  $and: And;
};

export declare type AddToSetOperator = {
  $addToSet: AddToSet;
};

export declare type ArrayElemAtOperator = {
  $arrayElemAt: ArrayElemAt;
};

export declare type AvgOperator = {
  $avg: Avg;
};

export declare type ConcatOperator = {
  $concat: Concat;
};

export declare type ConcatArraysOperator = {
  $concatArrays: ConcatArrays;
};

export declare type CondOperator = {
  $cond: Cond;
};

export declare type EqOperator = {
  $eq: Eq;
};

export declare type FilterOperator = {
  $filter: Filter;
};

export declare type FirstOperator = {
  $first: First;
};

export declare type GTOperator = {
  $gt: GT;
};

export declare type GTEOperator = {
  $gte: GTE;
};

export declare type LTOperator = {
  $lt: LT;
};

export declare type LTEOperator = {
  $lte: LTE;
};

export declare type IfNullOperator = {
  $ifNull: IfNull
};

export declare type InOperator = {
  $in: In
};

export declare type LastOperator = {
  $last: Last
}

export declare type MapOperator = {
  $map: Map
}

export declare type NotOperator = {
  $not: Not
}

export declare type NEOperator = {
  $ne: NE
}

export declare type OrOperator = {
  $or: Or
}

export declare type ReduceOperator = {
  $reduce: Reduce
}

export declare type SizeOperator = {
  $size: Size
}

export declare type AggregationOperator =
  | AbsOperator
  | AddOperator
  | AddToSetOperator
  | AndOperator
  | ArrayElemAtOperator
  | AvgOperator
  | ConcatOperator
  | ConcatArraysOperator
  | CondOperator
  | EqOperator
  | FilterOperator
  | FirstOperator
  | GTEOperator
  | GTOperator
  | LTEOperator
  | LTOperator
  | IfNullOperator
  | InOperator
  | LastOperator
  | MapOperator
  | NotOperator
  | NEOperator
  | OrOperator
  | ReduceOperator
  | SizeOperator;

export declare type AggregationPipeline<T extends AnyObject, U extends AnyObject = AnyObject> = (
  | AggregationStage<T, U>
  | AnyObject
  )[];

export declare type AggregationStage<T extends AnyObject, U extends AnyObject = AnyObject> =
  | MatchStage<T>
  | OutStage
  | MergeStage
  | SetStage
  | UnsetStage<T>
  | AddFieldsStage
  | CountStage
  | GroupStage
  | LimitStage
  | LookupStage<T, U>
  | ProjectStage<T>
  | SortStage<T>
  | UnwindStage<T>
  | ReplaceRootStage<T>;

// @ts-expect-error Type instantiation is excessively deep and possibly infinite.
export declare type Match<T extends AnyObject> = Partial<{
  [K in DotBranch<T>]: any;
}>;

// @ts-expect-error Type instantiation is excessively deep and possibly infinite.
export declare type Project<T extends AnyObject> = Partial<{
  [K in DotBranch<T>]: boolean | number | string;
}>;

export declare type Out = string | { db: string; coll: string };

export declare type WhenMatched = 'replace' | 'keepExisting' | 'merge' | 'fail' | 'pipeline';
export declare type WhenNotMatched = 'insert' | 'discard' | 'fail';
export declare type Merge =
  | string
  | {
  into: string;
  on?: string;
  whenMatched?: WhenMatched;
  whenNotMatched?: WhenNotMatched;
  let?: AnyObject;
};

export declare type Unset<T extends AnyObject> = DotBranch<T> | Array<DotBranch<T>>;

export declare type AddFields = AnyObject;

export declare type Count = string;

export declare type Group = { _id: string | AnyObject | null } & AnyObject;

export declare type Limit = number;

export declare type Lookup<T extends AnyObject, U extends AnyObject> = {
  from: string;
  localField: DotBranch<T>;
  foreignField: DotBranch<U>;
  as: string;
};

export declare type PipelineLookup<T extends AnyObject, U extends AnyObject> = {
  from: string;
  let?: AnyObject;
  pipeline: Exclude<AggregationStage<T, U>, MergeStage | OutStage> | AnyObject;
  as: string;
};

export declare type ReplaceRoot<T extends AnyObject> = { newRoot: DotBranch<T> | string };

export declare type Set = { [key: string]: any };

export declare enum Order {
  ASC = 1,
  DESC = -1
}

// @ts-expect-error Type instantiation is excessively deep and possibly infinite.
export declare type Sort<T extends AnyObject> = Partial<{
  [K in DotBranch<T>]: Order;
}> & { [key: string]: Order };

export declare type Unwind<T extends AnyObject> =
  | DotBranch<T>
  | string
  | {
  path: DotBranch<T> | string;
  includeArrayIndex?: string;
  preserveNullAndEmptyArrays?: boolean;
};

export declare type MatchStage<T extends AnyObject> = {
  $match: Match<T>;
};

export declare type OutStage = {
  $out: Out;
};

export declare type MergeStage = {
  $merge: Merge;
};

export declare type UnsetStage<T extends AnyObject> = {
  $unset: Unset<T>;
};

export declare type AddFieldsStage = {
  $addFields: AddFields;
};

export declare type CountStage = {
  $count: Count;
};

export declare type GroupStage = {
  $group: Group;
};

export declare type LimitStage = {
  /**
   * Should never be negative! Typescript does not allow us to limit the type to positive numbers.
   */
  $limit: Limit;
};

export declare type LookupStage<T extends AnyObject, U extends AnyObject> = {
  $lookup: Lookup<T, U> | PipelineLookup<T, U>;
};

export declare type ProjectStage<T extends AnyObject> = {
  $project: Project<T>;
};

export declare type ReplaceRootStage<T extends AnyObject> = {
  $replaceRoot: ReplaceRoot<T>;
};

export declare type SetStage = {
  $set: Set;
};

export declare type SortStage<T extends AnyObject> = {
  $sort: Sort<T>;
};

export declare type UnwindStage<T extends AnyObject> = {
  $unwind: Unwind<T>;
};

export declare type DotJoin<A extends string, B extends string> = A extends '' ? B : `${A}.${B}`;

export declare type DeepKeys<O extends AnyObject> = {
  [K in keyof O]: O[K] extends AnyObject ? K : never;
}[keyof O];

// @ts-expect-error Type 'keyof O' does not satisfy the constraint 'string'.
export declare type DotBranch<O extends AnyObject, P extends string = '', K extends string = keyof O> = K extends DeepKeys<O>
  ? DotBranch<O[K], DotJoin<P, K>>
  : DotJoin<P, K>;
