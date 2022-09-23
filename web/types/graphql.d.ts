import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type CreatePhotoInput = {
  photo: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPhoto: Photo;
  deletePhoto: Photo;
  updatePhoto: Photo;
};


export type MutationcreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationdeletePhotoArgs = {
  id: Scalars['Int'];
};


export type MutationupdatePhotoArgs = {
  id: Scalars['Int'];
  input: UpdatePhotoInput;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['Int'];
  photo: Scalars['String'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  photo?: Maybe<Photo>;
  photos: Array<Photo>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
};


/** About the Redwood queries. */
export type QueryphotoArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type UpdatePhotoInput = {
  photo?: InputMaybe<Scalars['String']>;
};

export type EditPhotoByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditPhotoById = { __typename?: 'Query', photo?: { __typename?: 'Photo', id: number, photo: string } | null };

export type UpdatePhotoMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePhotoInput;
}>;


export type UpdatePhotoMutation = { __typename?: 'Mutation', updatePhoto: { __typename?: 'Photo', id: number, photo: string } };

export type CreatePhotoMutationVariables = Exact<{
  input: CreatePhotoInput;
}>;


export type CreatePhotoMutation = { __typename?: 'Mutation', createPhoto: { __typename?: 'Photo', id: number } };

export type DeletePhotoMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePhotoMutation = { __typename?: 'Mutation', deletePhoto: { __typename?: 'Photo', id: number } };

export type FindPhotoByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindPhotoById = { __typename?: 'Query', photo?: { __typename?: 'Photo', id: number, photo: string } | null };

export type FindPhotosVariables = Exact<{ [key: string]: never; }>;


export type FindPhotos = { __typename?: 'Query', photos: Array<{ __typename?: 'Photo', id: number, photo: string }> };
