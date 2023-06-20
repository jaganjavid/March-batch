import PropTypes from "prop-types";

const Card = ({children, reverse}) => {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )

     return (
        <div className='card'
        style={{
            backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#ffffff",
            color: reverse ? "#ffffff":"#000000"
        }}>
            {children}
        </div>
     )
}

Card.defaultProps = {
    reverse : false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}


export default Card