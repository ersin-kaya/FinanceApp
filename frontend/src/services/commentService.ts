import axios from "axios";
import { CommentPostModel } from "../models/commentPostModel";
import { handleError } from "../helpers/errorHandler";
import { CommentGetModel } from "../models/commentGetModel";

const api = "http://localhost:5189/api/comment/";

export const postCommentAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPostModel>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};

export const getCommentsAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGetModel[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
