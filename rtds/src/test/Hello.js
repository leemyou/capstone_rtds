export default function Hello(){

    var age = 10;

    function showName(){
        console.log("Emyo");
    }
    function showAge(){
        console.log(age)
    } 
    function showText(e) {
        console.log(e.target.value)
    }
    
    return(
        <>
            <h1>Hello</h1>
            <button onClick={showName}>
                Show name</button>
            <button onClick={() => {
                showAge(22);
            }}>
                age</button>

            <input type="text" onChange={showText}  />
        </>
    )
}