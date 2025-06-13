import React from 'react'

interface Props {
  selected: 'all' | 'active' | 'completed'
  setFilter: (filter: 'all' | 'active' | 'completed') => void
}

const Filter: React.FC<Props> = ({ selected, setFilter }) => {
  return (
    <div className="filters">
      {['all', 'active', 'completed'].map(option => (
        <button
          key={option}
          className={selected === option ? 'active' : ''}
          onClick={() => setFilter(option as 'all' | 'active' | 'completed')}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default Filter
