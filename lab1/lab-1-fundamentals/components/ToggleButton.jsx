function ToggleButton({ isvisible}) {
    return (
        <div className="toggle-container">
            <button className="toggle-button">Click Me!</button>
            {isvisible ?(
                <p className="toggle-text visable">Content is visible</p>
                ) : (
                <p className="toggle-text hidden">Content is hidden</p>
            )}
        </div>
    )
}

export default ToggleButton