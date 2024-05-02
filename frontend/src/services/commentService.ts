import axios from "axios";
import { CommentPost } from "../models/commentPost";
import { handleError } from "../helpers/errorHandler";
import { CommentGet } from "../models/commentGet";

const api = "http://localhost:5189/api/comment/";

export const postCommentAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getCommentsAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
