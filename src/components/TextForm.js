// {usestate} is a hook, they let you use state and other react features without writing a class.
import React, { useState } from 'react'

export default function TextForm(props) {
    // const [currentColor,setColor]=useState({
    //     color:'black'
    // })

    // const changeBgColor=()=>{
    //     if(currentColor==='black'){
    //         setColor({
    //             color:'white'
    //         });
    //     }else{
    //         setColor({
    //             color:'black'
    //         });
    //     }
    // }
    const convertUpCase = () => {
        // console.log("Uppercase was clicked..."+text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const convertLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handelOnChange = (event) => {
        // console.log("Onchange was clicked...")
        setText(event.target.value)
    }
    const clearText = () => {
        setText("")
    }
    const searchTextName = (event) => {
        //  Added event.preventDefault() in the searchTextName function to prevent the form from submitting and refreshing the page.
        event.preventDefault();
        let textToSearch = document.getElementById('searchText').value;
        let indices = [];
        let startIndex = 0;
        // !== -1 ensures that startIndex is not equal to -1 and also that it is of the same type (both are numbers).
        while ((startIndex = text.indexOf(textToSearch, startIndex)) !== -1) {
            indices.push(startIndex);
            startIndex += textToSearch.length;
        }
        if (indices.length > 0) {
            document.getElementById('searchedText').innerText = indices.join(" ,");
        } else {
            let notFound = "Not Found Any Text!"
            document.getElementById('searchedText').innerText = notFound;
        }
    }

    // Clipboard API - writeText Method:
    const copyToClipBoard = () => {

        // navigator.clipboard: This is part of the Clipboard API, which provides methods to interact with the system clipboard.
        // writeText(text): This method writes the specified text to the clipboard. The text variable is passed to this method, which is presumably the current state of the text in your component.

        // navigator is a global object in JavaScript that provides information about the web browser and its capabilities. It is part of the Browser Object Model (BOM) and is accessible from the window object.
        // The writeText method returns a Promise. Promises are used for asynchronous operations and have two main methods for handling results: .then() and .catch().
        // .then(): This method is called when the Promise is resolved successfully, meaning the text has been copied to the clipboard.
        // .catch(): This method is called if the Promise is rejected, meaning an error occurred while trying to copy the text to the clipboard. 
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard....')
            })
            .catch(err => {
                console.log("Failed to Copy text:" + text)
            })
    }

    // Handel Extra Spaces:
    // [ ] (a space inside the brackets) matches a single space character.
// + is a quantifier that matches one or more of the preceding element (in this case, a space).
// Therefore, /[ ]+/ matches one or more space characters.

    const handelExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const wordsCount=(text)=>{
        return text.trim().split(/\s+/).filter(word=>word.length>0).length;
    }
    // THIS MUST BE INSIDE FUNCTION OF COMPONENT.and remember the format
    const [text, setText] = useState("Enter your text here..");//in text the default value is Enter your text here.. aur jb bhi me is text ko update krunga me setText() function k through krungaa. So ab me text ko jaha bhi use krunnga vaha vaha vo update ho jayega bina page ko reload kre. so basically text nam ka ek variable me use krna chahta hu aur jb use update kre to hum text="sad" ese krke use update nai kr skte hme use setText function which is UPDATION FUNCTION ki help se hi krna pdega.. setText("new text").

    // text="updated text"; WRONG WAY TO CHANGE THE STATE...
    // setText("updated text");//CORRECT WAY TO CHANGE THE STATE...
    return (
        <>
            <div className="container" style={{color:props.mode=='dark'?'white':'black'}}>

                {/* className={`text-${props.mode=='dark'?'light':'dark'}`}=>this can also be applied to all tags or only div also. AND BY USING THAT IT LOOKS MORE GOOD SO YOU CAN TRY THAT ALSO IF NEED.. */}
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* By setting the value of the <textarea> to text and updating text with setText, you ensure that the component is controlled by React.The handleOnChange function updates the state (text) with the new value from the textarea, ensuring real-time updates. */}

                    {/* one bracket is for javascript and other is for object */}
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode=='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}} onChange={handelOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button onClick={convertUpCase}  className="btn btn-primary mx-2">Convert to UpperCase</button>
                <button onClick={convertLoCase}  className="btn btn-primary mx-2">Convert to LowerCase</button>
                <button onClick={clearText}  className="btn btn-primary mx-2">Clear Text</button>
                <button onClick={copyToClipBoard}  className="btn btn-primary mx-2">Copy To Clipboard</button>
                <button onClick={handelExtraSpace}  className="btn btn-primary mx-2">Remove Extra Spaces</button>
                <form className="d-flex my-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='searchText' />
                    <button className={`btn btn-outline-danger text-${props.mode=='dark'?'light':'dark'}`} type="submit" onClick={searchTextName}>Search</button>
                </form>
                <h1>Searched Text...</h1>
                <div className='container my-3'>
                    <p id='searchedText'>Text:</p>
                </div>
            </div>
            <div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>

                <h1>Your text summary</h1>
                {/* <p>1233 words and 3423421 characters</p> */}

                {/* while writing text automatically adding words and number of characters... */}
                <p>{wordsCount(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here.."}</p>
            </div>
        </>
    )
}
