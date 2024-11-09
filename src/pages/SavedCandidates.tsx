import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";
import { getSavedCandidates, removeCandidate } from "../utils/storage";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    setCandidates(getSavedCandidates());
  }, []);

const handleRemoveCandidate = (username: string) => {
  removeCandidate(username);
  setCandidates(getSavedCandidates()); 
};

  return (
    <div>
      <h1>Potential Candidates</h1>
      {candidates.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>
                  <img
                    src={candidate.avatar_url}
                    alt="avatar"
                    className="candidate-avatar"
                  />
                </td>
                <td>{candidate.name || candidate.login}</td>
                <td>{candidate.location || "N/A"}</td>
                <td>{candidate.email || "N/A"}</td>
                <td>{candidate.company || "N/A"}</td>
                <td>{candidate.bio || "N/A"}</td>
                <td>
                  <button
                    onClick={() => handleRemoveCandidate(candidate.login)}
                    className="button-remove"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
