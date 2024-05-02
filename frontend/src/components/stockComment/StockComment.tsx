import { toast } from "react-toastify";
import { postCommentAPI, getCommentsAPI } from "../../services/commentService";
import StockCommentForm, { CommentFormInputs } from "./StockCommentForm";
import { CommentGet } from "../../models/commentGet";
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import StockCommentList from "./StockCommentList";

type Props = {
  stockSymbol: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
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
    <div className="flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;
