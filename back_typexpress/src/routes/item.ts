import { Request, Response, Router } from "express";

const router = Router ()

/**
 * http://localhost:5002/items [GET]
 */

router.get("/", (req,res) => {
    res.send({data:"Aqui_van_los_modelos"})

})

export {router};