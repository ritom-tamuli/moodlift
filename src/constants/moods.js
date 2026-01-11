export const MOODS = {
  sad: {
    label: "sad",
    incompatible: ["ecstatic"],
  },
  happy: {
    label: "happy",
    incompatible: ["sad", "anxious"]
  },
  overwhelmed: {
    label: "overwhelmed",
    incompatible: ["calm"],
  },
  calm: {
    label: "calm",
    incompatible: ["overwhelmed", "anxious"],
  },
  anxious: {
    label: "anxious",
    incompatible: ["calm"],
  },
  lonely: {
    label: "lonely",
    incompatible: [],
  },
  hopeful: {
    label: "hopeful",
    incompatible: [],
  },
  motivated: {
    label: "motivated",
    incompatible: ["sad"],
  },
  grateful: {
    label: "grateful",
    incompatible: [],
  }
}
