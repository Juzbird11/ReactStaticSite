
const FeesCard = (props) => {
    return (
        <div className="feesCard">
            <div>{ props.duration }</div>
            <div>{ props.time }</div>
            <div>{ props.fees }</div>
        </div>
    )
}

export default FeesCard;