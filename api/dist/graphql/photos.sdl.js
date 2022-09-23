var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var photos_sdl_exports = {};
__export(photos_sdl_exports, {
  schema: () => schema
});
module.exports = __toCommonJS(photos_sdl_exports);
var import_graphql_tag = __toESM(require("graphql-tag"));
const schema = import_graphql_tag.default`
  type Photo {
    id: Int!
    photo: String!
  }

  type Query {
    photos: [Photo!]! @requireAuth
    photo(id: Int!): Photo @requireAuth
  }

  input CreatePhotoInput {
    photo: String!
  }

  input UpdatePhotoInput {
    photo: String
  }

  type Mutation {
    createPhoto(input: CreatePhotoInput!): Photo! @requireAuth
    updatePhoto(id: Int!, input: UpdatePhotoInput!): Photo! @requireAuth
    deletePhoto(id: Int!): Photo! @requireAuth
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=photos.sdl.js.map
