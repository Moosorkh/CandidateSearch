export const getSavedCandidates = () => {
  return JSON.parse(localStorage.getItem("savedCandidates") || "[]");
};

export const saveCandidate = (candidate: any) => {
  const saved = getSavedCandidates();
  saved.push(candidate);
  localStorage.setItem("savedCandidates", JSON.stringify(saved));
};

export const removeCandidate = (username: string) => {
  const saved = getSavedCandidates().filter((c: { login: string }) => c.login !== username);
  localStorage.setItem("savedCandidates", JSON.stringify(saved));
};