import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">
        Candidate Search
      </Link>
      <Link to="/SavedCandidates" className="nav-link">
        Saved Candidates
      </Link>
    </nav>
  );
};

export default Nav;
