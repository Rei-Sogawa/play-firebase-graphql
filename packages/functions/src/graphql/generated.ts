import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { UserDoc, UserTweetDoc } from '../lib/typed-ref/types';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type CreateTweetInput = {
  content: Scalars['String'];
};

export type FavoriteTweetsInput = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  userId: Scalars['ID'];
};

export type FeedInput = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  userId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTweet: Tweet;
  deleteTweet: User;
  follow: User;
  like: TweetEdge;
  unFollow: User;
  unLike: TweetEdge;
  updateProfile: User;
  updateTweet: Tweet;
};


export type MutationCreateTweetArgs = {
  input: CreateTweetInput;
};


export type MutationDeleteTweetArgs = {
  id: Scalars['ID'];
};


export type MutationFollowArgs = {
  userId: Scalars['ID'];
};


export type MutationLikeArgs = {
  tweetId: Scalars['ID'];
};


export type MutationUnFollowArgs = {
  userId: Scalars['ID'];
};


export type MutationUnLikeArgs = {
  tweetId: Scalars['ID'];
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateTweetArgs = {
  id: Scalars['ID'];
  input: UpdateTweetInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNext: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  favoriteTweets: TweetConnection;
  feed: TweetConnection;
  me: User;
  tweetEdge: TweetEdge;
  users: Array<User>;
};


export type QueryFavoriteTweetsArgs = {
  input: FavoriteTweetsInput;
};


export type QueryFeedArgs = {
  input: FeedInput;
};


export type QueryTweetEdgeArgs = {
  id: Scalars['ID'];
};

export type Tweet = {
  __typename?: 'Tweet';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: User;
  favorite: Scalars['Boolean'];
  id: Scalars['String'];
};

export type TweetConnection = {
  __typename?: 'TweetConnection';
  edges: Array<TweetEdge>;
  pageInfo: PageInfo;
};

export type TweetEdge = {
  __typename?: 'TweetEdge';
  cursor: Scalars['String'];
  node: Tweet;
};

export type UpdateProfileInput = {
  displayName: Scalars['String'];
};

export type UpdateTweetInput = {
  content: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  displayName: Scalars['String'];
  followers: Array<User>;
  followings: Array<User>;
  id: Scalars['String'];
  tweets: Array<Tweet>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateTweetInput: CreateTweetInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  FavoriteTweetsInput: FavoriteTweetsInput;
  FeedInput: FeedInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tweet: ResolverTypeWrapper<UserTweetDoc>;
  TweetConnection: ResolverTypeWrapper<Omit<TweetConnection, 'edges'> & { edges: Array<ResolversTypes['TweetEdge']> }>;
  TweetEdge: ResolverTypeWrapper<Omit<TweetEdge, 'node'> & { node: ResolversTypes['Tweet'] }>;
  UpdateProfileInput: UpdateProfileInput;
  UpdateTweetInput: UpdateTweetInput;
  User: ResolverTypeWrapper<UserDoc>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateTweetInput: CreateTweetInput;
  DateTime: Scalars['DateTime'];
  FavoriteTweetsInput: FavoriteTweetsInput;
  FeedInput: FeedInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String'];
  Tweet: UserTweetDoc;
  TweetConnection: Omit<TweetConnection, 'edges'> & { edges: Array<ResolversParentTypes['TweetEdge']> };
  TweetEdge: Omit<TweetEdge, 'node'> & { node: ResolversParentTypes['Tweet'] };
  UpdateProfileInput: UpdateProfileInput;
  UpdateTweetInput: UpdateTweetInput;
  User: UserDoc;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createTweet?: Resolver<ResolversTypes['Tweet'], ParentType, ContextType, RequireFields<MutationCreateTweetArgs, 'input'>>;
  deleteTweet?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteTweetArgs, 'id'>>;
  follow?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationFollowArgs, 'userId'>>;
  like?: Resolver<ResolversTypes['TweetEdge'], ParentType, ContextType, RequireFields<MutationLikeArgs, 'tweetId'>>;
  unFollow?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUnFollowArgs, 'userId'>>;
  unLike?: Resolver<ResolversTypes['TweetEdge'], ParentType, ContextType, RequireFields<MutationUnLikeArgs, 'tweetId'>>;
  updateProfile?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'input'>>;
  updateTweet?: Resolver<ResolversTypes['Tweet'], ParentType, ContextType, RequireFields<MutationUpdateTweetArgs, 'id' | 'input'>>;
}>;

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNext?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  favoriteTweets?: Resolver<ResolversTypes['TweetConnection'], ParentType, ContextType, RequireFields<QueryFavoriteTweetsArgs, 'input'>>;
  feed?: Resolver<ResolversTypes['TweetConnection'], ParentType, ContextType, RequireFields<QueryFeedArgs, 'input'>>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  tweetEdge?: Resolver<ResolversTypes['TweetEdge'], ParentType, ContextType, RequireFields<QueryTweetEdgeArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type TweetResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Tweet'] = ResolversParentTypes['Tweet']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  favorite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TweetConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TweetConnection'] = ResolversParentTypes['TweetConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TweetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TweetEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TweetEdge'] = ResolversParentTypes['TweetEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Tweet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  followings?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tweets?: Resolver<Array<ResolversTypes['Tweet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tweet?: TweetResolvers<ContextType>;
  TweetConnection?: TweetConnectionResolvers<ContextType>;
  TweetEdge?: TweetEdgeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

