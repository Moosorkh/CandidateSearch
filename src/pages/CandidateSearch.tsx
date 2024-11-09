import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";
import { saveCandidate } from "../utils/storage";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidatesList, setCandidatesList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      // Fetch basic candidates list (without details)
      const basicCandidates = await searchGithub();

      // Extract usernames and store them in the state
      const usernames = basicCandidates.map((user: any) => user.login);
      console.log("Usernames:", usernames);
      setCandidatesList(usernames);

      // Fetch details for the first username
      if (usernames.length > 0) {
        fetchCandidateDetails(usernames[0]);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const fetchCandidateDetails = async (username: string) => {
    try {
      const userData = await searchGithubUser(username);
      console.log("Fetched user data:", userData);
      setCandidate(userData || null);
    } catch (error) {
      console.error("Error fetching candidate details:", error);
      setCandidate(null);
    }
  };

  const fetchNextCandidate = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < candidatesList.length) {
      setCurrentIndex(nextIndex);
      fetchCandidateDetails(candidatesList[nextIndex]);
    } else {
      setCandidate(null); // No more candidates available
    }
  };

  const handleSaveCandidate = () => {
    if (candidate) {
      saveCandidate(candidate);
      fetchNextCandidate();
    }
  };

  const handleSkipCandidate = () => {
    fetchNextCandidate();
  };

  return (
    <div className="candidate-container">
      {candidate ? (
        <div className="candidate-card">
          <img
            src={candidate.avatar_url}
            alt="avatar"
            className="candidate-avatar-large"
          />
          <h2 className="candidate-name">
            {candidate.name || candidate.login}
          </h2>
          <p>Location: {candidate.location || "Not provided"}</p>
          <p>Email: {candidate.email || "Not provided"}</p>
          <p>Company: {candidate.company || "Not provided"}</p>
          <a
            href={candidate.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub Profile
          </a>
          <div className="candidate-actions">
            <button
              onClick={handleSaveCandidate}
              className="button button-save"
            >
              <span className="icon-plus">+</span> Save
            </button>
            <button
              onClick={handleSkipCandidate}
              className="button button-skip"
            >
              <span className="icon-minus">-</span> Skip
            </button>
          </div>
        </div>
      ) : (
        <p className="no-candidates-message">No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
