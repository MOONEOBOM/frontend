import ErrorPage from "@/components/common/ErrorPage";

const NotFound = () => {
  return (
    <ErrorPage
      message={`앗! 찾으시는 페이지가 없어요.\n올바른 주소인지 다시 확인해 주시겠어요?`}
    />
  );
};

export default NotFound;