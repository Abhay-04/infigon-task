import Tabs from "@/components/Tabs"; // adjust path as needed
import CharacteristicsTab from "./(components)/CharacteristicsTab";
import PersonalityContent from "./(components)/PersonalityContent";


export default function TabPage() {
  return (
    <div className="max-w-full mx-auto mt-10">
      <Tabs
        tabs={[
          { label: "Personality", content: <PersonalityContent /> },
          { label: "Characteristics", content: <CharacteristicsTab /> },
     
          
        ]}
      />
    </div>
  );
}
