import Box from '../common/Box';

const CallItem = ({
  date,
  text,
  isNew = false,
}: {
  date: string;
  text: string;
  isNew?: boolean;
}) => {
  return (
    <Box className="h-fit py-[12px]">
      <div className="body3 flex items-center gap-[7px]">
        {isNew && (
          <div className="bg-uplus text-w-700 rounded-[2px] px-[6px] text-white">
            new!
          </div>
        )}
        {date}
      </div>
      <p className="body2 truncate">{text}</p>
    </Box>
  );
};

export default CallItem;
