import Header from '@/components/common/Header';
import MoonobomRight from '@/assets/icon/logo_small.svg';
import SummaryFeedback from './SummaryFeedback';
import SummaryContent from './SummaryContent';

export const dynamic = 'force-dynamic';

type SummaryPageProps = {
  searchParams: { id?: string } | Promise<{ id?: string }>;
};

const SummaryPage = async ({ searchParams }: SummaryPageProps) => {
  const sp = await searchParams;
  const summaryId =
    typeof sp.id === 'string' ? Number(sp.id) : Number(sp.id?.[0]);

  return (
    <div className="flex flex-col items-center">
      <Header type="home" />

      <div className="mb-[60px] flex w-full flex-col items-center gap-[50px] px-[41px]">
        <MoonobomRight width={34} height={32} />
        <div className="h-[1px] w-[250px] bg-gray-300" />

        <SummaryContent summaryId={summaryId} />

        <div className="h-[1px] w-[250px] bg-gray-300" />
        <SummaryFeedback />
      </div>
    </div>
  );
};

export default SummaryPage;
