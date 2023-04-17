import { Request, Response } from 'express';
import {handleHttp} from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }

}

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }

}

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEMS')
    }

}

const postItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEMS')
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEMS')
}
}

export { getItem, getItems, updateItem, postItem , deleteItem };