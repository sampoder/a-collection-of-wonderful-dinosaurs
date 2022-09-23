var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var photos_exports = {};
__export(photos_exports, {
  createPhoto: () => createPhoto,
  deletePhoto: () => deletePhoto,
  photo: () => photo,
  photos: () => photos,
  updatePhoto: () => updatePhoto
});
module.exports = __toCommonJS(photos_exports);
var import_db = require("../../lib/db");
const photos = () => {
  return import_db.db.photo.findMany();
};
const photo = ({
  id
}) => {
  return import_db.db.photo.findUnique({
    where: {
      id
    }
  });
};
const createPhoto = ({
  input
}) => {
  return import_db.db.photo.create({
    data: input
  });
};
const updatePhoto = ({
  id,
  input
}) => {
  return import_db.db.photo.update({
    data: input,
    where: {
      id
    }
  });
};
const deletePhoto = ({
  id
}) => {
  return import_db.db.photo.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPhoto,
  deletePhoto,
  photo,
  photos,
  updatePhoto
});
//# sourceMappingURL=photos.js.map
