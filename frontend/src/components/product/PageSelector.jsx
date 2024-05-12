import './PageSelector.css';

const PageSelector = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pageSelector">
      {pages.map(page => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PageSelector;
