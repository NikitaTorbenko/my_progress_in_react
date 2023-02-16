const CardComponent = ({cardArr}) => {
    console.log(cardArr)

    const showMore = () => {
        
    }

    return ( 
        <>
            <div>{cardArr.map((el, index) => (
                <h1 key={index}>{el}</h1>
            ))}</div>
            <button onClick={showMore}>Показать еще</button>
        </>
        
    );
}
 
export default CardComponent;