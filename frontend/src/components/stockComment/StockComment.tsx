import { toast } from "react-toastify";
import { commentPostAPI } from "../../services/commentService";
import StockCommentForm, { CommentFormInputs } from "./StockCommentForm";

type Props = {
  stockSymbol: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const handleComment = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((response) => {
        if (response) {
          toast.success("Comment created successfully!");
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  );
};

export default StockComment;
