function Counter(props) {
    return Counter(
        <div className="counter">
            <div className="steps">
                <button>-</button>
                <span>Steps</span>
                <button>+</button>
                <p>{props.value}</p>
            </div>
        </div>
    )
}
export default Counter