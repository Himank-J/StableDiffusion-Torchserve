import { atom } from "jotai";

import { atomWithStorage } from "jotai/utils";

type JobType = {jobId: string; prompt: string; status: "SUCCESS" | "ERROR" | "PENDING"; url: string}

const jobsAtom = atomWithStorage<JobType[]>("sdxl-jobs", []);

export {
    jobsAtom
}

export type {
    JobType
}