import React, { useState } from 'react';
function CandidatesPage() {
  
    const [candidateList, setCandidateList] = useState([
        {candidate: ''},
    ])

    console.log(candidateList)

    const handleCandidateAdd = () => {
        setCandidateList([...candidateList, {candidate: ""}])
    }

    const handleCandidateRemove = (index) => {
        const list =[...candidateList]
        list.splice(index, 1)
        setCandidateList(list)
    }

    const handleCandidateChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...candidateList];
        list[index][name] = value;
        setCandidateList(list);
    }
    return(
        <form autoComplete="off">
        <div>
          <h1>Candidates(s)</h1>
          <h3>Add or remove any potential candidates using the buttons provided. </h3>
          {candidateList.map((singleCandidate, index) => (
            <div key={index} className="candidates">
              <div className="first-division">
                <input
                  name="candidate"
                  type="text"
                  id="candidate"
                  value={singleCandidate.service}
                  onChange={(e) => handleCandidateChange(e, index)}
                  required
                />
                {candidateList.length - 1 === index && candidateList.length < 15 && (
                  <button
                    type="button"
                    onClick={handleCandidateAdd}
                    className="add-btn"
                  >
                    <span>Add a candidate</span>
                  </button>
                )}
              </div>
              <div className="second-division">
                {candidateList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleCandidateRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
    
      </form>
    );
  } 

/* 
 <div className="output">
          <h2>Output</h2>
          {candidateList &&
            candidateList.map((singleCandidate, index) => (
              <ul key={index}>
                {singleCandidate.candidate && <li>{singleCandidate.candidate}</li>}
              </ul>
            ))}
        </div>
*/


export default CandidatesPage;