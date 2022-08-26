import express from 'express';
import {cntr} from "./controller/controller";
const app = express();
const port = 3000

app.get('/api', cntr );


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);

})


export default app;