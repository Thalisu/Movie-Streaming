import app from "./src/app";
import { info } from "./utils/logger";

const PORT = 3003;

app.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
