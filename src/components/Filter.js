const Filter = ({
    newFilter,
    handleFilterChange
}) => {
    return (
        <div className="filter-container">
            <div className="center">
                <h2>Find Countries:</h2>
            </div>
            <input
                value={newFilter}
                onChange={handleFilterChange}
            ></input>
        </div>
    )
}

export default Filter