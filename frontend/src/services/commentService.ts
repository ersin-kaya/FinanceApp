import axios from "axios";
import { CommentPost } from "../models/commentPost";
import { handleError } from "../helpers/errorHandler";

const api = "http://localhost:5189/api/comment/";

export const commentPostAPI = async (
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
