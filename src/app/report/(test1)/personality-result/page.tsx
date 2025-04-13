import Tabs from "@/components/Tabs"; // adjust path as needed
import CharacteristicsTab from "./(components)/CharacteristicsTab";
import PersonalityContent from "./(components)/PersonalityContent";


export default function TabPage() {
  return (
    <div className="sm:p-6 p-2 max-w-full mx-auto space-y-8">
      <div>
      <h1 className="text-3xl font-bold text-[#0047AB]">
        <span className="text-[#252A31]">Your</span> Result
      </h1>
      </div>
      <Tabs
        tabs={[
          { label: "Personality", content: <PersonalityContent /> },
          { label: "Characterstics", content: <CharacteristicsTab /> },
        
          
       
     
          
        ]}
      />
    </div>
  );
}
