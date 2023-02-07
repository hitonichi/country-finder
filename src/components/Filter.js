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
                type={'text'}
                onChange={e => handleFilterChange(e)}
                value={newFilter}
            ></input>
        </div>
    )
}

export default Filter