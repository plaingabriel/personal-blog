import { createApp } from "@/app";
import { ModelServiceFileSystem } from "@models/filesystem/index.filesystem";

const app = createApp(new ModelServiceFileSystem(".db"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
