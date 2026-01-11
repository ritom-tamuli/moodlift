import React from 'react'
import { MOODS } from '../constants/moods';

const MoodSelector = (props) => {
    const {
        selectedMoods,
        setSelectedMoods,
        customText,
        setCustomText,
    } = props;

    const anchorMood = selectedMoods[0] || null;

    const handleMoodSelect = (mood) => {
        if(selectedMoods.includes(mood)) return;
        setSelectedMoods((prev) => [
            ...prev,
            mood
        ])
        console.log("Selected Moods -", selectedMoods)
    };

    const removeMood = (mood) => {
        const updatedMoods = selectedMoods.filter( m => m !== mood);
        setSelectedMoods(updatedMoods);
    };

    const visibleMoods = Object.values(MOODS).filter(({ label }) => {
        if(!anchorMood) return true;
        if(selectedMoods.includes(label)) return false;

        return !MOODS[anchorMood].incompatible.includes(label);
    });

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2 p-3 border rounded-lg bg-white">
                {/* First Row: Mood Pills */}
                {selectedMoods.map(mood => (
                    <span
                        key={mood}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                    {mood}
                    <button
                        onClick={() => removeMood(mood)}
                        className="font-bold"
                    >
                        ×
                    </button>
                    </span>
                ))}

                {/* Second Row: Input + Generate Button */}
                <div className="flex w-full items-center gap-2">
                    <input
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="Describe how you're feeling..."
                        className="flex-1 outline-none text-sm"
                    />
                    
                    <button
                        type="button"
                        disabled={selectedMoods.length === 0 && customText.trim() === ""}
                        onClick={() => {
                            console.log("Generate for:", {
                                selectedMoods,
                                customText,
                            })
                        }}
                        className={`px-3 py-2 rounded-2xl text-sm font-semibold transition
                            ${
                                (selectedMoods.length === 0 && customText.trim() === "")
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-black text-white hover:bg-gray-800"
                            }
                        `}
                    >
                        Generate
                    </button>
                </div>
            </div>


            {/* Mood Board */}
            <div className="flex flex-wrap gap-2 transition-all">
                {visibleMoods.map(({ label }) => (
                <button
                    key={label}
                    onClick={() => handleMoodSelect(label)}
                    className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition"
                >
                    {label}
                </button>
                ))}
            </div>
        </div>
    )
}

export default MoodSelector