import { Dispatch, SetStateAction } from "react";

export interface InterviewFlowContexts {
  setRole: Dispatch<SetStateAction<string>>;
  role: string;
  setLevel: Dispatch<SetStateAction<string>>;
  level: string;
  setMode: Dispatch<SetStateAction<string>>;
  skills: string[];
  setSkills: Dispatch<SetStateAction<string[]>>;
  mode: string;
}
