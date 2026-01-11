import { useState } from "react"
import MoodSelector from "./components/MoodSelector"

export default function App() {
  const [selectedMoods, setSelectedMoods] = useState([])
  const [customText, setCustomText] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center">
          MoodLift
        </h1>

        <p className="text-center text-gray-600 max-w-xl mx-auto">
          However you’re feeling, MoodLift helps you find words that lift you up.
        </p>

        <MoodSelector
          selectedMoods={selectedMoods}
          setSelectedMoods={setSelectedMoods}
          customText={customText}
          setCustomText={setCustomText}
        />
      </div>
    </div>
  )
}
