import React from 'react'
import './card.css'

type Member = {
  name: string,
  imgUrl: string,
  noOfReads: number
}

interface ButtonProps {
  label: string
  members: Array<Member>
  /**
   * Optional click handler
   */
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({ label, members, ...props }: ButtonProps) => {
  return (
    <ul className="grid">
      {members.map((member) => (
        // <li key={member.name}>{member.name}</li>
        <div className="card">
          <div className="container" >
            <img src={member.imgUrl} alt="Avatar" style={{borderRadius: "50%", "width":"50px", paddingLeft: "10px", paddingRight: "10px"}}></img>
            <p style={{display: 'inline-block', 
                  marginLeft: '4px',}}>
              <h4
                style={{
                  display: 'inline-list-item',
                  padding: '0px',
                  marginBottom: '4px',
                }}
              >
                <b>{member.name}</b>
              </h4>
              {/* <br></br> */}
              <h4
                style={{
                  display: 'inline-list-item',
                  padding: '0px',
                  marginTop: '0px',
                }}
              >
                <b>{member.noOfReads} books read</b>
              </h4>
              {/* <h4><b>{member.name}</b></h4> */}
            </p>
          </div>
        </div>
      ))}
    </ul>
  )
}
