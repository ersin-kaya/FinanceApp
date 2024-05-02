import { CommentGetModel } from "../../models/commentGetModel";
import StockCommentListItem from "./StockCommentListItem";

type Props = {
  comments: CommentGetModel[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment) => {
            return <StockCommentListItem comment={comment} />;
          })
        : ""}
    </>
  );
};

export default StockCommentList;
