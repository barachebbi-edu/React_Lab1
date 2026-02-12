// ERROR 1: What's wrong here?
// The div tag is not added.
//OR u can use fragment <> </> to wrap the return elements.
function BadComponent1() { 
    return ( 
        <div>
    <h1>Hello</h1> 
    <p>This is broken</p> 
        </div>
  ) 
} 
// ERROR 2: What's wrong here?
// The conditional expression is not wrapped in curly braces.

function BadComponent2() { 
    const isTrue = true 
    return ( 
        <div> 
            <p>Result: {(isTrue) ? 'Yes' : 'No'}</p> 
        </div> 
  ) 
} 
// ERROR 3: What's wrong here?
// The img tag is not closed. In JSX, all tags must be properly closed, even self-closing tags like <img>.
//the correct way to use class is className in JSX, so we need to change class to className in the div tag.
function BadComponent3() { 
    return ( 
        <div className="container"> 
            <img src="cat.jpg" /> 
            <p>A paragraph</p> 
        </div> 
  ) 
}