import { createApp } from "app.js";
import { ModelServiceFileSystem } from "models/filesystem/index.filesystem.js";

const app = createApp(new ModelServiceFileSystem(".db"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
