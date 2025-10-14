import { createApp } from "app";
import { ModelServiceFileSystem } from "models/filesystem/index.filesystem";

createApp(new ModelServiceFileSystem(""));
console.log("Hello world!");
