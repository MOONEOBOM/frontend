import ScenarioIntroBubble from './ScenarioIntroBubble';
import ScenarioContainer from './ScenarioClientContainer';

const ScenarioPrePage = () => {

  return (
    <div className="min-h-screen w-full bg-white border">

      <ScenarioContainer>
        <ScenarioIntroBubble />
      </ScenarioContainer>

    </div>
  );
};

export default ScenarioPrePage;
