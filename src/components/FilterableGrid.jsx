import { useState, useMemo } from 'react';

const FilterableGrid = ({ items, filterKey = 'technologies', renderItem, gridClassName = '' }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Extract all unique filter values
  const allFilters = useMemo(() => {
    const filters = new Set(['all']);
    items.forEach((item) => {
      const filterValues = item[filterKey] || [];
      filterValues.forEach((value) => filters.add(value));
    });
    return Array.from(filters);
  }, [items, filterKey]);

  // Filter items based on selected filter
  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') return items;
    return items.filter((item) => {
      const filterValues = item[filterKey] || [];
      return filterValues.includes(selectedFilter);
    });
  }, [items, filterKey, selectedFilter]);

  return (
    <div className="filterable-grid">
      <div className="filter-chips">
        {allFilters.map((filter) => (
          <button
            key={filter}
            className={`filter-chip ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={`grid-container ${gridClassName}`.trim()}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="grid-item stagger-item">
              {renderItem(item)}
            </div>
          ))
        ) : (
          <p className="no-results">No items found for this filter.</p>
        )}
      </div>
    </div>
  );
};

export default FilterableGrid;

