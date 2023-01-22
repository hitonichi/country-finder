const Filter = ({
    newFilter,
    handleFilterChange
}) => {
    return (
        <div>
            <div>Find Countries:</div>
            <input
                value={newFilter}
                onChange={handleFilterChange}
            ></input>
        </div>
    )
}

export default Filter