import { useState } from "react";

import JoblyApi from "../API/api";

export const useJobApplication = (authorized) => {
  const [hasApplied, setHasApplied] = useState(new Set([]));

  function hasAppliedToJob(id) {
    return hasApplied.has(id);
  }

  function applyToJob(id) {
    // console.log(id);
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(authorized.username, id);
    setHasApplied(new Set([...hasApplied, id]));
  }

  return [applyToJob, hasApplied, setHasApplied];
};
