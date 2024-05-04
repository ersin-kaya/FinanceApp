import { toast } from "react-toastify";
import { postCommentAPI, getCommentsAPI } from "../../services/commentService";
import StockCommentForm, { CommentFormInputs } from "./StockCommentForm";
import { CommentGetModel } from "../../models/commentGetModel";
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import StockCommentList from "./StockCommentList";

type Props = {
  stockSymbol: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGetModel[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  const getComments = () => {
    setLoading(true);
    getCommentsAPI(stockSymbol).then((response) => {
      setLoading(false);
      setComments(response?.data!);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (e: CommentFormInputs) => {
    postCommentAPI(e.title, e.content, stockSymbol)
      .then((response) => {
        if (response) {
          toast.success("Comment created successfully!");
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  return (
    <div className="bg-white shadow rounded-lg m-4 p-4 sm:p-6 w-full h-full">
      <span className="text-3xl inline-block mb-5">Leave a comment</span>
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
      <span className="text-3xl inline-block mt-12 mb-8">Comments</span>
      {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
    </div>
  );
};

export default StockComment;
